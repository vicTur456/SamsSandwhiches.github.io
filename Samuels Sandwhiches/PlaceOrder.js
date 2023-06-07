// Function to be executed when the page loads
window.onload = function() {
    // Get all the buttons on the page
    var buttons = document.getElementsByTagName('button');
  
    // Add event listeners for mouseover and mouseout to each button
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('mouseover', buttonMouseOver);
      buttons[i].addEventListener('mouseout', buttonMouseOut);
    }
  };
  
  // Function to be executed when the mouse hovers over a button
  function buttonMouseOver() {
    // Add your desired response or effect here
    this.style.backgroundColor = 'gray';
  }
  
  // Function to be executed when the mouse leaves a button
  function buttonMouseOut() {
    // Remove the response or effect applied in the mouseover function
    this.style.backgroundColor = '';
  }
  