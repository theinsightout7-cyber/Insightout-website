import React from 'react';

interface ButtonComponentProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  className?: string;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({ label, className = '', children, ...props }) => {
  return (
    <button
      className={`px-4 w-full py-2 rounded text-white bg-[var(--primary-blue)]  transition-colors font-semibold disabled:opacity-60 disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      {label || children}
    </button>
  );
};

export default ButtonComponent;
