const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn_burger')
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav_item')
let showMenu = false;


menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'))

        
        showMenu = true;
    }else{
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    menuNav.classList.remove('open');
    navItems.forEach(item => item.classList.remove('open'))




    showMenu = false;
    }   
    
    
}

function changeBg() {
   

    let scrollValue = window.scrollY;
  
    if(scrollValue < 250) {
        
        nav.style.background ="transparent"
      

    }else{
        nav.style.cssText= "background-color: rgba(0, 0, 0, 0.7); transition:ease-in-out 1s;"
    
    
    }
    
    
}

window.addEventListener('scroll',changeBg)