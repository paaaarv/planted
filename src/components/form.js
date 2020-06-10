import React from 'react';




export default class Form extends React.Component{


  constructor(props){
    super(props)
    this.state={
      name: '',
      sun: '',
      water: '',
      soil: '',
      fertilize: '',
      repot: '',
      propagate: '',
      flowering: false,
      poisonous: false,
      additional: ''
    }
  }


render() {
  return(
      <div>
      </div>
  )
}
}
