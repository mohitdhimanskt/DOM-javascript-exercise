var catGif = document.getElementById('catimg');
catGif.style.left = '0px';

let gifLeft = -catGif.width;
let control = -catGif.width;

function catWalk() {
  gifLeft += 10;
  console.log(gifLeft);
  catGif.style.left = `${gifLeft}px`
  control += 10;
  if (gifLeft > window.innerWidth) {
    gifLeft = -catGif.width;  
    control = -catGif.width;
  }
  else if (control > ((window.innerWidth / 2) - (catGif.width / 2))) {
    clearInterval(cat);
    catGif.setAttribute('src', 'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif');
    setTimeout(() => {
      catGif.setAttribute('src', "http://www.anniemation.com/clip_art/images/cat-walk.gif");
      cat = setInterval(catWalk, 50);
    }
      , 3000);
    control = -1000;
  }
}
let cat = setInterval(catWalk, 50);