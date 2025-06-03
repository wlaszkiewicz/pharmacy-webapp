import React, { useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import "./Home.css";

interface HomeProps {
  onLogout: () => void;
}

const HomePage: React.FC<HomeProps> = ({ onLogout }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [mainContent, setMainContent] = useState<
    "home" | "dashboard" | "profile" | "settings"
  >("dashboard");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Searching for: ${searchTerm}`);
  };

  const renderMainContent = () => {
    switch (mainContent) {
      case "profile":
        return <h2>User Profile Section</h2>;
      case "settings":
        return (
          <div>
            <h2>Settings Section</h2>
            <p>Adjust your preferences here.</p>
            <Input
              type="text"
              placeholder="Enter new preference"
              value=""
              onChange={() => {}}
            />
            <Button variant="secondary">Save Settings</Button>
          </div>
        );
      case "dashboard":
        return (
          <div>
            <h2>Dashboard</h2>
            <p>Welcome to your personalized wellness dashboard!</p>
            <form onSubmit={handleSearchSubmit} className="home-search-form">
              <Input
                type="search"
                placeholder="Search features..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="home-search-input"
              />
              <Button type="submit" variant="secondary">
                Search
              </Button>
            </form>
          </div>
        );
      case "home":
      default:
        return (
          <div>
            <h2>Welcome to Elixir</h2>
            <p>Your journey to wellness starts here.</p>
            <p>
              Explore our features and find the best solutions for your health
              and wellness needs.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="home-container">
      <nav className="home-nav">
        <div className="home-nav-logo">
          <img src="/ELIXIR_name.png" alt="Elixir Logo" />
        </div>
        <ul>
          <li
            onClick={() => setMainContent("home")}
            className={mainContent === "home" ? "active" : ""}
          >
            Home
          </li>
          <li
            onClick={() => setMainContent("dashboard")}
            className={mainContent === "dashboard" ? "active" : ""}
          >
            Dashboard
          </li>
          <li
            onClick={() => setMainContent("profile")}
            className={mainContent === "profile" ? "active" : ""}
          >
            Profile
          </li>
          <li
            onClick={() => setMainContent("settings")}
            className={mainContent === "settings" ? "active" : ""}
          >
            Settings
          </li>
        </ul>
        <Button
          onClick={onLogout}
          variant="primary"
          className="home-logout-button"
        >
          Logout
        </Button>
      </nav>
      <main className="home-main-content">{renderMainContent()}</main>
    </div>
  );
};

export default HomePage;
