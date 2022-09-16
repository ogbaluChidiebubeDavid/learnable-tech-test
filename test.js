// nav for mobile codes
var sidemenu = document.getElementById('sidemenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav #sidemenu li a');

closeMenu.addEventListener('click', closemenu);
openMenu.addEventListener('click', openmenu);

menu_items.forEach(item => {
    item.addEventListener('click',function(){
        closemenu();
    })
})

function openmenu(){
    sidemenu.style.right = '0';
}

function closemenu(){
    sidemenu.style.right = '-200px';
}

// color picker codes
document.querySelector('.switcher-btn').onclick = () => {
    document.querySelector('.color-switcher').classList.toggle('active');
}

const setter = () => {
    const stored = localStorage.getItem('theme');
    document.querySelector(':root').style.setProperty('--main-color', stored);
}

setter();


let themeButtons = document.querySelectorAll('.theme-buttons');

themeButtons.forEach(color => {
    color.addEventListener('click', (theme) => {
        let dataColor = color.getAttribute('data-color');
         document.querySelector(':root').style.setProperty('--main-color', dataColor);
         localStorage.setItem('theme', dataColor)
    });
});



themeButtons.forEach(stuff =>{
    stuff.addEventListener('click', () =>{
        document.querySelector('.color-switcher').classList.toggle('active');
    })
})

// Background Slideshow code
let slideImg = document.getElementById('slide-img');

let images = new Array(
    'images/poster1.jpg',
    'images/poster7.jpg',
    'images/bg-img-removebg-preview.png',
    'images/poster4.jpg',
    'images/poster5.jpg'
);

let len = images.length;
let i = 0;

function slider(){
    if (i > len-1){
        i = 0;
    }
    slideImg.src = images[i];
    i++;
    setTimeout('slider()', 3000);
}

// faq/accordion codes
let answers=document.querySelectorAll(".accordion");
answers.forEach((event)=>{
    event.addEventListener('click',()=>{
        if(event.classList.contains("active")){
            event.classList.remove("active");
        }
        else{
            event.classList.add("active");
        }
    })
})

// Get the modal
var modal = document.getElementById('form-wrapper');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
let formItem = document.getElementById('form-wrapper');
let openTheForm = document.querySelector('.btn-login');
let close = document.querySelector('.close');
let closeAgain = document.querySelector('.submit');
let closeOnceMore = document.querySelector('.cancelbtn');

openTheForm.addEventListener('click', openForm);
close.addEventListener('click', closeForm);
closeAgain.addEventListener('click', closeForm);
closeOnceMore.addEventListener('click', closeForm);

function closeForm(){
    formItem.style.display = 'none';
}

function openForm() {
    formItem.style.display = 'block';
}