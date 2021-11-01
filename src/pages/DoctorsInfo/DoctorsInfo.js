import React from 'react';
import { Button, Card } from 'react-bootstrap';

const DoctorsInfo = ({ doctor }) => {
    const { doctorPhoto, id, phone, doctorDescription } = doctor;
    return (

        <Card className='doctor-card m-2 m-md-1 col-lg-4 col-md-5 col-sm-7' key={doctor.id}>
            <Card.Img variant="top" height={"300px"} src={doctor.doctorPhoto} />
            <Card.Body>
                <Card.Title className='fw-bolder fs-4 text-center'>{doctor.doctor}</Card.Title>
                <Card.Text className='info'>
                    {doctor.doctorDescription}
                </Card.Text>
                <p className='fw-bold mt-2'>Voice:<span className='info'> {doctor.phone}</span> </p>
                <Button variant="success" className='text-white appointment-btn'>MAKE AN APPOINTMENT</Button>
            </Card.Body>
        </Card>

    );
};

export default DoctorsInfo;