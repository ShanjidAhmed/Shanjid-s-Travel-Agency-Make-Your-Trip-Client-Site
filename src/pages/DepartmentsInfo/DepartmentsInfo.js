import React from 'react';
import './DepartmentsInfo.css'

const DepartmentsInfo = ({ department }) => {
    const { Name, Description, Image, Price } = department;
    return (
        <div className='row container top mx-auto mb-5'>
            <div className="department-image col-lg-5 col-sm-11 col-md-8 ">
                <img src={Image} alt="" />
            </div>
            <div className='department-info col-lg-5 col-sm-11 col-md-8 p-4 ms-3'>
                <h2 className='text-primary fw-bold'>{Name}</h2>
                <p className='my-5 text-secondary '>{Description}</p>
                <div className='information'>
                    <h6>Price: $ {Price}</h6>
                </div>



            </div>
        </div>
    );
};

export default DepartmentsInfo;