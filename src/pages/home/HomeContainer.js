import React, { useState } from 'react';

import Home from './Home';

const HomeContainer = () => {
  const [email, setEmail] = useState('');

  const onEmailFormSubmit = (e) => {
    e.preventDefault();
    console.log(email); // @TODO : use service
  };

  const handleFormChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
  };

  return (
    <Home
      email={email}
      handleFormChange={handleFormChange}
      onEmailFormSubmit={onEmailFormSubmit}
    />
  );
};

export default HomeContainer;
