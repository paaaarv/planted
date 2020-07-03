import React from 'react' ;






export default class Bio extends React.Component{
    constructor(props){
      super(props)
    }

    details = () => {
      this.props.map(prop => 
        <div className='details'>
        <h3>  hi </h3>
        </div>

    )
    }
  render(){

    return(
      <div className='bio'>
          <div>
          <h3> {this.props.name}</h3>
          </div>

          <div className='details'>
          <h4> light </h4>
          <p>{this.props.sun} </p>
          </div>

          <div className='details'>
          <h4> water </h4>
          <p>{this.props.water} </p>
          </div>

          {this.details}
      </div>




    )
  }

}
