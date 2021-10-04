import React from 'react'
import {useState, useEffect} from 'react'
import { Container, Row } from 'react-bootstrap'
import { Teacher } from '../Teacher/Teacher';

export const Teachers = () => {
    const [teachers, setTeachers] = useState([]);
    useEffect(()=>{
        fetch('./teachers.json')
        .then(res => res.json())
        .then(data => setTeachers(data))
    },[])
    return (
        <div className="my-5">
            <Container>
            <h1 className="my-4">Top Teachers</h1>
            <Row xs={1} sm={2} md={4} className="g-4">
            {
                teachers.map(teacher => <Teacher teacher={teacher} key={teacher.id}/>)
            }
            </Row>
            </Container>
           
        </div>
    )
}
