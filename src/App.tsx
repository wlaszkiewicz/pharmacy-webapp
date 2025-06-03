import React, { useState } from "react";
import LoginScreen from "./pages/Login/LoginScreen";
import RegisterScreen from "./pages/Register/RegisterScreen";
import HomeScreen from "./pages/Home/Home";
import "./App.css";

type ScreenView = "login" | "register" | "home";

function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenView>("login");

  const handleLoginSuccess = () => {
    setCurrentScreen("home");
  };

  const handleRegisterSuccess = () => {
    alert("Registration successful! Please log in.");
    setCurrentScreen("login");
  };

  const navigateToRegister = () => {
    setCurrentScreen("register");
  };

  const navigateToLogin = () => {
    setCurrentScreen("login");
  };

  const handleLogout = () => {
    setCurrentScreen("login");
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case "login":
        return (
          <LoginScreen
            onLoginSuccess={handleLoginSuccess}
            onNavigateToRegister={navigateToRegister}
          />
        );
      case "register":
        return (
          <RegisterScreen
            onRegisterSuccess={handleRegisterSuccess}
            onNavigateToLogin={navigateToLogin}
          />
        );
      case "home":
        return <HomeScreen onLogout={handleLogout} />;
      default:
        console.warn("Unknown screen state:", currentScreen);
        return (
          <LoginScreen
            onLoginSuccess={handleLoginSuccess}
            onNavigateToRegister={navigateToRegister}
          />
        );
    }
  };

  return <div className="App">{renderScreen()}</div>;
}

export default App;
