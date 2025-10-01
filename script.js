// Initialize GLightbox
const lightbox = GLightbox({
  selector: '.gallery-item',
  loop: true,
  zoomable: true,
  touchNavigation: true,
  keyboardNavigation: true,
  slideSelector: 'a.gallery-item',
  effect: 'fade', // Smooth fade transition between images
  draggable: true, // Allow mouse drag navigation
  closeButton: true,
  moreText: 'See more',
  svg: {
    next: '<svg width="32" height="32" viewBox="0 0 32 32"><path d="M12 8l8 8-8 8" stroke="#fff" stroke-width="2" fill="none"/></svg>',
    prev: '<svg width="32" height="32" viewBox="0 0 32 32"><path d="M20 8l-8 8 8 8" stroke="#fff" stroke-width="2" fill="none"/></svg>'
  }
});

// Initialize AOS animations with refined defaults for a smoother entrance
AOS.init({
  duration: 1200, /* Slightly longer duration for a smoother, more deliberate fade-up */
  easing: 'ease-out-quad', /* A common and smooth easing function */
  once: true,
});