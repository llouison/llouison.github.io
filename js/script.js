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
        plusDivs(1);
    });

    document.getElementById('previous').addEventListener('click', function() {
        plusDivs(-1);
    });

    let slideIndex = 1;
    showDivs(slideIndex);

    function plusDivs(n) {
        showDivs(slideIndex += n);
    }

    function showDivs(n) {
        // let i;
        const x = document.querySelectorAll(".polaroid");
        const dots = document.querySelectorAll(".dot");
        if (n > x.length) {slideIndex = 1} 
        if (n < 1) {slideIndex = x.length};
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none"; 
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = "dot empty"
        }
        x[slideIndex-1].style.display = "block"; 
        dots[slideIndex-1].className = "dot filled";
    }

}