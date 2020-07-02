import React from 'react' ;






export default class Bio extends React.Component{


  render(){
    return(
      <div className='bio'>
          <h4> {this.props.name}</h4>
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
