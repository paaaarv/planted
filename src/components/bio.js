import React from 'react' ;






export default class Bio extends React.Component{
  constructor(props){
    super(props)

  }



   details = () =>{
     const label = ['light', 'water', 'fertilize', 'additional']
     const info = []

     for(let i=0;i<label.length;i++){
       info.push(<div className='details'><h4 className='heading'>{label[i]}</h4><p>{this.props.characteristics[i]}</p></div>)
     }
     return(info)
     }

  render(){

    return(
      <div className='bio'>
          <div>
          <h3> {this.props.name}</h3>
          </div>

          {this.details()}
      </div>




    )
  }

}
