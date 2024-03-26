'use strict';

// Example function for subscribing
function subscribe() {
    console.log('Subscribe button clicked');
    // Get the user's email address
    const email = document.getElementById('email').value;

    // Validate the email address
    if (!email || !isValidEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Send the email address to your backend for processing
    fetch('/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email })
    })
    .then(response => {
      if (response.ok) {
        return response.json(); // Parse the JSON response
      } else {
        throw new Error('Subscription failed. Please try again later.');
      }
    })
    .then(data => {
      // Handle successful subscription
      alert(data.message);
      console.log(data); // Log any additional data received from the server
    })
    .catch(error => {
      // Handle errors
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    });
}

// Function to validate email address format
function isValidEmail(email) {
  // Regular expression for basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
document.getElementById("comment-form").addEventListener("submit", function(event) {
  event.preventDefault();
  let commentInput = document.getElementById("comment-input").value;
  if (commentInput.trim() !== "") {
      let commentElement = document.createElement("p");
      commentElement.textContent = commentInput;
      document.getElementById("comment-section").appendChild(commentElement);
      document.getElementById("comment-input").value = "";
  }
});

/* this is the section for the blog */

// Get references to the comment form and container
const commentForm = document.getElementById('comment-form');
const commentSection = document.getElementById('comment-section');

// Create an empty array to store comments
let comments = [];

commentForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Get the comment text from the input field
  const commentText = document.getElementById('comment-input').value.trim();

  // Check if the comment is not empty
  if (commentText) {
    // Create a new comment object
    const newComment = {
      text: commentText,
      // Add timestamp if desired: new Date().toLocaleString()
    };

    // Add the new comment to the comments array
    comments.push(newComment);

    // Clear the comment input field
    document.getElementById('comment-input').value = '';

    // Update the comment section with the new comments
    updateCommentSection();
  }
});

function updateCommentSection() {
  // Clear the comment section content
  commentSection.innerHTML = '';

  // Loop through the comments array and create HTML elements
  for (const comment of comments) {
    const commentElement = document.createElement('p');
    commentElement.textContent = comment.text; // Add timestamp if desired: `commentElement.textContent = comment.text + ' - ' + comment.timestamp;`
    commentSection.appendChild(commentElement);
  }
}
