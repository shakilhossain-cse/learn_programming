import { useState,useEffect } from 'react'

export const useServices = () => {
    const [courses, setCourses] = useState([]);
    useEffect(()=>{
      fetch('./course.json')
      .then(res => res.json())
      .then(data => setCourses(data))
    },[])
    return [courses];
}
