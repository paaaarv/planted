
import React from 'react';
import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col'


export default class Login extends React.Component{

  constructor(props){
    super(props)
    this.state= {
      username:'',
      password: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e)=>{
    e.preventDefault();
  }
  render(){
    return(

      <Container className='form'>
      <form onSubmit={(event)=>this.handleSubmit(event)}>
      <Row>
      <Col>
        username:
      </Col>
      <Col>
      <input required name='username' type='text' onChange={this.handleChange}/>
      </Col>
      </Row>
      <Row>
      <Col>
        password:
      </Col>
      <Col>
      <input required name='password'type='password' onChange={this.handleChange}/>
      </Col>
      </Row>
      <br/><br/>
      <button type='submit'>login</button>
      </form>
      </Container>

    )
  }

}
