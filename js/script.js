console.log('hello');


let displayMenu = false;

document.getElementById('menu').addEventListener('click', toggleMenu)

function toggleMenu() {
    if (displayMenu === true){
        console.log('hiding menu');
        document.querySelector('header').setAttribute('class', 'hidden');
        displayMenu = false;
    }
    else if (displayMenu === false){
        console.log('showing menu');
        document.querySelector('header').setAttribute('class', 'visible');
        displayMenu = true;
    }
}