// Synchronus JS = a code is executed line by line
// Default behaviour of JS
// console.log("Javascript is Fun");
// console.log("I like JS");
// console.log("But I need to learn more");

// --- Asynchronous JS ----

// Approach 1: use setTimeout()
// It mimics waiting for something to happen
// Waiting for a pizza to bake
// console.log("Order Pizza");
// setTimeout(() => {
//     console.log("Your pizza is now ready");
// }, 10000 ) // time is represented in ms
// console.log("Let's prepare drinks!");
// console.log("Lets Partyy!!!");

// clearTimeout()
// when the user wants to stop the execution of the function before the time, not mandatory only used
// when/if required

// ---- using setInterval() and clearInterval() ----
// Pizza Countdown Example
// Set a countdown time (in secs)
// let countdown = 5;

// function pizzaCountDown(){
//     if (countdown > 0){
//         console.log("Pizza will be ready in " + countdown + "seconds");
//         countdown--;
//     }
//     else{
//         console.log("Your pizza is ready 🍕");
//         clearInterval(timer); // to stop execution, to avoid any performance issues, unusual behavior
//     }
// }

// // pizzaCountDown();
// const timer = setInterval(pizzaCountDown, 1000) // 1000ms = 1secs

// Callback Functions -
// A function that is passed as an argument to another function and
// gets called after an operation is finished

// Example:
// 1. When the pizza is ready --> bakePizza()
// 2. serve it to guests ---> servePizza()
// 3. Call the functions

// 1st Function
// function bakePizza(callback){
//     console.log("Baking Pizza....");

//     // after 5secs delay show that pizza is ready
//     setTimeout(() => {
//         console.log("Pizza is ready to eat!!!");
//         callback();
//     }, 5000);
//     console.log("Prepare some drinks");
// }

// // 2nd Function
// function servePizza(){
//     console.log("Serving the pizza to the guests");
// }

// // Calling the function
// bakePizza(servePizza);

// ---------- Week 6 - Day 2 -----------
// ------------- PROMISES --------

// Scenario: You order a pizza and the store promises it will be delivered.
// You can then do something based on whether the promise was fulfilled (resolved - pizza arrived) or rejected (cancel order - refund)

// Creating Promise
// let orderPizza = new Promise( (resolve, reject) => {
//     let pizzaDelivered = true;
//     setTimeout( () =>{
//         if(pizzaDelivered){
//             resolve("Pizza is delivered to you!")
//         }
//         else{
//             reject("Not delivered, sorry");
//         }
//     }, 5000 )
// })

// //Handling Promise
// orderPizza
// .then ( (message) => console.log(message))  // It shows the resolve message
// .catch( (error) => console.log(error))   // It displays the error message
// .finally (() => console.log("All settled successfully"));

// console.log("Heey I am learning promises today");
// console.log("Its my last day of JS")

// ----- PROMISES CHAINING -----
// STEP 1: Order pizza (returns a promise)
// const orderPizza = function () {
//   return new Promise((resolve, reject) => {
//     let pizzaDelivered = true;
//     setTimeout(() => {
//       if (pizzaDelivered) {
//         resolve("Pizza is delivered to you!");
//       } else {
//         reject("Not delivered, sorry");
//       }
//     }, 1000);
//   });
// };

// // STEP 2: Serve pizza (returns a promise)
// const servePizza = function(){
//     return new Promise((resolve) =>{
//         setTimeout( () =>{
//             resolve("Pizza is served to the guests!")
//         }, 2000);
//     })
// }

// // STEP 3: Clean Up (returns a promise)
// const cleanUp = function(){
//     return new Promise((resolve) =>{
//         setTimeout( () =>{
//             resolve("Cleaned Up after the party!")
//         }, 2000);
//     })
// }

// // Chain the promises together
// orderPizza()
// .then((message) => {
//     console.log(message);
//     return servePizza();  // returns the next promise
// })
// .then((message) =>{
//     console.log(message);
//     return cleanUp(); // returns the next promise
// })
// .then((message) => {
//     console.log(message);
// })
// .catch((error) =>{
//     console.log(error); // Handle any error from any step
// })
// .finally(() => {
//     console.log("Partyy Over!!!!")
// })

// ------ using Fetch API -------

