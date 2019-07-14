let toggleButton = document.querySelector('.toggle-button');
let mobile = document.querySelector('.mobile-nav')
let backdrop = document.querySelector('.backdrop');

toggleButton.addEventListener('click', ()=> {
  mobile.classList.add("open");
  backdrop.classList.add('open');
})

backdrop.addEventListener('click', () => {
  mobile.classList.remove('open');
  backdrop.classList.remove('open');
})