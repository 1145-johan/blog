const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Route to handle POST requests to '/subscribe'
app.post('/subscribe', (req, res) => {
  const { email } = req.body;

  // Perform basic email validation
  if (!email || !isValidEmail(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  // Logic to handle the email subscription
  console.log(`Received subscription request for email: ${email}`);
  // Send a response back to the client
  res.status(200).json({ message: 'Subscription successful' });
});

// Function to validate email address format
function isValidEmail(email) {
  // Regular expression for basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
