import React from 'react';

const Container = ({ children, className = '', size = 'default' }) => {
  const sizeClasses = {
    small: 'container container-sm',
    default: 'container',
    large: 'container container-lg',
    fluid: 'container-fluid'
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      {children}
    </div>
  );
};

export default Container;