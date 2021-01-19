console.log("Hello World!");

// function processResponse(res) {
//   console.log(res);
//   return res.json();
// }
// Same as (r) => r.json()

// Show joke on Page
// 1. Make the Request using fetch
// fetch("https://icanhazdadjoke.com/", {
//   headers: {
//     Accept: "application/json",
//   },
// })
//   .then(processResponse(res))
//   .then((data) => {
//     console.log(data);
//   });

// 1. AddEventListener
// <button id="newjoke">Add Joke</button>
async function main() {
  const button = document.getElementById("newjoke");
  button.addEventListener("click", async (event) => {
    event.preventDefault();
    const joke = await getJoke();
    renderJoke(joke);
  });
}
main();

// 2. Fetch
async function getJoke() {
  // Show joke on Page
  // 1. Make the Request using fetch
  const response = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });

  // 2. Grab the .joke
  const jokeData = await response.json();
  //   console.log(jokeData);
  //   console.log(jokeData.joke);
  // 3. Render ("Draw") it to the page
  return jokeData.joke;
}

// 3. Render
async function renderJoke() {
  //async bc we will awat getJoke
  const joke = await getJoke();

  // create DOM element
  const p = document.createElement("p");
  // put joke text in it
  p.textContent = joke;
  //attach it to an existing DOM element
  const root = document.getElementById("root").appendChild(p);
}
/* 
 How do you get an "as-you-type" feature in your friont-end app?
*/
// 1. Add Input Text
// 2. addEventListener ("keyup", (event)=>{
//     const name = event.target.value
//     fetch('/usernametaken')
//     .then((name)=>{
//         if(name){}
//     })
// })

// 1. listen
// 2. action
// 3. do something
// grab batches (array) of words tha begin with letters and send that array back
