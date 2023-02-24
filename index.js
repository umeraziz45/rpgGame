const hero = {
  className: '.hero',
  charName: 'Wizard',
  avatar: 'wizard',
  health: '60',
  diceScore: 6
}

const monster = {
  className: '.monster',
  charName: 'Orc',
  avatar: 'orc',
  health: '10',
  diceScore: 4
}

const charactorCreator = (data) => {

  let charInfo = 
    document.querySelector(data.className).innerHTML =  `
    <div class="character-card">
      <h4 class="character-name">${data.charName}</h4>
      <img src="./assets/${data.avatar}.png" alt="image of wizard" class="character-avatar">
      <p class="character-health"> health: <b>${data.health}</b></p>
      <div class="character-dice-container"><div class="character-dice">${data.diceScore}</div></div>
    </div>
   `
  return charInfo;
}

charactorCreator(hero);
charactorCreator(monster);


