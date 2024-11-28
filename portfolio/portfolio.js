// changing text
const appearance = [
  "Scalable Backend Systems",
  "Front-End Architecture",
  "Interactive Web Design",
  "Full-Stack Development",
];

let index = 0;

function changeText() {
  const span = document.getElementById("change-text");

  span.textContent = appearance[index];

  index++;
  index >= appearance.length && (index = 0);
}
setInterval(changeText, 3000);

// changing greetings
const greetings = [
  "നമസ്കാരം,",
  "नमस्कार,",
  "வணக்கம்,",
  "ನಮಸ್ಕಾರ,",
  "నమస్కారం,",
  "Hello,",
];

let ind = 0;

function changeGreet() {
  const span = document.getElementById("greetings");

  span.classList.remove("greetings");

  span.textContent = greetings[ind];
  void span.offsetWidth;

  span.classList.add("greetings");

  ind++;
  ind >= greetings.length && (ind = 0);
}
setInterval(changeGreet, 3000);

// Email js
const mailMe = (event) => {
  event.preventDefault();

  // Get values from form fields
  const email = document.getElementById("email").value;
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const comment = document.getElementById("comment").value;

  // Flags to check if the fields are valid
  let isValid = true;

  // Reset error messages and border styles
  resetValidation();

  // Validate Email
  if (!email || !validateEmail(email)) {
    document.getElementById("email").classList.add("is-invalid");
    document.getElementById("email-error").style.display = "block";
    isValid = false;
  }

  // Validate Name
  if (!name) {
    document.getElementById("name").classList.add("is-invalid");
    document.getElementById("name-error").style.display = "block";
    isValid = false;
  }

  // Validate Phone
  if (!phone) {
    document.getElementById("phone").classList.add("is-invalid");
    document.getElementById("phone-error").style.display = "block";
    isValid = false;
  }

  // Validate Comment
  if (!comment) {
    document.getElementById("comment").classList.add("is-invalid");
    document.getElementById("comment-error").style.display = "block";
    isValid = false;
  }

  // If form is valid, send email
  if (isValid) {
    const params = { email: email, name: name, phone: phone, comment: comment };

    emailjs.send("service_code", "template_code", params).then(
      (response) => {
        alert("Email sent successfully!");
        console.log("SUCCESS:", response);
      },
      (error) => {
        alert("Failed to send the email. Please try again.");
        console.error("ERROR:", error);
      }
    );
  }
};

// Helper function to validate email format
const validateEmail = (email) => {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
};

// Reset all validation states
const resetValidation = () => {
  document.getElementById("email").classList.remove("is-invalid");
  document.getElementById("name").classList.remove("is-invalid");
  document.getElementById("phone").classList.remove("is-invalid");
  document.getElementById("comment").classList.remove("is-invalid");

  document.getElementById("email-error").style.display = "none";
  document.getElementById("name-error").style.display = "none";
  document.getElementById("phone-error").style.display = "none";
  document.getElementById("comment-error").style.display = "none";
};
