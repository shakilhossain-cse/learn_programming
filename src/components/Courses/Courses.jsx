import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { useState,useEffect } from 'react'
import { Course } from '../Course/Course';


export const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(()=>{
    fetch('./course.json')
    .then(res => res.json())
    .then(data => setCourses(data))
  },[])
  console.log(courses);
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
