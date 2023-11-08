'use client';
import React, { useState } from 'react';
import Header from '../components/Header';
import SignUpForm from '../components/SignUpForm';

const branchOptions = [
  { value: 'Btech', label: 'B.Tech' },
  { value: 'Bpharma', label: 'B.Pharma' },
  { value: 'MCA', label: 'MCA' },
  { value: 'MBA', label: 'MBA' },
];

const SignUpPage: React.FC = () => {
  const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    collegeId: '',
    branch: branchOptions[0].value,
    sem: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleSignUp = () => {
    // Handle sign-up logic here with the formData
  };

  const handleFormChange = (key: string, value: string) => {
    setFormData({ ...formData, [key]: value });
  };

  return (
    <div>
      <Header title="Sign up for an account" subtitle="Already have an account?" link="SignIn" name="Sign in here" />
      <SignUpForm formData={formData} onChange={handleFormChange} onFormSubmit={handleSignUp} />
    </div>
  );
};

export default SignUpPage;
