console.log("JS lodaded successfully");

// ---- FETCH API -----
// make asynchronous HTTP requests
// It returns a promise

// function getCatFact(){
//     fetch("https://catfact.ninja/fact")     // Fetch the data from the URL
//     .then(response => {
//         // Handled error so if there is any error in getting the response it will stop the execution and will not move
//         // to the next .then because of throw new Error
//         if(!response.ok){
//             throw new Error("Network response was not ok")
//         }
//         console.log(response);
//         return response.json();         // Parse the response as JSON
//     })
//     .then(data => {
//         console.log("Random Cat fact: " + data.fact);
//         console.log("Length: " + data.length);
//     })
//     .catch(error => {
//         console.log("There was a problem with the fetch operation: " + error);
//     })
// }
// getCatFact();

// ----- Async / Await ------
// A function to fet the data using async/await
// Use try-catch to handle the promise rejection
async function getCatFact() {
  try {
    // await for the promise
    const response = await fetch("https://catfact.ninja/fact");
    // Check if API is responding OK , if not throw an error and stop the code execution
    if (!response.ok) {
      throw new Error("Network response wasn't ok");
    }
    // Wait for the response to be parse as JSON
    const data = await response.json();
    // Display the data
    console.log("Random Cat fact: " + data.fact);
    console.log("Length: " + data.length);
  } catch (error) {
    console.err("There was a problem with fetch operation:  " + error);
  }
}

getCatFact();
