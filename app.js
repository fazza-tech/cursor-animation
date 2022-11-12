let mouseCursor = document.querySelector('.cursor');
let navLinks = document.querySelectorAll('.nav-links li');

window.addEventListener('mousemove',cursor);

function cursor(e){
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

navLinks.forEach(Link => {
    Link.addEventListener('mouseleave',() => {
        mouseCursor.classList.remove("link-grow");
        Link.classList.remove("hovered-link");
    });
    Link.addEventListener('mouseover',() => {
        mouseCursor.classList.add("link-grow");
        Link.classList.add("hovered-link");
    });
});