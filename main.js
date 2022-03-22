// Select the button
const btn = document.querySelector('button');
// Select the stylesheet <link>
const theme = document.querySelector("#theme-link");

// Listen for a click on the button
// btn.addEventListener("click", function() {
  // If the current URL contains "ligh-theme.css"
  //if (theme.getAttribute("href") == "css/lightMode.css") {
    // ... then switch it to "dark-theme.css"
   // theme.href = "css/darkMode.css";
  // Otherwise...
 // } else {
    // ... switch it to "light-theme.css"
  //  theme.href = "css/lightMode.css";
//  }
//});

// test if button works
btn.addEventListener('click', () => {
    alert("The button was clicked!");
});