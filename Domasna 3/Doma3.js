let cards = ["2202490999.avif", "2202490999.avif", "mclaren.jpg", "mclaren.jpg", "mercedes.jpg", "mercedes.jpg",
     "redbull.jpg", "redbull.jpg", "williams.jpg", "williams.jpg", "asto.jpg", "asto.jpg"];


for (let i = 0; i < cards.length; i++) {
  let rand = Math.floor(Math.random() * 12); 
  let temp = cards[i];
  cards[i] = cards[rand];
  cards[rand] = temp;
}

let first = null;
let second = null;

let flipped = 0;

let attemprts=0;
for (let i = 0; i < 12; i++) 
  {
  let img = document.getElementById("img" + (i + 1));

  img.onclick = function() {
    
    if (first == null) {
      first = this;
      this.src = cards[i];

    } 
    else if (second == null && this != first) 
    {
      second = this;
      this.src = cards[i];
      attemprts++;
      
      if (first.src === second.src) {
        first = null;
        second = null;
        flipped += 2;
        if(flipped==12)
          {
            alert("Ja reshivte vezbata vo "+attemprts+" obidi.")
          }
      } 
      else {
        setTimeout(function() {
          first.src = "f1log.png";
          second.src = "f1log.png";
          first = null;
          second = null;
        }, 1000);
      }}
  };
}