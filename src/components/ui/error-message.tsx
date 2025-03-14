import React from 'react';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <div className="text-valtech-red p-4 rounded border border-valtech-red bg-valtech-light">
    {message}
  </div>
);

export default ErrorMessage;