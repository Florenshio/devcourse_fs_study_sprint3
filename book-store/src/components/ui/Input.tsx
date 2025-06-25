import React, { forwardRef } from 'react';
import './Input.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
  className?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ 
    label, 
    error, 
    fullWidth = false, 
    className = '', 
    ...rest 
  }, ref) => {
    return (
      <div className={`input-container ${fullWidth ? 'input-full-width' : ''} ${className}`}>
        {label && <label className="input-label">{label}</label>}
        <input 
          ref={ref}
          className={`input ${error ? 'input-error' : ''}`}
          {...rest}
        />
        {error && <p className="input-error-message">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
