
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
function bakePizza(callback){
    console.log("Baking Pizza....");
    
    // after 5secs delay show that pizza is ready
    setTimeout(() => {
        console.log("Pizza is ready to eat!!!");
        callback();        
    }, 5000);
    console.log("Prepare some drinks");
}

// 2nd Function 
function servePizza(){
    console.log("Serving the pizza to the guests");
}

// Calling the function
bakePizza(servePizza);