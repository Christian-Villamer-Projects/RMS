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

/* reservation table */

Reservations.forEach(reservations => {
    const tr = document.createElement('tr');
    const trContent = `
        <td>${reservations.userName}</td>
        <td>${reservations.userNumber}</td>
        <td>${reservations.reserveStatus}</td>
        <td class="${reservations.status === 'Declined' ? 'danger' : reservations.status === 'Pending' ? 'warning' : 'primary'}">${reservations.status}</td>
        <td class="primary">Details</td>
    
    `;
    tr.innerHTML =trContent;
    document.querySelector('table tbody').appendChild(tr);
});