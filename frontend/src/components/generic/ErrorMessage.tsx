import React from 'react';

interface ErrorMessageProps {
  error: string | null;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({error}) => {
 
  if(!error) return null;

  return <p style={{color: 'red'}}>{error}</p>

};


export default ErrorMessage;



