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
      <br/>
      <Row>
      <label> light: </label>
      <input name='light' type='text' value={this.state.sun} onChange={this.onChange}/>
      </Row>
            <br/>
      <Row>
      <label> water: </label>
      <input name='water' type='text' value={this.state.water} onChange={this.onChange}/>
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
      <input value="add plant!" type ='submit'></input>
      </Row>
      </form>
      </Container>
  )
}
}
