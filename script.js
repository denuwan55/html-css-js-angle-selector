const angleInput = document.getElementById('angleInput');
const angleSlider = document.getElementById('angleSlider');
const radioButtons = document.querySelectorAll('input[name="commonValues"]');

// Sync the slider, textbox, and radio buttons
function updateAngle(angle) {
  // Keep the angle between 0 and 360
  angle = (angle + 360) % 360;
  angleInput.value = angle;
  angleSlider.value = angle;
  radioButtons.forEach(rb => {
    rb.checked = rb.value == angle;
  });
}

// Textbox change
angleInput.addEventListener('input', (e) => {
  updateAngle(Number(e.target.value));
});

// Slider change
angleSlider.addEventListener('input', (e) => {
  updateAngle(Number(e.target.value));
});

// Radio button change
radioButtons.forEach(rb => {
  rb.addEventListener('change', (e) => {
    if (e.target.checked) {
      updateAngle(Number(e.target.value));
    }
  });
});
