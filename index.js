const hero = {
  className: 'hero',
  charName: 'Wizard',
  avatar: 'wizard',
  health: '60',
  diceScore: [1,2,3],
  diceCount: 3
}

// const {}

const monster = {
  className: 'monster',
  charName: 'Orc',
  avatar: 'orc',
  health: '10',
  diceScore: [4],
  diceCount: 1
}

function getDiceRollArray(diceCount) {
  let newDiceRolls = [];
  for (let i = 0; i < diceCount; i++) {
      newDiceRolls.push(Math.floor(Math.random() * 6) + 1);
  }
  return newDiceRolls;
}

const getDiceHtml = (arr) => {
  let diceHtml = '';
  arr.map( (elem) => {
      diceHtml += `<div class="dice">${elem}</div>`
  })
  return diceHtml;
}

const charactorCreator = (data) => {

  const {className, charName, avatar, health, diceScore, diceCount} = data;

  let diceHtml = getDiceHtml(getDiceRollArray(diceCount));

    document.querySelector('.'+className).innerHTML =  `
    <div class="character-card">
      <h4 class="character-name">${charName}</h4>
      <img src="./assets/${avatar}.png" alt="image of wizard" class="character-avatar">
      <p class="character-health"> health: <b>${health}</b></p>
      <div class="character-dice-container"> 
      ${diceHtml}
      <div 
    </div>
   `
}

charactorCreator(hero);
charactorCreator(monster);


