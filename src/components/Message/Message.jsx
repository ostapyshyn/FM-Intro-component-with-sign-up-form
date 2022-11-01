import React from 'react';
import { useLocation } from 'react-router-dom';

const Message = () => {
  const location = useLocation();
  return <div>{location.state.email}</div>;
};

export default Message;
