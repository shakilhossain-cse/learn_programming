import React from 'react'
import {  Container, Row } from 'react-bootstrap'
import { useServices } from '../../hook/useServices'
import { Course } from '../Course/Course'

export const Services = () => {
   const [courses] = useServices()
    return (
        <div className="bg-light">
            <Container className="py-5">
                <h1 className="py-4">All Services </h1>
                <Row xs={1} md={2} className="g-5">
                    {
                        courses.map(course => <Course course={course}/>)
                    }
                </Row>
            </Container>
        </div>
    )
}
