import React from 'react';
import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col'
import Plant from './plant.js'


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

  onCheck = (e) =>{
    this.setState({
      [e.target.name]: e.target.checked
    })
  }

  onSubmit = (e) =>{
    debugger


  }

render() {
  return(
    <Container className='form'>
      <form onSubmit = {this.onSubmit}>
      <Row>
      <label> plant name: </label>
      <input name="name" type='text' value={this.state.name} onChange={this.onChange}/>
      </Row>
      <br/>
      <Row>
      <label> light: </label>
      <textarea name='sun' value={this.state.sun} onChange={this.onChange}/>
      </Row>
            <br/>
      <Row>
      <label> water: </label>
      <textarea name='water'  value={this.state.water} onChange={this.onChange}/>
      </Row>
            <br/>
      <Row>
      <label> soil: </label>
      <input name='soil' type='text' value={this.state.soil} onChange={this.onChange}/>
      </Row>
            <br/>
      <Row>
      <label> fertilize: </label>
      <input name='fertilize' type='text' value={this.state.fertilize}/>
      </Row>
            <br/>
      <Row>
      <label> flowering?  </label>
      <input type="checkbox" name="flowering" onChange={this.onCheck}/>
      </Row>
      <Row>
      <label> toxic?  </label>
      <input type='checkbox' name='toxic' onChange={this.onCheck}/>
      </Row>
      <Row>
      <input value="add plant!" type ='submit'></input>
      </Row>
      </form>
      </Container>
  )
}
}
