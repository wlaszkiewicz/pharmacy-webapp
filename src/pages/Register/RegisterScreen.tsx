import React, { useState, FormEvent } from "react";
import "./RegisterScreen.css";
import {
  FaUserCircle,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

interface RegisterProps {
  onRegisterSuccess: () => void;
  onNavigateToLogin: () => void;
}

const Register: React.FC<RegisterProps> = ({
  onRegisterSuccess,
  onNavigateToLogin,
}) => {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const [agreedToTerms, setAgreedToTerms] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setError("");
    if (!fullName || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (password.length > 20) {
      setError("Password must not exceed 20 characters.");
      return;
    }
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/.test(password)) {
      setError(
        "Password must contain at least one uppercase letter, one lowercase letter, and one number."
      );
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (!agreedToTerms) {
      setError("You must agree to the Terms & Conditions.");
      return;
    }
    console.log("Registering:", { fullName, email, password });
    // simulating
    alert("Registration successful!");
    onRegisterSuccess();
  };

  const handleViewTerms = () => {
    alert("Terms & Conditions page/modal to be implemented.");
  };

  return (
    <div className="login-container">
      {" "}
      <div className="login-artwork">
        <img
          src="/ELIXIR.png"
          alt="Elixir Brand Logo"
          className="artwork-brand-logo"
        />
        <p>Join the Elixir sociaty and elevate your wellness journey.</p>
      </div>
      <div className="login-form-wrapper">
        <div className="login-form">
          <div className="logo-container">
            <h3>CREATE YOUR ACCOUNT</h3>
            <p>Become a member to unlock exclusive wellness solutions.</p>
          </div>
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleSubmit} noValidate>
            <Input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              icon={<FaUserCircle />}
              required
              autoComplete="name"
            />
            <Input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              icon={<FaEnvelope />}
              required
              autoComplete="email"
            />
            <div className="input-group password-input-group">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                icon={<FaLock />}
                required
                autoComplete="new-password"
              />
              <Button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                variant="icon"
                className="password-toggle-button-reusable"
                ariaLabel={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </Button>
            </div>
            <div className="input-group password-input-group">
              <Input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                icon={<FaLock />}
                required
                autoComplete="new-password"
              />
              <Button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                variant="icon"
                className="password-toggle-button-reusable"
                ariaLabel={
                  showConfirmPassword ? "Hide password" : "Show password"
                }
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </Button>
            </div>
            <div className="options" style={{ marginBottom: "25px" }}>
              <label htmlFor="terms-checkbox">
                <input
                  id="terms-checkbox"
                  type="checkbox"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                />
                I agree to the{" "}
                <Button type="button" onClick={handleViewTerms} variant="link">
                  Terms & Conditions
                </Button>
              </label>
            </div>
            <Button
              type="submit"
              variant="primary"
              className="login-submit-button"
            >
              Register
            </Button>
          </form>
          <div className="create-account-link">
            <p>
              Already have an account?{" "}
              <Button type="button" onClick={onNavigateToLogin} variant="link">
                Sign In Here
              </Button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
