import React from 'react';
import { connect } from 'react-redux'
import Bio from './bio.js'

class Home extends React.Component{



  render(){
    const plants = this.props.plants.map((plant) => <Bio name={plant.name} characteristics={[plant.sun, plant.water, plant.fertilize, plant.additional]} delete= {this.props.delete}/>)
    return(
      <div>
        <h1> w e l c o m e </h1>

        <h4> planted -- a way for you to keep track of the little friends you've brought into your home!</h4>
          <div className="bio-container">
          {plants}
          </div>
        <br/> <br/>
      </div>
    )
  }



}

const mapStateToProps = state => {
  return{plants: state.plants}
}

const mapDispatchToProps = dispatch =>{
  return{
    delete: (e)=> dispatch({type: "DELETE_PLANT", payload: e})
  }
}
export default connect (mapStateToProps, mapDispatchToProps)(Home)
