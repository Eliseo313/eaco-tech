import React from 'react';
import Header from './Header';
import Features from './Features';
import ContactForm from './ContactForm';
import Footer from './Footer';
import './Home.css';

function Home() {
  return (
    <div className="App">
      <Header />
      <Features />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Home;
