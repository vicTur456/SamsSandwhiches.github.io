// Function to be executed when the page loads
window.onload = function() {
    // Get all the images on the page
    var images = document.getElementsByTagName('img');
  
    // Add event listeners for mouseover and mouseout to each image
    for (var i = 0; i < images.length; i++) {
      images[i].addEventListener('mouseover', imageMouseOver);
      images[i].addEventListener('mouseout', imageMouseOut);
    }
  
    // Get all the buttons on the page
    var buttons = document.getElementsByTagName('button');
  
    // Add event listeners for mouseover and mouseout to each button
    for (var j = 0; j < buttons.length; j++) {
      buttons[j].addEventListener('mouseover', buttonMouseOver);
      buttons[j].addEventListener('mouseout', buttonMouseOut);
    }
  };
  
  // Function to be executed when the mouse hovers over an image
  function imageMouseOver() {
    // Add your desired response or effect here
    this.style.opacity = '0.8';
  }
  
  // Function to be executed when the mouse leaves an image
  function imageMouseOut() {
    // Remove the response or effect applied in the mouseover function
    this.style.opacity = '1';
  }
  
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
  