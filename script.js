document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Thanks for reaching out!");
    this.reset();
  });
function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('active');
}
  