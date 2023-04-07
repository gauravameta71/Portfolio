import React from 'react'
import Footer from '../Components/Footer';
import Form from '../Components/Form';
import HeroImg2 from '../Components/HeroImg2';
import NavBar from '../Components/NavBar';

const Contact = () => {
  return (
    <div>
      <NavBar/>
      <HeroImg2 heading="CONTACT" text="Let's   have   a   Chat!"/>
      <Form alert="Sent"/>
      <Footer/>
    </div>
  );
}

export default Contact
