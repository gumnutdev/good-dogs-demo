// Client-side JavaScript entry point
console.log("Client-side JavaScript loaded");

// Update slider background based on value
const slider = document.querySelector('input[type="range"]');
const updateSliderBackground = (value) => {
  const percentage = ((value - slider.min) / (slider.max - slider.min)) * 100;
  slider.style.background = `linear-gradient(to right, var(--primary-color) 0%, var(--primary-color) ${percentage}%, var(--border-color) ${percentage}%, var(--border-color) 100%)`;
};

// Set initial background
updateSliderBackground(slider.value);

// Update background on input
slider.addEventListener("input", (e) => {
  updateSliderBackground(e.target.value);
});
