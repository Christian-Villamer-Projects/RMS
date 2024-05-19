const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

const darkMode = document.querySelector('.dark-mode');

menuBtn.addEventListener('click', () =>{
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

darkMode.addEventListener('click', () =>{
    document.body.classList.toggle('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)'), classList.toggle('active');
    darkMode.querySelector('span:nth-child(2)'), classList.toggle('active');
})


/* profile */

let subMenu = document.getElementById("subMenu");

function  toggleMenu(){
    subMenu.classList.toggle("open-menu");
}
