import React from 'react';
import Container from 'react-bootstrap/container';
import Col from 'react-bootstrap/col';
import Row from 'react-bootstrap/row';



export default class List extends React.Component{




  render(){
    return(
      <div>
      <Container fluid={true}>
      <Row>
      <Col xs={4} >name </Col>
      <Col> || </Col>
      <Col>sun </Col>
      <Col> || </Col>
      <Col>water </Col>
      <Col> || </Col> 
      <Col>fertilize</Col>
      </Row>
      </Container>
      </div>
    )
  }
}
