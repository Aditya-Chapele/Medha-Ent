import React from 'react';
import Clients from '../components/Clients';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Portfolio from '../components/Portfolio';
import Completion25yrs from '../components/completion25yrs.js';
// import Services from '../components/Services';
import Cta from '../components/Cta.js';
// import Testimonials from '../components/Testimonials.js';
import NumberSection from '../components/Number.js';


const Home = () => {
    return (
        <>
            <Hero />
            <Intro />
            {/* <Services /> */}
            <Portfolio />
            <Clients />
            <Completion25yrs />
            <NumberSection />
            {/* <Testimonials /> */}
            {/* <Cta /> */}
            <Footer />
        </>

    )
}

export default Home;

