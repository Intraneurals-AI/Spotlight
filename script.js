window.addEventListener('mousemove', (e) => {
  // Update CSS Variables
  document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
  document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);
});

// Optional: Add "click to toggle" flashlight state
let lightOn = true;
window.addEventListener('click', () => {
  lightOn = !lightOn;
  document.querySelector('.revealed-content').style.display = lightOn ? 'block' : 'none';
});
