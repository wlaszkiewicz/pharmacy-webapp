import React, { ChangeEvent, ReactNode } from "react";
import "./Input.css";

interface InputProps {
  type: string;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  label?: string;
  id?: string;
  icon?: ReactNode;
  variant?: "default" | "dark";
  className?: string;
  autoComplete?: string;
  required?: boolean;
  ariaLabel?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  name,
  label,
  id,
  icon,
  variant = "default",
  className = "",
  autoComplete,
  required,
  ariaLabel,
}) => {
  const inputId = id || name;
  return (
    <div className={`input-component-wrapper ${className}`}>
      {label && <label htmlFor={inputId}>{label}</label>}
      <div className={`input-group-reusable ${variant}`}>
        {icon && <span className="input-icon-reusable">{icon}</span>}
        <input
          id={inputId}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
          required={required}
          aria-label={ariaLabel || placeholder}
          className={icon ? "input-with-icon" : ""}
        />
      </div>
    </div>
  );
};

export default Input;
