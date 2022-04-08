console.log("Lesson2")
const Hello = document.getElementsByClassName("Hello");

console.log(Hello); // shows as an array.

//Mission:bring <h1> in a <div> tag
//Searches only one tag name at a time. But if you pass in * as the tag name, you will get all elements in the DOM. 
const Hello2 = document.getElementsByTagName("*");
console.log(Hello2); //shows as an array. --> Hello2 becomes an array not an object. 

//QuerySelector allows to search for an elements using CSS notation(css selector).
//QuerySelector returns only one elements.--> returns the first elements (refer to the description)
const Hello3 = document.querySelector(".Hello2 h1"); // means "bring the h1 tag which is inside the class name "Hello2" "
console.log(Hello3);
Hello3.innerText = "Hello"

// To get all code not only the first one.--> Use QuerySelectorAll 
const Hello4 = document.querySelectorAll(".Hello2 h1");
console.log(Hello4); // shows as an nodelist??


const Hello5 = document.querySelectorAll("#Hello"); // find the element that have id=Hello
const Hello6 = document.getElementById("Hello") //same as above 

// Nodes are in DOM aka. Document Object Model. In the DOM, all parts of the document, such as elements, attributes, text, etc. are organized in hierarchical tree-like structure; consisting of parents and children.
// These individual parts of the document are known as nodes (DOM elements.).

//Difference between NodeList and array?
//
