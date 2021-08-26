import React from 'react';

const Error = ({ error }) => {
  // o error ta dentro do props
  if (!error) return null;
  return <p style={{ color: '#f31', margin: '1rem' }}>{error}</p>;
};

export default Error;
