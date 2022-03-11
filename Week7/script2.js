// DOM
// Document Object Model

//selecting elements

//getElementById
//getElementByClassName
//getElementByTagName
//getElementByName

//querySelector

// let t1;
// let t2;
// let t3;
// let t4;

let t1, t2, t3, t4, t5;

t1 = document.getElementById("id1");
t2 = document.getElementsByName("name1");
t3 = document.getElementsByTagName("tag1");
t4 = document.getElementsByClassName("class1");

t5 = document.querySelector('.queryClass');


//Manipulating elements

//innerHTML
//createElement
//append()
//textContent
//setAttribute
//getAttribute
//removeChild()
//removeAttribute
//style properties
//width & height can be changed
//change text/bg colors

//t1.innerHTML = "This is an element selector by id";
t5.innerHTML = "this is example of query selector"


function changeText(elementId, stringToChange, colorToApply) {
	// body...
	let element = document.getElementById(elementId)
	element.innerHTML = " " + stringToChange;
	element.style.color = colorToApply;
}

function createNewElement(){
	//create new element
	let element = document.createElement('h3');
	document.body.appendChild(element);
	element.innerHTML = "This is created by the script.js";

}

function removeElement(elementId){
	let elementToRemove = document.getElementById(elementId);
	document.body.removeChild(elementToRemove);
}