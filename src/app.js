import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


let pronoun = ['the', 'your', 'her', 'his', 'my'];
let adj = ['fantastic', 'amazing', 'smaler', 'coolest'];
let noun = ['dog', 'cat', 'bird', 'mecha', 'beyblade', 'pokemon'];

window.onload = function () {
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        console.log(pronoun[i] + adj[j] + noun[k] + '.com');
      }
    }
  }
}