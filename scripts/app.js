console.log("Hello World!");

function processResponse(res) {
  console.log(res);
  return res.json();
}
// Same as (r) => r.json()

// Show joke on Page
// 1. Make the Request using fetch
fetch("https://icanhazdadjoke.com/", {
  headers: {
    Accept: "application/json",
  },
})
  .then(processResponse(res))
  .then((data) => {
    console.log(data);
  });
// 2. Grab the .joke
// 3. Render ("Draw") it to the page
