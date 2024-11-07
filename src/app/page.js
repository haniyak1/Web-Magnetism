import React from 'react';
import Navbar from '@/Components/Navbar';
import Hero from '@/Components/Hero';
import Wave from '@/Components/Wave';
import Welcome from '@/Components/Welcome';
import Funnel from '@/Components/Funnel';
import Choose from '@/Components/Choose';
import Chooseus2 from '@/Components/Chooseus2';
import Services from '@/Components/Services';
import Banner from '@/Components/Banner';
import Work from '@/Components/Work';
import Client from '@/Components/Client'
import Insights from '@/Components/Insights'
import Contact from '@/Components/ContactForm'
import Footer from '@/Components/Footer'

const Page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Welcome />
      <Funnel />
      <Choose />
      <Chooseus2 />
      <Services />
      <Banner />
      <Work />
      <Client /> 
      <Insights/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Page;
