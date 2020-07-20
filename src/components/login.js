
import React from 'react';
import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col'


export default class Login extends React.Component{

  constructor(props){
    super(props)
    this.initialState= {
      username:'',
      password: '',
      confirm: ''
    }
    this.state=this.initialState;
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSignup = () =>{
    debugger
  }

  handleSubmit = (e)=>{
    e.preventDefault();
    this.setState(this.initialState)
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
      <input required name='username' placeholder='username' type='text' onChange={this.handleChange}/>
      </Col>
      </Row>
      <Row>
      <Col>
        password:
      </Col>
      <Col>
      <input required name='password' placeholder='password' type='password' onChange={this.handleChange}/>
      </Col>
      </Row>
      <Row>
        <div id='confirm' hidden>
        <Col>
          confirm:
        </Col>
        <Col>
          <input type='password' placeholder='password confirm' name='confirm' onChange={this.handleChange}/>
        </Col>


         </div>
      </Row>
      <br/>
      <Row>
      <button onClick = {this.handleSignup} type='submit'>  sign up </button>
      <br/>
      <button type='submit'>login</button>

      </Row>
      </form>
      </Container>

    )
  }

}
