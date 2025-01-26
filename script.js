// Initialize EmailJS
emailjs.init("PdqZ6AMUAMrQXgi9m");

document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Validate fields
  if (!fullName || !email || !message) {
    document.getElementById("statusMessage").textContent = "Please fill in all fields.";
    document.getElementById("statusMessage").style.color = "red";
    return;
  }

  // Send email using EmailJS
  emailjs.send("service_ltgb6bd", "template_0thec09", {
    fullName: fullName,
    email: email,
    message: message,
  })
    .then(() => {
      document.getElementById("statusMessage").textContent = "Message sent successfully!";
      document.getElementById("statusMessage").style.color = "green";
      document.getElementById("contactForm").reset();
    })
    .catch(() => {
      document.getElementById("statusMessage").textContent = "Failed to send message. Please try again.";
      document.getElementById("statusMessage").style.color = "red";
    });
});
