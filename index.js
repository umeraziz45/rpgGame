const charactorCreator = (className, charName, avatar, health, diceScore) => {
  let charInfo = 
    document.querySelector(className).innerHTML =  `
    <div class="character-card">
      <h4 class="character-name">${charName}</h4>
      <img src="./assets/${avatar}.png" alt="image of wizard" class="character-avatar">
      <p class="character-health"> health: <b>${health}</b></p>
      <div class="character-dice-container"><div class="character-dice">${diceScore}</div></div>
    </div>
   `
  return charInfo;
}

charactorCreator('.hero', 'Wizard', 'wizard', '60', 6);
charactorCreator('.monster', 'Orc', 'orc', '10', 4);


// document.querySelector('.hero').innerHTML =  `
//         <div class="character-card">
//         <h4 class="character-name">Wizard</h4>
//         <img src="./assets/wizard.png" alt="image of wizard" class="character-avatar">
//         <p class="character-health"> health: <b>60</b></p>
//         <div class="character-dice-container"><div class="character-dice">6</div></div>
//         </div>
//         `
        
// document.querySelector('.monster').innerHTML =  `
//         <div class="character-card">
//         <h4 class="character-name">Orc</h4>
//         <img src="./assets/orc.png" alt="image of orc" class="character-avatar">
//         <p class="character-health"> health: <b>10</b></p>
//         <div class="character-dice-container">
//           <character-dice>4</character-dice>
//         </div>
//       </div>
//   `