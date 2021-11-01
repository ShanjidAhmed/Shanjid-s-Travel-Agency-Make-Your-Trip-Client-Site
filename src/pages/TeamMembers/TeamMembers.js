import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import TeamMembersInfo from '../TeamMembersInfo/TeamMembersInfo';
import './TeamMembers.css'

const TeamMembers = () => {
    const [teamMember, setTeamMember] = useState([]);
    useEffect(() => {
        fetch('https://fast-ocean-61436.herokuapp.com/services')

            .then(res => res.json())
            .then(data => setTeamMember(data));
    }, [])
    return (
        <div>
            <h2 className='my-3 text-center '>Our Team Members</h2>
            <p className='text-center w-50 mx-auto'>Our specialists’ top priority is you.Your advocate clinician is with you every step of the way, coordinating your review by a team of specialists.Which means you get the answers and assurance you deserve with accuracy you can trust.</p>

            <div className='doctor container row mx-auto justify-content-center'>
                {

                    teamMember.map(teamMember => <TeamMembersInfo
                        key={teamMember.id}
                        teamMember={teamMember}

                    ></TeamMembersInfo>)


                }

            </div>
        </div>
    );
};

export default TeamMembers;