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

  const email = document.getElementById("email").value;
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const comment = document.getElementById("comment").value;

  const params = { email: email, name: name, phone: phone, comment: comment };

  emailjs.send("service_id", "template_id", params).then(
    (response) => {
      alert("Email sent successfully!");
      console.log("SUCCESS:", response);
    },
    (error) => {
      alert("Failed to send the email. Please try again.");
      console.error("ERROR:", error);
    }
  );
};
