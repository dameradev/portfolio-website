var i = 0;
var txt = "I'm a fullstack web developer specialized in JavaScript, using React as a frontend tool, Node.js(express.js) and MongoDB for the backend."

var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  for(i=0, i<=txt.length; i++;) {
    if (i < txt.length) {
      document.querySelector("hero-text__paragraph").innerHTML += txt.charAt(i);
      console.log('here')
      setTimeout(typeWriter, speed);
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
  typeWriter();
}, false);
