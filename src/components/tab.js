import React from 'react'
import { NavLink } from 'react-router-dom'
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col'





export default class Tab extends React.Component{

  render(){

    return(
      <Row className="tab">
      <Col>
      <NavLink  to="/">
        home
      </NavLink>
      </Col>
     <Col>
      <NavLink  to="/plants">
        plant care
      </NavLink>
    </Col>
     <Col>
      <NavLink  to="/add">
        add a plant
      </NavLink>
     </Col>
    </Row>

    )
  }

}
