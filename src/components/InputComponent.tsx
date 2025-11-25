import React from 'react';

interface InputComponentProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  className?: string;
}

const InputComponent: React.FC<InputComponentProps> = ({
  label,
  error,
  className = '',
  ...props
}) => {
  return (
    <div className={`flex w-full flex-col gap-1 ${className}`}>
      {label && <label htmlFor={props.id || props.name} className="font-medium text-sm text-gray-700 capitalize">{label}</label>}
      <input
        className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all text-base"
        {...props}
      />
      {error && <span className="text-xs text-red-500 mt-1">{error}</span>}
    </div>
  );
};

export default InputComponent;
