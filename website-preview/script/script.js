// Toggle menu on click
document.getElementById('menu-toggle').addEventListener('click', function() {
	document.querySelector('.nav-links').classList.toggle('active');
});

// Submenu for mobile
document.querySelectorAll('.has-submenu').forEach(item => {
  item.addEventListener('click', function(e) {
    // Only apply mobile behavior
    if (window.innerWidth <= 768) {
      // Check if the clicked element is a submenu link (<a>)
      const targetLink = e.target.closest('a');

      if (targetLink) {
        // Let the link open normally, don't toggle
        return;
      }

      // Toggle the class since it's not a link
      e.preventDefault();
      this.classList.toggle('toggled');
    }
  });
});
