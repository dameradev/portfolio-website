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

// Scroll to a certain element
// // get offset top for fixed header
// let headerHeigh = document.querySelector('.main-header').clientHeight;
// let portfolio = document.getElementById('portfolio').offsetTop - headerHeigh;
// console.log(portfolio);
let viewPortfolio = document.querySelector('.view-portfolio--cta');


let portfolio = document.getElementById('portfolio');
// var yourHeight = document.querySelector('.main-header').clientHeight

// // scroll to your element
// portfolio.scrollIntoView(true);

// // now account for fixed header
// var scrolledY = window.scrollY;

// console.log(scrolledY);
// if(scrolledY){
//   window.scroll(0, scrolledY - yourHeight);
// }


viewPortfolio.addEventListener('click', ()=> {
  portfolio.scrollIntoView(true);
})
