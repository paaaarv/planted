import React from 'react';
import { connect } from 'react-redux';


class Plants extends React.Component{



  render(){

    return(
      <div>
      <h1></h1>
      </div>

    )
  }
}

const mapStateToProps = state => {
  return {plants: state.plants}
}
export default connect(mapStateToProps)(Plants);
