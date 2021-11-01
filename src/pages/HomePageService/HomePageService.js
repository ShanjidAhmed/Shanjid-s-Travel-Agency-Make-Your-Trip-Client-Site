import React, { useEffect, useState } from 'react';
import Service from '../../Service/Service';

const HomePageService = (props) => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://fast-ocean-61436.herokuapp.com/services')
            .then(res => res.json())
            // .then(data => setServices(data.slice(3)));
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <h3 className='text-center fw-bolder  t-color mb-3'>Our Services</h3>
            <p className='text-center t-color mb-5'>Defining and redefining the vision in its day to day process the mission was set to shift this clinic ,<br /> to a bigger and better space in view to cater some specific scarce treatment and services. </p>

            <div className='services container row'>
                {
                    services.map(service =>
                        <Service key={service._id} service={service}></Service>
                    )
                }
            </div>
        </div>
    );
};

export default HomePageService;