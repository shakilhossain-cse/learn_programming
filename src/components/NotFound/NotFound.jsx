import Button from '@restart/ui/esm/Button'
import React from 'react'
import { Container } from 'react-bootstrap'
import { useHistory } from 'react-router'

export const NotFound = () => {
   const history =  useHistory()
   
  function handelClick (){
        history.push('/');
   }
    return (
        <div className="bg-light py-5">
            <Container className="d-flex justify-content-center align-items-center" style={{height:'25rem'}}>
                <div>
                    <h1 className="text-warning display-1">404</h1>
                    <h3 className="fs-1">Your Page is Not Found</h3>
                    <Button className="btn btn-warning" onClick={handelClick}>Go Home</Button>
                </div>
            </Container>
        </div>
    )
}
