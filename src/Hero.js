import { Button, Container } from '@material-ui/core';
import React from 'react';
import './scss/Hero.scss';

import HeroImage from './img/hero-image.png';

function Hero() {
    return (
        <div className="hero">
            <Container maxWidth="lg" className="hero__content">
                <div className="hero__text">
                    <h6><em>Are you hungry?</em></h6>
                    <h1>Don't wait !</h1>
                    <Button className="button">
                        Order Now
                    </Button>
                </div>
                <div className="hero__image">
                    <img src={HeroImage} alt="Food"></img>
                </div>
            </Container>
        </div>
    )
}

export default Hero
