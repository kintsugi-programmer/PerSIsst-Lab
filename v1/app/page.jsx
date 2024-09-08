import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Page = () => {
  return (
    <div>
      <Nav />
      <div>
        <h1>Welcome to the PerSIsst Lab</h1>
        <p>This is the main landing page of the PerSIsst Lab.</p>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
