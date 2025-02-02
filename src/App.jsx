import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import MailSender from './components/main/MailSender';

const App = () => {
  return (
    <>
      <Navbar/>
      <main className="flex-grow">
        <MailSender/>
      </main>
      <Footer/>
    </>
  )
}

export default App