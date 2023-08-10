const csButtons = document.querySelectorAll('#comingSoonHover');

csButtons.forEach((csButton) => {
  csButton.addEventListener('mouseover', () => {
    csButton.innerHTML = ' Coming soon ';
  });
  
  csButton.addEventListener('mouseout', () => {
    csButton.innerHTML = ' Log in ';
  });
});
