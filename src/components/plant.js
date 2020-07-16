import React from 'react';
import { connect } from 'react-redux';
import Col from 'react-bootstrap/col'
import Row from 'react-bootstrap/row'
export default class Plant extends React.Component{



  render(){

    return(
      <Row className="list-details">
      <Col> {this.props.name} </Col>
      <Col> {this.props.sun} </Col>
      <Col> {this.props.water}</Col>
      <Col> {this.props.fertilize} </Col>
      </Row>

    )
  }
}
