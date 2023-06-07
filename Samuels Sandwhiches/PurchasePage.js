// Function to be executed when the page loads
window.onload = function() {
    // Get the form element
    var form = document.querySelector('form');
  
    // Add event listener for form submission
    form.addEventListener('submit', validateForm);
  };
  
  // Function to validate the form before submission
  function validateForm(event) {
    // Get the input values from the form
    var cardNumber = document.getElementById('card').value;
    var orderCode = document.getElementById('ordercode').value;
    var phoneNumber = document.getElementById('phone').value;
    var name = document.getElementById('name').value;
    
  
    // Validate card number
    if (cardNumber.length !== 16) {
      alert('Invalid card number. Please enter a 16-digit card number.');
      event.preventDefault(); // Prevent form submission
      return;
    }
  
    // Validate order code
    var validOrderCodes = ['B12', 'B14', 'B17'];
    if (!validOrderCodes.includes(orderCode)) {
      alert('Invalid order code. Please enter a valid order code (B12, B14, or B17).');
      event.preventDefault(); // Prevent form submission
      return;
    }
  
    // Validate phone number
    if (phoneNumber.length !== 10) {
      alert('Invalid phone number. Please enter a 10-digit phone number.');
      event.preventDefault(); // Prevent form submission
      return;
    }
  
    // Validate name
    if (/\d/.test(name)) {
      alert('Invalid name. Name cannot contain numbers.');
      event.preventDefault(); // Prevent form submission
      return;
    }
  
    // Form is valid, allow submission
  }
  