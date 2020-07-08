import React from 'react';
import { connect } from 'react-redux'
import Bio from './bio.js'

class Home extends React.Component{



  render(){
    const plants = this.props.plants.map((plant) => <Bio name={plant.name} characteristics={[plant.sun, plant.water, plant.fertilize, plant.additional]}/>)
    return(
      <div>
        <h1> w e l c o m e </h1>

        <h4> planted -- a way for you to keep track of the little friends you've brought into your home!</h4>
          <div>
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
export default connect (mapStateToProps)(Home)
