document.addEventListener("DOMContentLoaded", function() {
    const text = "Hi, Fox! Welcome to My World";
    const typewriter = document.querySelector(".typewriter");
    let index = 0;
  
    function type() {
      if (index < text.length) {
        typewriter.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 100);
      }
    }
  
    type();
  
    // Theme toggle logic
    const toggleButton = document.getElementById("toggleButton");
    const body = document.body;
  
    toggleButton.addEventListener("click", () => {
      if (body.classList.contains("night-theme")) {
        body.classList.replace("night-theme", "day-theme");
        toggleButton.textContent = "Switch to Night Theme";
      } else {
        body.classList.replace("day-theme", "night-theme");
        toggleButton.textContent = "Switch to Day Theme";
      }
    });
  
    // Initialize with night theme
    body.classList.add("night-theme");
  });
  