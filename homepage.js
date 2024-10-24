// ........SIDEBAR, DO NOT TOUCH!!!.......

function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display ='flex'
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display ='none'
}



// ===================== LANDING PAGE =========================== //


// ..........SECTION 2....................

// Function to handle name input submission
// Multi-slideshow functionality
const slides = document.querySelector('.slides');
    const slideElements = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevButton = document.querySelector('.arrow-left');
    const nextButton = document.querySelector('.arrow-right');
    const nameButton = document.getElementById('nameButton');
    const namePopup = document.getElementById('namePopup');
    const overlay = document.getElementById('overlay');
    const submitName = document.getElementById('submitName');
    const nameInput = document.getElementById('nameInput');
    const firstSlide = document.getElementById('firstSlide');

    let index = 0;
    const totalSlides = slideElements.length;

    function updateSlide() {
      slides.style.transition = 'transform 0.5s ease';
      slides.style.transform = `translateX(${-index * 100}%)`;
      updateDots();
    }

    function updateDots() {
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });
    }

    function nextSlide() {
      if (index === totalSlides - 1) {
        slides.style.transition = 'none';
        slides.style.transform = 'translateX(0)';
        index = 0;
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            index++;
            updateSlide();
          });
        });
      } else {
        index++;
        updateSlide();
      }
    }

    function prevSlide() {
      if (index === 0) {
        slides.style.transition = 'none';
        slides.style.transform = `translateX(${-100 * (totalSlides - 1)}%)`;
        index = totalSlides - 1;
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            index--;
            updateSlide();
          });
        });
      } else {
        index--;
        updateSlide();
      }
    }

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    dots.forEach((dot, dotIndex) => {
      dot.addEventListener('click', () => {
        index = dotIndex;
        updateSlide();
      });
    });

    // Name Popup Functionality
    nameButton.addEventListener('click', () => {
      namePopup.style.display = 'block';
      overlay.style.display = 'block';
    });

    overlay.addEventListener('click', () => {
      namePopup.style.display = 'none';
      overlay.style.display = 'none';
    });

    submitName.addEventListener('click', () => {
      const name = nameInput.value;
      if (name) {
        firstSlide.textContent = `Hi there, ${name}` + "!";
        namePopup.style.display = 'none';
        overlay.style.display = 'none';
      }
    });

    // Initialize the slideshow
    updateSlide();

    // Multi-slideshow functionality
  // Multi-slideshow functionality using native scroll
  const multiSlides = document.querySelectorAll('.multi-slide');
  const multiPrevButton = document.querySelector('.multi-arrow-left');
  const multiNextButton = document.querySelector('.multi-arrow-right');
  const multiContainer = document.querySelector('.multi-slideshow-container');
  let multiIndex = 0; // New index to keep track of the current slide
  const totalMultiSlides = multiSlides.length;

  // Function to update the slide view for multi-slideshow
  function updateMultiSlide() {
    multiSlides[multiIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }

  // Event listener for next button
  multiNextButton.addEventListener('click', () => {
    if (multiIndex < totalMultiSlides - 1) {
      multiIndex++;
    } else {
      multiIndex = 0; // Loop back to the first slide
    }
    updateMultiSlide();
  });

  // Event listener for previous button
  multiPrevButton.addEventListener('click', () => {
    if (multiIndex > 0) {
      multiIndex--;
    } else {
      multiIndex = totalMultiSlides - 1; // Loop back to the last slide
    }
    updateMultiSlide();
  });
