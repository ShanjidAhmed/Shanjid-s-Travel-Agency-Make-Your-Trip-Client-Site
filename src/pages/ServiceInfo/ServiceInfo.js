import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import './ServiceInfo.css'
import useAuth from './../../hooks/useAuth';
import { useForm } from "react-hook-form";
import axios from 'axios';



const ServiceInfo = () => {
    const { serviceId } = useParams();
    const [details, setDetails] = useState([]);
    const [userInfo, setUserInfo] = useState({})
    const [singleDetail, setSingleDetail] = useState({});

    const { user } = useAuth();

    // --------------------------------------
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        data.service = userInfo.service;
        console.log(data);

        axios.post('https://fast-ocean-61436.herokuapp.com/usersorders', data)
            .then(res => {
                if (res.data.insertedId) {
                    // alert('added successfully');
                    reset();
                }
            })
    }

    // console.log("mahid")
    // console.log(user.displayName)
    // console.log("ami")
    // const name =user.displayname;
    // const email = user.email;
    // const service = service;



    useEffect(() => {
        fetch('https://fast-ocean-61436.herokuapp.com/services')
            .then((res) => res.json())
            .then(data => {
                const foundDetails = data.find
                    (service => service._id == serviceId);
                let userInformation = {
                    name: user.displayName,
                    email: user.email,
                    service: foundDetails
                };
                setUserInfo(userInformation);
            })

    }, [serviceId, user.displayName, user.email])
    // useEffect(() => {
    //     const foundDetails = details.find
    //         (service => service._id == serviceId);
    //     setSingleDetail(foundDetails)
    // }, [])





    // useEffect(() => {
    //     let userInformation = {
    //         name: user.displayName,
    //         email: user.email,
    //         service: singleDetail
    //     };
    //     setUserInfo(userInformation);

    // }, [])
    // details, serviceId
    // user.displayName, user.email, details, serviceId, singleDetail

    console.log(userInfo)


    return (
        <div className="info container row mt-5 mx-auto" >
            <Card className="bg-dark text-white single-service container mt-1 mb-5 col-md-6 col-sm-12">
                <Card.Img src={userInfo.service?.Image} className='img-fluid' alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title className='text-center mt-4 fs-2 fw-bold text-warning'> {userInfo.service?.SpotName}</Card.Title>
                    <Card.Text className='w-75 mx-auto mt-3'>
                        {userInfo.service?.PlaceDescription}
                    </Card.Text>
                    <Card.Text className='text-center'>Tour Duration: {userInfo.service?.Days} days and {userInfo.service?.Nights} nights </Card.Text>
                    <p className='text-center'>Price: $ {userInfo.service?.Price} </p>
                    <p className='text-center '>Famous For : {userInfo.service?.FamousFor}</p>

                </Card.ImgOverlay>
            </Card>
            <div className="add-service col-md-6 col-sm-12 mt-4">
                <h4 className='text-center text-primary mb-3'>Enter your information for placing order</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register(`name`, { required: true, maxLength: 20 })} value={user.displayName} placeholder="Name" />
                    <input {...register("email")} value={user.email} placeholder="Email" />
                    <input {...register("address")} placeholder="Address" />
                    <input type="number" {...register("days")} placeholder="How many days you want to stay?" />
                    {/* <input {...register("Image")} placeholder="image url" /> */}
                    <input type="submit" value='Order Confirm' />
                </form>
            </div>
        </div>
    );
};

export default ServiceInfo;