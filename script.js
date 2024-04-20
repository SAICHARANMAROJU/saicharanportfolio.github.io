function myMenuFunction() {
  var menuBth = document.getElementById("myNavMenu");
  if (menuBth.className === "nav-menu") {
      menuBth.className += "responsive";
  } else {
      menuBth.className = "nav-menu";
  }
}

const body = document.querySelector("body"),
  toggleSwitch = document.getElementById("toggle-switch");
toggleSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");
});



/* Typing Effect */
document.addEventListener('DOMContentLoaded', function() {
  const textElement = document.querySelector('.typedText');
  const textArray = ["Designer","|","Coder","|","Developer","|"];
  let textIndex = 0;
  let charIndex = 0;

  function type() {
      if (charIndex < textArray[textIndex].length) {
          textElement.textContent += textArray[textIndex].charAt(charIndex);
          charIndex++;
          setTimeout(type, 100); 
      } else {
          setTimeout(erase, 1000);
      }
  }

  function erase() {
      if (charIndex > 0) {
          textElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
          charIndex--;
          setTimeout(erase, 50); 
      } else {
          textIndex++;
          if (textIndex >= textArray.length) {
              textIndex = 0;
          }
          setTimeout(type, 500); 
      }
  }

  type();
});

// Smooth scrolling effect for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
