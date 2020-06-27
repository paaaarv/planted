import React from 'react';
import Container from 'react-bootstrap/container';
import Col from 'react-bootstrap/col';
import Row from 'react-bootstrap/row';
import { connect } from 'react-redux';

class List extends React.Component{




  render(){
    return(
      <div>
      <Container className="container" fluid= {true}>
      <Row className='heading'>
      <Col> NAME </Col>
      <Col> || </Col>
      <Col> LIGHT </Col>
      <Col> || </Col>
      <Col> WATER </Col>
      <Col> || </Col>
      <Col> FERTILIZER </Col>
      </Row>
      </Container>
      </div>
    )
  }
}
const mapStateToProps = state =>{
  return{plants:state.plants}
}

export default connect(mapStateToProps)(List)
