import React from 'react';
import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col'
import { connect } from 'react-redux';
import Button from 'react-bootstrap/button';
import ImageUploader from "react-images-upload";

class Form extends React.Component{


  constructor(props){
    super(props)
    this.initialState={
      name: '',
      sun: '',
      water: '',
      fertilize: '',
      flowering: false,
      toxic: false,
      additional: '',
      pictures: []
    }
    this.state=this.initialState;
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
    this.setState(this.initialState)
    this.props.addPlant(this.state)


  }


  onImageDrop = (pic) =>{
    this.setState({
      pictures: this.state.pictures.concat(pic)
    })
    debugger
  }

render() {
  return(
    <div>


    <Container className='form'>
      <form onSubmit = {(event) => this.onSubmit(event)}>
      <h3> add a new plant </h3>
      <Row className='p-2'>
      <Col> name: </Col>
      <Col>
      <input required name="name" type='text' value={this.state.name} onChange={this.onChange}/>
      </Col>
      </Row>
      <Row className='p-2'>
      <Col>light: </Col>
      <Col>
      <input required name='sun' value={this.state.sun} onChange={this.onChange}/>
      </Col>
      </Row>

      <Row className='p-2'>
      <Col>water: </Col>
      <Col>
      <input required name='water'  value={this.state.water} onChange={this.onChange}/>
      </Col>
      </Row>

      <Row className='p-2'>
      <Col> fertilize: </Col>
      <Col>
      <input name='fertilize' value={this.state.fertilize} onChange={this.onChange}/>
      </Col>
      </Row>

      <Row className='p-4'>
      <Col> flowering?  </Col>
      <Col>
      <input type="checkbox" name="flowering" onChange={this.onCheck}/>
      </Col>

      <Col> toxic?  </Col>
      <Col>
      <input type='checkbox' name='toxic' onChange={this.onCheck}/>
      </Col>
      </Row>

      <Row className='p-2'>
      <Col> extra info: </Col>
      <Col>
      <textarea name='additional'  value={this.state.additional} onChange={this.onChange}/>
      </Col>
      </Row>
        <br/>
        <Row className ='p-1'>
        <Col>
        <ImageUploader
          withIcon={true}
          buttonText="upload image"
          onChange={this.onImageDrop}
          imgExtension={[".jpg", ".gif", ".png", ".gif"]}
          maxFileSize={5242880}
        />
        </Col>
        </Row>
        <br/><br/>
      <Row className='p-1'>
      <Col>
      <Button size='lg' variant='outline-success' type ='submit'> add plant </Button>
      </Col>
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
