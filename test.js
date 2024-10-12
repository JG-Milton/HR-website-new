// ........SIDEBAR, DO NOT TOUCH!!!.......

function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display ='flex'
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display ='none'
}

// ..........SECTION 2....................

// Function to handle name input submission
function greetUser() {
    const name = document.getElementById('nameInput').value;
    const greetingMessage = document.getElementById('greetingMessage');
    
    if (name) {
        greetingMessage.textContent = `Welcome, ${name}!`;
    } else {
        greetingMessage.textContent = `Please enter your name.`;
    }
}

// Add event listener to capture 'Enter' key press
document.getElementById('nameInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();  // Prevent default form submission behavior
        greetUser();  // Call greetUser() function
    }


});



// Animate each letter from opacity 0 to 1 (flash effect), letter by letter
gsap.to(".split span", {
    opacity: 1,
    duration: 2, // Flash speed for each letter
    stagger: 0.2, // Time between each letter's animation
    repeat: -1,   // Infinite loop
    yoyo: true,   // Reverse the animation (flashing effect)
    ease: "power1.inOut" // Smooth easing
  });
  
