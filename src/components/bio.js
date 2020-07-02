import React from 'react' ;






export default class Bio extends React.Component{


  render(){
    return(
      <div>
          <h1> {this.props.name}</h1>
          <div>
          <h3>{this.props.sun} </h3>
          </div>
          <div>
          <h3>{this.props.water} </h3>
          </div>
          <div>
          <h3>{this.props.fertilize} </h3>
          </div>
      </div>




    )
  }

}
