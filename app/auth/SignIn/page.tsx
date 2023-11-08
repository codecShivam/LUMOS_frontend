'use client';
import React, { useState } from 'react';
import Header from '../components/Header';
import SignInForm from '../components/SignInForm';

const SignIn: React.FC = () => {
  const [libId, setLibId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSignIn = (libId: string, password: string) => {
    // Handle login logic here with libId and password
  };

  return (
    <div>
      <Header title="Sign in to your account" subtitle="Don't have an account?" link="SignUp" name="Sign up here" />
      <SignInForm
        libId={libId}
        setPassword={setPassword}
        setLibId={setLibId}
        password={password}
        onFormSubmit={handleSignIn}
      />
    </div>
  );
};

export default SignIn;
