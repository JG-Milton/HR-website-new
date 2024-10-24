// ........SIDEBAR, DO NOT TOUCH!!!.......

function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display ='flex'
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display ='none'
}


// =============== SECTION 1 ===========================//

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

// Function to show slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

// Function to move slides
function moveSlide(n) {
  currentSlide += n;

  // Loop around if the index goes out of bounds
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  } else if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  showSlide(currentSlide);
}

// Initially show the first slide
showSlide(currentSlide);

