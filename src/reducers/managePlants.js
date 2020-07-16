import React from 'react' ;




export default function managePlants(state={ plants:[]}, action){


  switch(action.type){


    case "ADD_PLANT":
      return {plants: [...state.plants, action.payload]}


    case "DELETE_PLANT":
        return{plants: [state.plants.filter(plant => plant.name !== action.payload)]}

    default:
      return state;
  }
}
