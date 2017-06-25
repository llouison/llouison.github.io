window.onload = function() {

    let displayMenu = false;

    document.getElementById('menu').addEventListener('click', toggleMenu);

    function toggleMenu() {
        if (displayMenu === true){
            document.querySelector('header').setAttribute('class', 'hidden');
            displayMenu = false;
        }
        else if (displayMenu === false){
            document.querySelector('header').setAttribute('class', 'visible');
            displayMenu = true;
        }
    }

    document.getElementById('next').addEventListener('click', function() {
        plusDivs(-1);
    });

    document.getElementById('previous').addEventListener('click', function() {
        plusDivs(+1);
    });

    let slideIndex = 1;
    showDivs(slideIndex);

    function plusDivs(n) {
        showDivs(slideIndex += n);
    }

    function showDivs(n) {
        let i;
        const x = document.getElementsByClassName("polaroid");
        if (n > x.length) {slideIndex = 1} 
        if (n < 1) {slideIndex = x.length} ;
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none"; 
        }
        x[slideIndex-1].style.display = "block"; 
    }

}