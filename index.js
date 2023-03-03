const hero = {
  className: 'hero',
  charName: 'Wizard',
  avatar: 'wizard',
  health: '60',
  diceCount: 3
}

const monster = {
  className: 'monster',
  charName: 'Orc',
  avatar: 'orc',
  health: '10',
  diceCount: 1
}

function getDiceRollArray(diceCount) {
  return new Array(diceCount).fill(0).map( () => Math.floor(Math.random() * 6) + 1);
}

const getDiceHtml = (diceCount) => {
  return getDiceRollArray(diceCount).map( (elem) => {
    return `<div class="dice">${elem}</div>`
  }).join('');
}

function Character(data){
  // object.assign is a new thing. Replaces having to use this keyword to create properties for new objects
  Object.assign(this, data);
  this.getHtml = function getHtml(){
    const {className, name, avatar, health, diceCount} = this;
    let diceHtml = getDiceHtml(diceCount)

    document.querySelector('.'+className).innerHTML =  `
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

const wizard = new Character(hero);
const orc = new Character(monster);
console.log(wizard);
wizard.getHtml();
orc.getHtml();


