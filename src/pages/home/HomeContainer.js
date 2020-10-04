import React, { useState } from 'react';

import { saveEmail } from '../../services/emails';
import Home from './Home';

const HomeContainer = () => {
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const toggleShowToast = () => setShowToast(!showToast);

  const onEmailFormSubmit = async (e) => {
    e.preventDefault();

    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
      setErrorEmail(true);
    } else {
      await saveEmail(email);
      toggleShowToast();
      setEmail('');
    }
  };

  const handleFormChange = (e) => {
    const newEmail = e.target.value;

    if (errorEmail) {
      setErrorEmail(false);
    }

    setEmail(newEmail);
  };

  return (
    <Home
      email={email}
      errorEmail={errorEmail}
      toggleShowToast={toggleShowToast}
      showToast={showToast}
      handleFormChange={handleFormChange}
      onEmailFormSubmit={onEmailFormSubmit}
    />
  );
};

export default HomeContainer;
