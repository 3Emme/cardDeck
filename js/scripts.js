$(document).ready(function() {
  const suits = ['hearts', 'diamonds', 'clovers', 'shovels'];
  const cards = ['ace', 'king', 'queen', 'jack', '10', '9', '8', '7', '6', '5', '4', '3', '2'];

  let deck = [];

  suits.forEach(function(suit) {
    cards.forEach(function(card) {      
      $("#deck").append("<li>",card + " of " + suit,"</li>")
    });
  });


  
});