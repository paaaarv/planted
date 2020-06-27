import React from 'react' ;




export default function managePlants(state={ plants:[]}, action){


  switch(action.type){


    case "ADD_PLANT":
    ///const plant = {name: action.payload.name, sun: action.payload.sun, water: action.payload.water, flowering: action.payload.flowering, toxic: action.payload.toxic, fertilize: action.payload.fertilize, extra: action.payload.additional }///
      debugger
      return {plants: [...state.plants, action.payload]}

    default:
      return state;
  }
}
