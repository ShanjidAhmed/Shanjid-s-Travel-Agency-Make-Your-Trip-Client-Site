import React from 'react';
import { Accordion } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <div className='about container mx-auto my-5' >

            <div className='row justify-content-center'>
                <div className="about-image  col-sm-12 col-md-10 col-lg-6">
                    <img src="https://images.indianexpress.com/2016/09/woman759.jpg" alt="" />
                </div>
                <div className="about-accordian col-sm-12 col-md-10 col-lg-6">
                    <h3 className='text-center mt-md-5' >MAKE MY TRIP</h3>
                    <p className='my-4'>Make My Trip is a rapidly-growing global online travel agency, Make My Trip is here to help you plan the perfect trip. Whether you're going on holiday, taking a business trip, or looking to set up a corporate travel account, Make My Trip is here to help you travel the world with cheap flights, discount hotels, and train tickets. Looking to find great travel deals or enjoy the biggest savings on your next trip? Make My Trip has you covered. With our easy-to-use website and app, along with 24-hour customer service, booking your next trip couldn't be simpler. With Trip.com, quality travel services in over a dozen languages including English, Mandarin, Cantonese, Japanese, Korean, German, French, and Spanish are just a call—or click—away. </p>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header ><span className='fw-bold'>Easily Customize Your Trip with the Best Hotel and Flight Deals</span></Accordion.Header>
                            <Accordion.Body>
                                It's easy to customize your travel experience with our robust flight and hotel search filter options and Trip.com travel tools like flight fare alerts, deal-finder calendar, and early bird deals. Trip.com's secure payment system takes the stress out of travel by providing easy payment options, including credit and debit cards, and UnionPay.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header><span className='fw-bold'>Featured Hotel Destinations</span></Accordion.Header>
                            <Accordion.Body>
                                We have all types of hotels in all the coutries in the world. Including: Three-Star, Four-Star, Five-star hotels along with swimming pool, spa, sauna, muti-cousine restaurant.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header><span className='fw-bold'>Featured Flight Destinations</span></Accordion.Header>
                            <Accordion.Body>
                                Flights to Cebu | Flights to Jakarta | Flights to Hanoi | Flights to Chengdu | Flights to Phuket | Flights to Macau | Flights to Ho Chi Minh | Flights to Osaka | Flights to Shenzhen | Flights to Shanghai | Flights to Beijing | Flights to Hong Kong | Flights to Seoul | Flights to Bangkok | Flights to Taipei | Flights to Singapore | Flights to Tokyo | Flights to Manila | Flights to Guangzhou | Flights to Kuala Lumpur
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </div>

    );
};

export default About;