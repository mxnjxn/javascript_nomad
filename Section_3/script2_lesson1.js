// Writing "document" in the Console will allow to see the html code(object, to be specific) in JS land.
// document is an object which is already included in the browser. 
// Reading html from JS. Also, able to change html from Java Script
// Java script is already connected to html


// -----------
// document.getElementById("title") is a function imbedded inside an object "documents"

const title = document.getElementById("title");

console.log(title);
console.dir(title); // open up the elements

title.innerText = "Got you!"
console.log(title.id);
console.log(title.className);

