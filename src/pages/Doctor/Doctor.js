import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import DoctorsInfo from '../DoctorsInfo/DoctorsInfo';

import './Doctor.css'

const Doctor = () => {
    const [doctor, setDoctor] = useState([]);
    useEffect(() => {
        fetch('fakeData.json')

            .then(res => res.json())
            .then(data => setDoctor(data));
    }, [])
    return (
        <div>
            <h2 className='my-3 text-center '>Our Doctors</h2>
            <p className='text-center w-50 mx-auto'>Our specialists’ top priority is you.Your advocate clinician is with you every step of the way, coordinating your review by a team of specialists.Which means you get the answers and assurance you deserve with accuracy you can trust.</p>

            <div className='doctor container row mx-auto justify-content-center'>
                {

                    doctor.map(doctor => <DoctorsInfo
                        key={doctor.id}
                        doctor={doctor}

                    ></DoctorsInfo>)


                }

            </div>
        </div>
    );
};

export default Doctor;