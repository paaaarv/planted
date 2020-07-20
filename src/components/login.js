
import React from 'react';
import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col'
import  Button  from 'react-bootstrap/button'


export default class Login extends React.Component{

  constructor(props){
    super(props)
    this.initialState= {
      username:'',
      password: '',
      confirm: '',
      hidden: 'hidden',
      disabled: 'false'
    }
    this.handleSignup=this.handleSignup.bind(this)
    this.state=this.initialState;
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSignup(){
    this.setState({
      hidden: 'visible',
      disabled: !this.state.disabled
    })
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
        <Button disabled={this.state.disabled} size='lg' variant='outline-success' type='button' onClick={() => this.handleSignup()}>login</Button>  <Button disabled={!this.state.disabled} size='lg'variant = 'outline-success' type='button' onClick={() => this.handleSignup()} >signup</Button>
      </Col>
      </Row>
      <br/>
      <Row>
      <div>
      <Col>
        username:
      </Col>
      <Col>
      <input required name='username' placeholder='username' type='text' onChange={this.handleChange}/>
      </Col>
      </div>
      </Row>

      <Row>
      <div>
      <Col>
        password:
      </Col>
      <Col>
      <input required name='password' placeholder='password' type='password' onChange={this.handleChange}/>
      </Col>
      </div>
      </Row>

      <Row>
        <div id='confirm' style={{visibility: this.state.hidden}}>
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
      <br/>
      <Col>
      <Button size='lg' variant='outline-success' type='submit'>submit</Button>
      </Col>
      </Row>

      </form>
      </Container>

    )
  }

}
