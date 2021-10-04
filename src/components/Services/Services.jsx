import {React,useState,useEffect} from 'react'
import {  Container, Row } from 'react-bootstrap'
import { Course } from '../Course/Course'

export const Services = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('./services.json')
        .then(res => res.json())
        .then(data => setServices(data))
      },[])
    return (
        <div className="bg-light">
            <Container className="py-5">
                <h1 className="py-4">All Services </h1>
                <Row xs={1} md={2} className="g-5">
                    {
                        services.map(service => <Course course={service}/>)
                    }
                </Row>
            </Container>
        </div>
    )
}
