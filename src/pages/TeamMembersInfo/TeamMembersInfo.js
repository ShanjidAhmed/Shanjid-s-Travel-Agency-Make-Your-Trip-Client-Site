import React from 'react';
import { Button, Card } from 'react-bootstrap';


const TeamMembersInfo = ({ teamMember }) => {
    const { doctorPhoto, id, phone, Days, Nights, doctorDescription, memberName, expert } = teamMember
    return (
        <Card className='doctor-card m-2 m-md-1 col-lg-4 col-md-5 col-sm-7 t-image' key={teamMember.id}>
            <Card.Img variant="top" height={"300px"} src={teamMember.TeamMember} />
            <Card.Body>
                <Card.Title className='fw-bolder fs-4 text-center'>{teamMember.memberName}</Card.Title>
                <Card.Text className='info text-center'>
                    {teamMember.MemberDescription}
                </Card.Text>
                <Card.Text className='info text-center'>
                    <h6>Work as a tour guide in :  <span className='fw-bold'>{teamMember.expert}</span> </h6>
                    <h6>Schedule : <span className='fw-bold'>{teamMember.Days}</span> days in every <span className='fw-bold'>{teamMember.Nights}</span> weeks </h6>
                </Card.Text>

            </Card.Body>
        </Card>
    );
};

export default TeamMembersInfo;