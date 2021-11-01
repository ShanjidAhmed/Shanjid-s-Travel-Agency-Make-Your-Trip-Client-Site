import React, { useEffect, useState } from 'react';
import TeamMembers from '../TeamMembers/TeamMembers';
import TeamMembersInfo from '../TeamMembersInfo/TeamMembersInfo';


const HomeTeamMember = () => {

    const [homeTeam, setHomeTeam] = useState([]);
    useEffect(() => {
        fetch('https://fast-ocean-61436.herokuapp.com/services')

            .then(res => res.json())
            .then(data => setHomeTeam(data));
    }, [])
    return (
        <div className=' mx-auto '>
            <h2 className='text-center mt-5'>Our Team Members</h2>
            <p className='my-3 text-center'>we have several experienced proffessionls as your tour guide.They also help with the necessary informarion regarding your tour plans</p>
            <div className='mt-5  row mx-auto main' >
                {
                    homeTeam.map(homeTeam =>
                        <TeamMembersInfo key={homeTeam.id} teamMember={homeTeam}></TeamMembersInfo>
                    )
                }
            </div>
        </div>
    );
};

export default HomeTeamMember;