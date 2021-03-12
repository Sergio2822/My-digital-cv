// Toggle Menu
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav_toggle','nav_menu')

const navLink = document.querySelectorAll('.nav-link');   

//Iniciate the Menu in the Home page. As soon as the user click in an option it toggles
function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav_menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

//Typing animation 
var typed = new Typed(".home-title-color", {
    strings: ["curious ", "creative", "persistent"],
    typeSpeed: 100,
    backSpeed:60,
    loop:true
});

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home-title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home-img',{delay: 400}); 

/*SCROLL ABOUT*/
sr.reveal('.about-img',{}); 
sr.reveal('.about-subtitle',{delay: 400}); 
sr.reveal('.about-text',{delay: 400}); 

/*SCROLL WORK*/
sr.reveal('.work_img',{delay: 400}); 

/*SCROLL SKILLS*/
sr.reveal('.skills-image',{delay:200}); 



