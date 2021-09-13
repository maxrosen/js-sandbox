// When showAlert() is called, an alert box is shown in the browser
function showAlert() {
  alert("Hello! I am an alert box!!");
}

/* 
  jQuery requires the document to be ready 
  for functions to be called on html elements
*/
$(document).ready(function () {
  // This function is called when the button with id "formSubmit" is clicked
  $("#formSubmit").click(function () {
    // A simple message is logged in the browser dev tools console
    console.log("Form submit button clicked");

    // The function grabs the value of input with id "fname"
    let fname = $("#fname").val();

    // The function grabs the selected value of the radio buttons with name "fav_food"
    let food = $("input[name=fav_food]:checked").val();

    // The browser displays an alert using string interpolation
    // String interpolation allows strings to be created using JS variables
    // These strings are placed inside tick marks (`) instaed of quote marks
    // To use a variable simple use the form of ${variable_name} inside the ticks
    alert(`${fname}'s favorite food is ${food}`);
  });
});
