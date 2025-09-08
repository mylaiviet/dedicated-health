import { useState } from 'react';
import LandingPage from '@/components/LandingPage';
import MedplumLogin from '@/components/MedplumLogin';
import { isAuthenticated } from '@/lib/medplum';

const Index = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated());

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setShowLogin(false);
  };

  if (showLogin) {
    return <MedplumLogin onLoginSuccess={handleLoginSuccess} />;
  }

  return <LandingPage />;
};

export default Index;
