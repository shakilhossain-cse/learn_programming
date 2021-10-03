import React from 'react'
import { Banner } from '../Banner/Banner'
import { Courses } from '../Courses/Courses'
import { Teachers } from '../Teachers/Teachers'

export const Main = () => {
    return (
        <div className="bg-light">
            <Banner/>
            <Courses/>
            <Teachers/>
        </div>
    )
}
