import characterData from "./data.js";
import Character from "./Character.js";

const wizard = new Character(characterData.hero);
const orc = new Character(characterData.monster);

const render = () => {
  document.querySelector('.hero').innerHTML = wizard.getHtml();
  document.querySelector('.monster').innerHTML = orc.getHtml();
}

render();