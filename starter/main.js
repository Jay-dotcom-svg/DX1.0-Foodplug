
// ES5
// console.log("Wagwan World!");
// alert(writeup);
// var writeup = "Wagwan World!";

// console.log(document)
// console.log(hamburgerdiv)

var hamburgerdiv = document.querySelector(".hamburger");
var mobilelinks  = document.querySelector(".mobile-links-holder");
var backdrop = document.querySelector(".backdrop");

function dosomething() {
    hamburgerdiv.classList.toggle("showburger")
    mobilelinks.classList.toggle("show-mobile-links-holder")
    backdrop.classList.toggle("show-backdrop")
}

