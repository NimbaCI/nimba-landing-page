import React, { useEffect, useState } from 'react';

import { saveEmail } from '../../services/emails';
import { ping as pingServer } from '../../services/ping';
import Home from './Home';

const HomeContainer = () => {
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const tiers = [
    {
      name: "Bit by bit Patron",
      price: "1",
      advantages: ["Infinite gratitude"],
      link: "https://www.patreon.com/join/florianadonis/checkout?rid=8810437&cadence=1",
    },
    {
      name: "Show-some-love Patron",
      price: "5",
      advantages: ["Infinite gratitude", "Patron-only decision power"],
      link: "https://www.patreon.com/join/florianadonis/checkout?rid=8810446&cadence=1",
    },
    {
      name: "True-believer Patron",
      price: "15",
      advantages: ["Infinite gratitude", "Patron-only decision power", "Public thanks on the landing page"],
      link: "https://www.patreon.com/join/florianadonis/checkout?rid=8810447&cadence=1",
    },
  ];

  useEffect(() => {
    pingServer();
  }, []);

  const toggleShowToast = () => setShowToast(!showToast);

  const onEmailFormSubmit = async (e) => {
    e.preventDefault();

    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
      setErrorEmail(true);
    } else {
      setIsLoading(true);
      await saveEmail(email);
      setIsLoading(false);
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
      isLoading={isLoading}
      toggleShowToast={toggleShowToast}
      showToast={showToast}
      tiers={tiers}
      handleFormChange={handleFormChange}
      onEmailFormSubmit={onEmailFormSubmit}
    />
  );
};

export default HomeContainer;
