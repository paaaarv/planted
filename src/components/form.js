import React from 'react';
import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col'



export default class Form extends React.Component{


  constructor(props){
    super(props)
    this.state={
      name: '',
      sun: '',
      water: '',
      soil: '',
      fertilize: '',
      repot: '',
      propagate: '',
      flowering: false,
      poisonous: false,
      additional: ''
    }
  }

  onChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(this.state)
  }

render() {
  return(
    <Container className='form'>
      <form>
      <Row>
      <label> plant name: </label>
      <input name="name" type='text' value={this.state.name} onChange={this.onChange}/>
      </Row>
      <Row>
      <label> light: </label>
      <input type='text' value={this.state.sun}/>
      </Row>
      <Row>
      <label> water: </label>
      <input type='text' value={this.state.water}/>
      </Row>
      <Row>
      <label> soil: </label>
      <input type='text' value={this.state.soil}/>
      </Row>
      <Row>
      <label> fertilize: </label>
      <input type='text' value={this.state.fertilize}/>
      </Row>
      </form>
      </Container>
  )
}
}
