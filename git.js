var Element = document.getElementById("container");
var children = Element.children;
console.log(children);

let copil = document.getElementById("copil1");
let parinte = copil.parentElement;
console.log(parinte);

let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

let accesare = document.getElementsByClassName("developer");
console.log(accesare);

var obiectulDocumentAccesareElementDupaSelector =
    document.querySelectorAll(".developer");
var altaSelectare = document.querySelector(".developer");
console.log(obiectulDocumentAccesareElementDupaSelector);
console.log(altaSelectare);

let paragrafNou = document.createElement("p");
paragrafNou.textContent = "Element nou adaugat";
let adaugareLaContainer = document.getElementById("container3");
adaugareLaContainer.appendChild(paragrafNou);