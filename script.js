/*const roles = ["Web Developer", "UI/UX Designer", "Mobile App Developer"];
let roleIndex = 0;

function changeRole() {
    document.getElementById("dynamic-text").textContent = roles[roleIndex];
    roleIndex = (roleIndex + 1) % roles.length;
}

setInterval(changeRole, 2000);*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelector('selectiom');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute;

        if(top >= offset && top < offset + height){
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active')
            })
        }

    })
}


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}