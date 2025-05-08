// Event Handling
const colorButton = document.getElementById('colorButton');
colorButton.addEventListener('click', () => {
  colorButton.style.backgroundColor = colorButton.style.backgroundColor === 'red' ? 'blue' : 'red';
});

const hoverBox = document.getElementById('hoverBox');
hoverBox.addEventListener('mouseenter', () => hoverBox.style.backgroundColor = 'yellow');
hoverBox.addEventListener('mouseleave', () => hoverBox.style.backgroundColor = 'lightblue');

const keypressDisplay = document.getElementById('keypressDisplay');
document.addEventListener('keypress', (event) => {
  keypressDisplay.textContent = `You pressed: ${event.key}`;
});

// Secret Action
const secretButton = document.getElementById('secretButton');
secretButton.addEventListener('dblclick', () => alert('Double-click detected!'));
secretButton.addEventListener('mousedown', (event) => {
  if (event.button === 0) { // Left mouse button
    setTimeout(() => alert('Long press detected!'), 1000);
  }
});

// Image Gallery
const galleryImages = document.querySelectorAll('.gallery-image');
galleryImages.forEach((image, index) => {
  image.addEventListener('click', () => {
    alert(`You clicked on Image ${index + 1}`);
  });
});

// Tabs
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const selectedTab = button.getAttribute('data-tab');

    tabContents.forEach(content => {
      content.style.display = content.id === selectedTab ? 'block' : 'none';
    });
  });
});

// Form Validation
const form = document.getElementById('myForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailFeedback = document.getElementById('emailFeedback');
const passwordFeedback = document.getElementById('passwordFeedback');

emailInput.addEventListener('input', () => {
  const email = emailInput.value;
  if (!email.includes('@')) {
    emailFeedback.textContent = 'Invalid email format';
  } else {
    emailFeedback.textContent = '';
  }
});

passwordInput.addEventListener('input', () => {
  const password = passwordInput.value;
  if (password.length < 8) {
    passwordFeedback.textContent = 'Password must be at least 8 characters';
  } else {
    passwordFeedback.textContent = '';
  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!emailInput.value.includes('@')) {
    alert('Please enter a valid email');
  } else if (passwordInput.value.length < 8) {
    alert('Password must be at least 8 characters');
  } else {
    alert('Form submitted successfully!');
  }
});