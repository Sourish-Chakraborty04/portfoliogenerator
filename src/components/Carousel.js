import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselComponent = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/800x400?text=Wider+Ranges"
                    alt="Wider Ranges"
                />
                <Carousel.Caption>
                    <h3>Wider Ranges</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/800x400?text=Customisation"
                    alt="Customisation"
                />
                <Carousel.Caption>
                    <h3>Customisation</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/800x400?text=Budget+Friendly"
                    alt="Budget Friendly"
                />
                <Carousel.Caption>
                    <h3>Budget Friendly</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default CarouselComponent;