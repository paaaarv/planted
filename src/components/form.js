import React from 'react';
import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col'
import { connect } from 'react-redux';


class Form extends React.Component{


  constructor(props){
    super(props)
    this.state={
      name: '',
      sun: '',
      water: '',
      fertilize: '',
      flowering: false,
      toxic: false,
      additional: ''
    }
  }

  onChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onCheck = (e) =>{
    this.setState({
      [e.target.name]: e.target.checked
    })
  }

  onSubmit = (e) =>{
    e.preventDefault();
    this.props.addPlant(this.state)


  }


render() {
  return(
    <div>
    <h1> NEW  PLANT  </h1>
    <Container className='form'>
      <form onSubmit = {(event) => this.onSubmit(event)}>
      <h2> add a new plant </h2>
      <Row>
      <label> name: </label>
      <input required name="name" type='text' value={this.state.name} onChange={this.onChange}/>
      </Row>
      <br/>
      <Row>
      <label> light: </label>
      <textarea required name='sun' value={this.state.sun} onChange={this.onChange}/>
      </Row>
            <br/>
      <Row>
      <label> water: </label>
      <textarea required name='water'  value={this.state.water} onChange={this.onChange}/>
      </Row>
            <br/>
      <Row>
      <label> fertilize: </label>
      <input name='fertilize' type='text' value={this.state.fertilize} onChange={this.onChange}/>
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
      <label> extra info: </label>
      <textarea name='additional'  value={this.state.additional} onChange={this.onChange}/>
      </Row>
            <br/>
      <Row>
      <input value="add plant!" type ='submit'></input>
      </Row>

      </form>
      </Container>
      </div>
  )
}
}
const mapDispatchToProps = dispatch =>{
  return{
    addPlant: (e) => dispatch({type: "ADD_PLANT",payload: e})
  }
}

const mapStateToProps = state => {
  return{
    plants:state.plants
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(Form);
