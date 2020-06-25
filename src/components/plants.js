import React from 'react';
import { connect } from 'react-redux';


class Plants extends React.Component{



  render(){
    const plants = this.props.plants.map((plant)=><li> {plant} </li> )
    return(
      <div>
      <h1>{plants}</h1>
      </div>

    )
  }
}

const mapStateToProps = state => {
  return {plants: state.plants}
}
export default connect(mapStateToProps)(Plants);
