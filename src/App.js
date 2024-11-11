import React from 'react';
import NavigationBar from './components/Navbar';
import CarouselComponent from './components/Carousel';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Services from './components/Services';

const App = () => {
    return (
        <div>
            <NavigationBar />
            <CarouselComponent />
            <About />
            <Portfolio />
            <Contact />
            <Services />
        </div>
    );
};

export default App;