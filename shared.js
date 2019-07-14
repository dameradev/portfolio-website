let toggleButton = document.querySelector('.toggle-button');
let mobile = document.querySelector('.mobile-nav')
let backdrop = document.querySelector('.backdrop');
let toggleImage = document.getElementById("toggle-image");

toggleButton.addEventListener('click', ()=> {
  if(!mobile.classList.contains("open")) {
    mobile.classList.add("open");
    backdrop.classList.add('open');
    toggleImage.src = "images/x.png"
    
  } else {
    mobile.classList.remove("open");
    backdrop.classList.remove('open');
    toggleImage.src = "images/menu.png"  
  }
  
})

backdrop.addEventListener('click', () => {
  mobile.classList.remove('open');
  backdrop.classList.remove('open');
})