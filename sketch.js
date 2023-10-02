let animationContainer = null;
let up = null;
let down = null;
let page = 0;
let workPage = 0;

window.addEventListener('load', start);

function start() {
    animationContainer = document.getElementById('animation-container');
    
    const left = document.getElementById('arrow-left');
    const right = document.getElementById('arrow-right');
    up = document.getElementById('arrow-up');
    down = document.getElementById('arrow-down');

    const homeLinks = document.getElementsByClassName('home');
    const workLinks = document.getElementsByClassName('work');
    const aboutLinks = document.getElementsByClassName('about');
    const contactLinks = document.getElementsByClassName('contact');

    left.addEventListener('click', () => setPage(page - 1));
    right.addEventListener('click', () => setPage(page + 1));
    up.addEventListener('click', () => setWorkPage(workPage - 1));
    down.addEventListener('click', () => setWorkPage(workPage + 1));

    for (const home of homeLinks) home.addEventListener('click', () => setPage(0));
    for (const work of workLinks) work.addEventListener('click', () => setPage(1));
    for (const about of aboutLinks) about.addEventListener('click', () => setPage(2));
    for (const contact of contactLinks) contact.addEventListener('click', () => setPage(3));
}

function setPage(newPage) {
    page = Math.min(Math.max(newPage, 0), 3);
    //workPage = 0;
    animationContainer.style.transform = `translate(${-page * 100}vw, 0vh)`;

    if (page === 1) {
	up.style.opacity = '1';
	down.style.opacity = '1';	
    } else {
	up.style.opacity = '0';
	down.style.opacity = '0';
    }
}

// function setWorkPage(newWorkPage) {
//     workPage = newWorkPage;
//     animationContainer.style.transform = `translate(${-page * 100}vw, ${-workPage * 100}vh)`;
// }
