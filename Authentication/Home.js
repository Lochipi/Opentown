
const typingContainer = document.getElementById("typing-container");
const texts = [
  
  "This page is under development......",
  "We will be launching soon...",
  "Thank you for being a beta tester",
];

let index = 0;
let charIndex = 0;

// Function to display the typing animation
const type = () => {
  if (charIndex < texts[index].length) {
    const currentText = texts[index];
    const typingElement = typingContainer.children[index];

    typingElement.textContent += currentText.charAt(charIndex);
    charIndex++;

    setTimeout(type, 50); 
  } else {
    setTimeout(() => {
      typingContainer.children[index].style.opacity = 0;
      index = (index + 1) % texts.length;
      charIndex = 0;
      typingContainer.children[index].style.opacity = 1;
      typingContainer.children[index].textContent = "";
      type();
    }, 1000); 
  }
};



// Start the typing animation immediately
type();


