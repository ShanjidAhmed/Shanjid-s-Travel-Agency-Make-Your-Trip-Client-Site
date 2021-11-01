import React, { useEffect, useState } from 'react';
import DepartmentsInfo from '../DepartmentsInfo/DepartmentsInfo';


const Departments = () => {
    const [departments, setDepartments] = useState([]);
    useEffect(() => {
        fetch('https://fast-ocean-61436.herokuapp.com/membership')
            .then(res => res.json())
            .then(data => setDepartments(data))
    }, []);
    console.log(departments)

    return (
        <div>
            <h2 className='text-center my-3'>Our Membership Info</h2>
            <p className='text-center'>We have several enriched types of membership and also gift cards to ensure you a proper treatment.</p>
            {
                departments.map(department => <DepartmentsInfo
                    key={department.id}
                    department={department}

                >

                </DepartmentsInfo>)
            }
        </div>
    );
};

export default Departments;