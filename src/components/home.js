import React from 'react';



class Home extends React.Component{



  render(){
    return(
      <div>
        <h1> w e l c o m e </h1>

        <h4> planted -- a way for you to keep track of the little friends you've brought into your home!</h4>

        <br/> <br/>
      </div>
    )
  }



}

const mapStateToProps = state => {
  return{plants: state.plants}
}
export default connect (mapStateToProps)(Home)
