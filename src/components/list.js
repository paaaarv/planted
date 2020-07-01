import React from 'react';
import Container from 'react-bootstrap/container';
import Col from 'react-bootstrap/col';
import Row from 'react-bootstrap/row';
import { connect } from 'react-redux';
import Plant from './plant.js'

class List extends React.Component{




  render(){
    debugger
    const plant = this.props.plants.map(plant=><Plant name={plant.name} sun={plant.sun} water={plant.water} fertilize={plant.fertilize}/>)
    return(
      <div>

      <h1> PLANT CARE </h1> <br/> <br/> 
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
      {plant}
      </Container>
      </div>
    )
  }
}
const mapStateToProps = state =>{
  return{plants:state.plants}
}

export default connect(mapStateToProps)(List)
