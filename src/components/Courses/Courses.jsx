import React from 'react'
import { Container, Row } from 'react-bootstrap'

import { Course } from '../Course/Course';
import { useServices } from '../../hook/useServices';


export const Courses = () => {
  const [courses] = useServices()
    return (
        <div>
            <Container>
            <h1 className="my-4">Top Course</h1>
            <Row xs={1} md={3} className="g-4">
              {
                courses.map(course =>  <Course course={course} key={course.id}/>)
              }
            </Row>
            </Container>
           
        </div>
    )
}
