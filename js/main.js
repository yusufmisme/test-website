// Set current year in footer
document.getElementById("currentYear").textContent = new Date().getFullYear()

// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle")
const mobileNav = document.getElementById("mobileNav")

if (menuToggle && mobileNav) {
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active")
    mobileNav.classList.toggle("active")

    // Prevent scrolling when menu is open
    document.body.style.overflow = mobileNav.classList.contains("active") ? "hidden" : ""
  })

  // Close menu when clicking outside
  document.addEventListener("click", (event) => {
    if (!menuToggle.contains(event.target) && !mobileNav.contains(event.target)) {
      menuToggle.classList.remove("active")
      mobileNav.classList.remove("active")
      document.body.style.overflow = ""
    }
  })

  // Close menu when clicking on a link
  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("active")
      mobileNav.classList.remove("active")
      document.body.style.overflow = ""
    })
  })
}

// Contact form functionality
const contactForm = document.getElementById("contactForm")
const formSuccess = document.getElementById("formSuccess")
const sendAnother = document.getElementById("sendAnother")

if (contactForm && formSuccess) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Show loading state on button
    const submitBtn = contactForm.querySelector('button[type="submit"]')
    const originalContent = submitBtn.innerHTML
    submitBtn.innerHTML = `
      <svg class="spinner" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <circle class="path" cx="12" cy="12" r="10" fill="none" stroke-width="4"></circle>
      </svg>
      Sending...
    `
    submitBtn.disabled = true

    // Simulate form submission (replace with actual form submission)
    setTimeout(() => {
      contactForm.reset()
      contactForm.style.display = "none"
      formSuccess.classList.add("active")
      submitBtn.innerHTML = originalContent
      submitBtn.disabled = false
    }, 1500)
  })

  if (sendAnother) {
    sendAnother.addEventListener("click", () => {
      formSuccess.classList.remove("active")
      contactForm.style.display = "grid"
    })
  }
}

// Add this CSS for the spinner
const style = document.createElement("style")
style.textContent = `
  .spinner {
    animation: rotate 2s linear infinite;
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }
  
  .path {
    stroke: white;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }
  
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`
document.head.appendChild(style)

// Create placeholder images
const placeholders = document.querySelectorAll('img[src="images/placeholder.svg"]')
placeholders.forEach((img) => {
  const width = img.width || 800
  const height = img.height || 600
  img.src = `https://via.placeholder.com/${width}x${height}/121212/FFFFFF?text=Robotics+Team`
})

window.addEventListener('scroll', function() {
  const heroImage = document.getElementById('parallax-hero'); 
  const heroContent = document.getElementById('parallax-hero-content'); 
  const scrollPosition = window.pageYOffset;
  const minAlpha = 0.1;
  const maxAlpha = 0.8;
  const scrollRange = 600;


  // Adjust the multiplier to control the parallax speed (smaller = slower)
  heroImage.style.transform = 'translateY(' + -scrollPosition * -0.5 + 'px)';
  heroContent.style.transform = 'translateY(' + -scrollPosition * -0.76 + 'px)';


  
  // Adjust overlay darkness (opacity)
  // Clamp scroll-based opacity between 0.3 and 0.8
  let newAlpha = minAlpha + Math.min(scrollPosition / scrollRange, 1) * (maxAlpha - minAlpha);
  document.documentElement.style.setProperty('--overlay-alpha', newAlpha.toFixed(2));

});
