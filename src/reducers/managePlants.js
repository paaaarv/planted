import React from 'react' ;




export default function managePlants(state={ plants:[]}, action){


  switch(action.type){
    case "ADD_PLANT":
    debugger
    const plant = {name: action.payload.name, sun: action.payload.sun, water: action.payload.water, flowering: action.payload.flowering, toxic: action.payload.toxic, fertilize: action.payload.fertilize, extra: action.payload.additional }
      return{ plants: [...state.plants, plant]}

    default:
      return state;
  }
}
