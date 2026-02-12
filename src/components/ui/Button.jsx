import React from 'react';
import './Button.css';

const Button = ({ children, variant = 'primary', size = 'md', onClick, href, className = '' }) => {
  const baseClass = 'btn';
  const variantClass = `btn-${variant}`;
  const sizeClass = `btn-${size}`;
  
  const buttonClass = `${baseClass} ${variantClass} ${sizeClass} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={buttonClass}>
        {children}
        <span className="btn-arrow">→</span>
      </a>
    );
  }
  
  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
      <span className="btn-arrow">→</span>
    </button>
  );
};

export default Button;