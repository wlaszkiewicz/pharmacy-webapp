import React, { useState, ChangeEvent, FormEvent } from "react";
import "./LoginScreen.css";
import { FaUserAlt, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

interface LoginProps {
  onLoginSuccess: () => void;
  onNavigateToRegister: () => void;
}

const Login: React.FC<LoginProps> = ({
  onLoginSuccess,
  onNavigateToRegister,
}) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  const toggleShowPassword = (): void => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please provide both your credentials.");
      return;
    }

    if (email !== "admin@gmail.com" || password !== "miata123") {
      setError("Invalid email or password. Please try again.");
      return;
    } else {
      setError(""); // clear error if login is successful
      onLoginSuccess(); // success callback
      return;
    }
  };

  const handleForgotPassword = () => {
    alert("Not implemented yet lolz.");
  };

  return (
    <div className="login-container">
      <div className="login-artwork">
        <img
          src="/ELIXIR.png"
          alt="Elixir Brand Logo"
          className="artwork-brand-logo"
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            // fallback to a default image if the logo fails to load
          }}
        />
        <p>Exclusive Access to Premium Wellness</p>
      </div>
      <div className="login-form-wrapper">
        <div className="login-form">
          <div className="logo-container">
            <h3>MEMBER SIGN IN</h3>
            <p>Enter your credentials to access your account.</p>
          </div>

          {error && <p className="error-message">{error}</p>}

          <form onSubmit={handleSubmit} noValidate>
            <Input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={handleEmailChange}
              icon={<FaUserAlt />}
              ariaLabel="Email Address"
              autoComplete="email"
              required
            />
            <div className="input-group password-input-group">
              {" "}
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                icon={<FaLock />}
                ariaLabel="Password"
                autoComplete="current-password"
                required
              />
              <Button
                type="button"
                onClick={toggleShowPassword}
                variant="icon"
                className="password-toggle-button-reusable"
                ariaLabel={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </Button>
            </div>

            <div className="options">
              <label htmlFor="remember-me-checkbox">
                <input
                  id="remember-me-checkbox"
                  type="checkbox"
                  name="remember"
                />
                Stay Signed In
              </label>
              <Button
                type="button"
                onClick={handleForgotPassword}
                variant="link"
              >
                Retrieve Password
              </Button>
            </div>

            <Button
              type="submit"
              variant="primary"
              className="login-submit-button"
            >
              Login
            </Button>
          </form>
          <div className="create-account-link">
            <p>
              Not yet a member?{" "}
              <Button
                type="button"
                onClick={onNavigateToRegister}
                variant="link"
              >
                Request an Invitation
              </Button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
