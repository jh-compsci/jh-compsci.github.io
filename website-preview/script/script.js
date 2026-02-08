// insert menu bar

document.addEventListener('DOMContentLoaded', function() {
    const menuHTML = `
		<nav class="menu-bar">
			<ul>
				<!--
				<div class="logo">
					<img src="..\images\logo.png" alt="Logo">
				</div>  -->
				
				<div class = "logo-text desktop-only">
					OptBeacon Consultancy
				</div>
			</ul>
			<ul class="nav-links">
				<li><a href="index.html">Home</a></li>
				<li class = "has-submenu">
					<span>Discover</span>
					<ul class="submenu">
						<li><a href="about_us.html">About Us</a></li>						
						<li><a href="about_mi.html">Multiple Intelligence</a></li>						
					</ul>				
				</li><!--
				<li><a href="assesment.html">Assesment</a></li>-->
				<li><a href="partners.html">Partners</a></li>
				<li><a href="education.html">Education</a></li>
				<li><a href="faq.html">FAQ</a></li>
				<li><a href="contact.html">Contact</a></li>
				
				<li class = "mobile-only language-bar">
					<a href="../zh-hk/index.html" >繁</a>
					<a href="../zh-cn/index.html" >简</a>
					<a href="../en/index.html"    >EN</a>
				</li>
				
			</ul><!--
			<ul>
				<li class = "desktop-only"><a href="../zh-hk/index.html">繁</a></li>
				<li class = "desktop-only"><a href="../zh-cn/index.html">简</a></li>
				<li class = "desktop-only"><a href="../en/index.html">EN</a></li>
			</ul>-->
			
			<!-- toggle button for mobile -->
			<div class="menu-toggle mobile-only" id="menu-toggle">☰</div>
		</nav>			
    `;
    
    // Insert the menu into an element with id="menu-container"
    const container = document.getElementById('menu-container');
    if (container) {
        container.innerHTML = menuHTML;
    }
});

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
