import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner '>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100 image img-fluid"
                        src="https://www.kilroy.net/media/t3flmjdy/travel-festival-a-backpackers-guide-to-around-the-world.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='banner-title'>Enjoy Wonderful Experiences In All Around The World</h3>
                        <p className='w-75 mx-auto'>By breaking the country into smaller, more manageable areas, Make My Trip aims to create a virtual travel experience that allows the user to explore the sights of those places right from their computer.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 image img-fluid"
                        src="https://worldoftravelphotography.com/wp-content/uploads/2018/03/Beautiful-Sunsets-1024x683.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className='banner-title'>Get More Of What You've Been Missing.</h3>
                        <p className='w-75 mx-auto'> You are eligible for a refund if you cancel before the first 90 days of your subscription and have not completed a booking (i.e., stayed in a hotel or participated in an experience you booked). If you cancel after 90 days or you have already completed a booking, you will not be refunded and will continue to have access to Tripadvisor Plus until the end of your current term. Your ability to cancel or modify an individual booking depends on the terms and conditions associated with the specified hotel or experience supplier(s). Visit our Tripadvisor Plus Subscription Details page for more details.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 image img-fluid"
                        src="https://www.paddlecanada.com/wp-content/uploads/2017/12/membership.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className='banner-title'> Coming soon: Endless travel savings. One simple membership.</h3>
                        <p className='w-75 mx-auto'>Get member-only rates on your favorite hotels. Instant savings on tours, theme parks, attractions, and more. With member discounts, Plus pays for itself. Cancel within 90 days and get your money back. </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;