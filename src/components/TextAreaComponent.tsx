import React from 'react';


interface TextAreaComponentProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  className?: string;
}

const TextAreaComponent: React.FC<TextAreaComponentProps> = ({
  label,
  error,
  className = '',
  ...props
}) => {
  return (
    <div className={`flex flex-col w-full gap-1 ${className}`}>
      {label && <label htmlFor={props.id || props.name} className="font-medium text-sm capitalize text-gray-700">{label}</label>}
      <textarea
        className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all text-base resize-none"
        {...props}
        rows={7}
      />
      {error && <span className="text-xs text-red-500 mt-1">{error}</span>}
    </div>
  );
};

export default TextAreaComponent;
