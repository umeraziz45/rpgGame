import { getDiceRollArray } from "./utils.js";

function Character(data){
  // object.assign is a new thing. Replaces having to use this keyword to create properties for new objects. Only works when passing objects to Constructor Function.

  // target object and source object. In this case, this represents the empty obj created by new keyword.
  Object.assign(this, data);

  this.getDiceHtml = (diceCount) => {
    return getDiceRollArray(diceCount).map( (elem) => {
      return `<div class="dice">${elem}</div>`
    }).join('');
  }

  this.getHtml = function getHtml(){
    const {name, avatar, health, diceCount} = this;

    let diceHtml = this.getDiceHtml(diceCount)

    return  `
    <div class="character-card">
      <h4 class="character-name">${name}</h4>
      <img src="./assets/${avatar}.png" alt="image of wizard" class="character-avatar">
      <p class="character-health"> health: <b>${health}</b></p>
      <div class="character-dice-container"> 
      ${diceHtml}
      <div 
    </div>
    `
  }
}

export default Character;