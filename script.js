console.log("JS is loading successfully");

//Changing the title of website - <title>
document.title = "My Pizza Store";
console.log(document.title);

// //Accessing a HTML element using its ID
// let bannerText = document.getElementById("banner-text");
// console.log(bannerText);

// // Changing the value of the element
// // innerText, innerHTML or textContent
// // bannerText.innerText = "<i> Serving Hot Pizzasss 🍕 </i>";
// // bannerText.innerHTML = "<i> Serving Hot Pizzasss 🍕 </i>"
// // bannerText.textContent = "Serving Hot Pizzasss 🍕";

// function changeText(){
// // Conditional text modification using DOM and JS based on the HTML element text
// if (bannerText.innerText === "Delicious Pizzas, Anytim") {
//     bannerText.innerText = "Serving Hot Pizzas";
//     // Manipulating the style using DOM style property
//     bannerText.style.color = "red";
//     bannerText.style.backgroundColor = "lightPink";
// } else {
//     bannerText.innerText = "No Pizza today";
//     bannerText.style.color = "blue";
//     bannerText.style.backgroundColor ="lightBlue";
// }
// }

// changeText();

// ------ Changing the greeting message based on the username -----
// // Specify the username or leave it blank to simulate a guest
// let userName = "Valeria";
// let welcomeMessage = document.getElementById("welcome-message");

// // Conditional to check if userName is assigned or not
// if(userName){
//     console.log(userName);
//     welcomeMessage.innerText = "Welcome, " + userName + "!";
//     //Creating an element using createElement method
//     let specialOffer = document.createElement('h1'); // <h1> </h1>
//     // Setting the content for the h2 element
//     specialOffer.innerText = "A Special Offer only for you!!!"; // <h1> A Special Offer only for you!!! </h1>
//     console.log(specialOffer); //testing if the element is created successfully
//     // Once the element is created we append it to the DOM / HTML Page
//     // Accessing the about element using the class property
//     // console.log(document.getElementsByClassName("about"));
//     let aboutSection = document.querySelector(".about");
//     // console.log(aboutSection);
//     aboutSection.insertAdjacentElement("afterend", specialOffer);
//     // Appending the newly created element to the body
//     // document.body.appendChild(specialOffer);

// }
// else{
//     console.log(userName);
//     welcomeMessage.innerText = "Welcome Guest!";
//     // ------ Adding new element dynamically -----
//     // document.createElement('') then you add it to your DOM (appendChild)
//     let signUpButton = document.createElement('button');
//     signUpButton.innerText ="SIGN UP";
//     signUpButton.style.color = "red";
//     signUpButton.style.fontSize = "1.5em";
//     signUpButton.style.backgroundColor = "Orange";
//     signUpButton.style.padding = "5px";
//     let aboutSection = document.querySelector(".about");
//     aboutSection.insertAdjacentElement("afterend", signUpButton);

//     // --- Remove an element ----
//     let specialitySection = document.querySelector('.speciality');
//     specialitySection.remove();
// }

// ------- DOM - DAY 2 ------
// ---- getElementsByClassName ----
// let navLinks = document.getElementsByClassName('nav-link');
// console.log(navLinks);
// for (let index = 0; index < navLinks.length; index++) {
//    navLinks[index].style.color = "green";
//    navLinks[index].style.fontSize = "14px";
// }

// // ---- getElementsByTagName and color all the h2 headings to Blue ----

// // ---- Attributes ----
// let offerImage = document.createElement("img");
// offerImage.setAttribute("src","https://plus.unsplash.com/premium_photo-1679924471066-dd984e92f395?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
// console.log(offerImage.getAttribute("src"));
// // 1st Approach: Use inline styling
// // offerImage.style.width = "300px";
// // offerImage.style.display = "block";
// // offerImage.style.margin = "0 auto";

// // 2nd Approach : Use CSS Class
// offerImage.classList.add("centered-image");
// console.log("Class name is: " + offerImage.className);
// // set its alternative text using alt
// offerImage.setAttribute("alt", "A delicious pizza for you!");
// console.log(offerImage.getAttribute('alt'));
// // Append it to the page
// document.body.appendChild(offerImage);

// ----- EVENTS -----
// 1. Event Handling
// let viewButton = document.querySelectorAll('.cta-btn');
// console.log(viewButton);
// // let ctaBtn = document.getElementsByClassName('cta-btn');

// for (let index = 0; index < viewButton.length; index++) {
//     viewButton[index].onclick  = () => {
//         console.log("Here you goo....");
//     }
// }

// ---- EVENT HANDLER- An object can have only 1 event attached to it ----
//let viewButton = document.getElementById('view-btn');
// console.log(viewButton);

// viewButton.onclick = () =>{
//     console.log("I am clicked!");
// }

// viewButton.onclick = () =>{
//     console.log("I am clicked again!");
// }

// viewButton.onclick = () =>{
//     console.log("I am clicked again and again!");
// }

// ----- EVENT LISTENERS ------
// ---- 1 object can have multiple events attached to it -----
// viewButton.addEventListener("click", () => {
//     console.log("Thank you!!!")
// })

// viewButton.addEventListener("click", () => {
//     console.log("Thank you again!!!")
// })

// viewButton.addEventListener("click", () => {
//     console.log("Thank you again and again!!!")
// })

// --- EVENT Handling for pizza form ----
let orderForm = document.getElementById("pizza-order-form");
console.log(orderForm); //for debugging


orderForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Stops the form from reloading
  
  // Add validation for the phone number field - length should be 10
  let phone = document.getElementById("phone").value;
  
  //Validate phone number length to be exactly 10
  if (phone.length !== 10) {
    // Show validation message
    alert("Phone number must be exactly 10 digits");
  } 
  else {
    // Show thank you message
    document.getElementById("thank-you-msg").style.display = "block";
    // Reset the form fields
    orderForm.reset();
  }
});
