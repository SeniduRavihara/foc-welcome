// Select all paragraphs with the class 'popup'
const popups = document.querySelectorAll('.popup');

// Create Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add 'show' class to trigger animation
      entry.target.classList.add('show');
    } else {
      // Remove 'show' class when out of view (to reset the animation)
      entry.target.classList.remove('show');
    }
  });
});

// Observe all popup paragraphs
popups.forEach((popup) => observer.observe(popup));
