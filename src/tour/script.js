// Loading screen management
const showLoader = () => {
  document.getElementById('loader').style.display = 'flex';
};

const hideLoader = () => {
  document.getElementById('loader').style.display = 'none';
};

// VR capability detection
const detectVRSupport = () => {
  if (navigator.getVRDisplays || navigator.xr) {
    console.log('VR supported');
  } else {
    console.log('VR not supported - using fallback controls');
  }
};

// Performance monitoring
const trackPerformance = () => {
  const scene = document.querySelector('a-scene');
  scene.addEventListener('loaded', () => {
    console.log('Scene loaded successfully');
    hideLoader();
  });
};

// Initialize optimizations
document.addEventListener('DOMContentLoaded', () => {
  showLoader();
  detectVRSupport();
  trackPerformance();
});

// Fixed cursor listener component
AFRAME.registerComponent('cursor-listener', {
  init: function() {
    let last_index = -1;
    let COLORS = ["red", "blue", "green", "yellow"];

    this.el.addEventListener('click', function(event) {
      last_index = (last_index + 1) % COLORS.length; // Fixed: length
      event.target.setAttribute('color', COLORS[last_index]);
      console.log("Clicked at: ", event.detail.intersection.point);
    });
  }
});

// Apply to clickable elements
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.clickable').forEach(function(item) {
    item.setAttribute('cursor-listener', '');
  });
});
