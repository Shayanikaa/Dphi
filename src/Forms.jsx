import React from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import './Forms.css';

function Forms() {
  return (
    <>
    <nav>
     <h3> <b>Challenge Details</b></h3>
    </nav>
    <div className='form'>
    <Container>
      <Form >
        <Form.Group controlId="form.Name" style={{width:'450px'}}>
            <Form.Label>Challenge Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>
        <Form.Group style={{width:'450px'}}>
        <Form.Label className='mt-5'>Start Date</Form.Label>
        <Form.Control id="exampleDatetime"
      name="datetime"
      placeholder="Add start date"
      type="datetime"/>
        </Form.Group >
        <Form.Group controlId="form.date" style={{width:'450px'}}>
            <Form.Label className='mt-5'>Ends Date</Form.Label>
            <Form.Control type="email" placeholder="Add end date" />
        </Form.Group>
        <Form.Group style={{width:'650px'}}>
            <Form.Label className='mt-5'>Description</Form.Label>
            <Form.Control as="textarea" rows={6} />
        </Form.Group>
        <Form.Group className='mt-5' style={{width:'170px'}}>
            <Form.Label>Image</Form.Label>
            <Form.Control type="text"  placeholder="upload" />
        </Form.Group>
        <Form.Group className='mt-5' style={{width:'170px'}}>
            <Form.Label>Level Type</Form.Label>
            <Form.Control type="text"  placeholder="Easy" />
        </Form.Group>
           <button className='mt-5 '>Create Challenge</button>
      </Form>
    </Container>
    </div>
    </>
  )
}

export default Forms
