import React from 'react' ;

import { FaTrash } from 'react-icons/fa'

import { connect } from 'react-redux';


export default class Bio extends React.Component{
  constructor(props){
    super(props)

  }



   details = () =>{
     const label = ['light', 'water', 'fertilize', 'additional', 'pictures']
     const info = []
     debugger
     for(let i=0;i<label.length;i++){
       if(this.props.characteristics[i] !== ''){
       info.push(<div className='details'><h4 className='heading'>{label[i]}</h4><p>{this.props.characteristics[i]}</p></div>)
     }}
     return(info)
     }

  render(){

    return(
      <div className='bio'>
          <div>
          <h3> {this.props.name}</h3>
          </div>

          {this.details()}
          <br/><br/><br/>
          <button onClick={()=>this.props.delete(this.props.name)}><FaTrash /></button>
          <br/>
      </div>




    )
  }

}
