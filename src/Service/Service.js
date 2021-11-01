import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
// import { useEffect } from 'react';
// import useAuth from './../hooks/useAuth';

const Service = (props) => {
    const { _id, SpotName, Country, ShortDescription, FamousFor, Price, Days, Night, PlaceDescription, index, Image, MoreImage, TeamMember, MemberDescription } = props.service;
    // const { user } = useAuth();
    const service = props.service;



    const handleAddToCart = () => {
        // console.log(service);

    }

    return (

        <div className='service  col-lg-4 col-md-6 col-sm-12 '>

            <div className="service-logo">
                <img src={Image} alt="" />
            </div>
            <div className="service-description">
                <h5 className='mb-3 fw-bold text-right'>{SpotName}</h5>
                <p>{Country}</p>
                <p>{ShortDescription}</p>
                <Link to={`/serviceInfo/${_id}`}><button className='btn btn-outline-info' onClick={handleAddToCart} >Place Order</button></Link>
            </div>
        </div>

    );
};

export default Service;