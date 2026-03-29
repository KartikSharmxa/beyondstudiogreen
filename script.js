console.log("JS loaded");



const cards = document.querySelectorAll(".video-card");
console.log("JS loaded");
cards.forEach(card => {
  const video = card.querySelector("video");
  const btn = card.querySelector(".sound-btn");

  // Autoplay when loaded
  video.play();

  btn.addEventListener("click", () => {
    video.muted = !video.muted;
    btn.textContent = video.muted ? "🔊 Enable sound" : "🔇 Mute";
  });
});

const launchVideo = document.querySelector(".launch-video");
const soundToggle = document.querySelector(".launch-sound-toggle");

soundToggle.addEventListener("click", () => {
  launchVideo.muted = !launchVideo.muted;
  soundToggle.textContent = launchVideo.muted
    ? "🔊 Enable sound"
    : "🔇 Mute";
});


console.log("JS loaded");

// Optional JS (future-ready)
document.querySelectorAll('.card-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Let’s get started 🚀');
  });
});


document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});




document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const targetId = link.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (!target) return;

    const offset = 80; // navbar height
    const top =
      target.getBoundingClientRect().top +
      window.pageYOffset -
      offset;

    window.scrollTo({
      top,
      behavior: 'smooth'
    });
  });
});













const cta = document.querySelector('.nav-cta');

window.addEventListener('scroll', () => {
  const triggerPoint = window.innerHeight * 3;

  if (window.scrollY > triggerPoint) {
    cta.classList.add('show');
  } else {
    cta.classList.remove('show');
  }
});










// We use Intersection Observer to detect when elements enter the screen
        const observerOptions = {
            root: null, // viewport
            rootMargin: '0px',
            threshold: 0.2 // Trigger when 20% of the item is visible
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add the class that triggers the CSS transition
                    entry.target.classList.add('visible');
                    
                    // Optional: Stop observing once it has animated in
                    // observer.unobserve(entry.target); 
                }
            });
        }, observerOptions);

        // Select all elements with class 'step' and start observing them
        const steps = document.querySelectorAll('.step');
        steps.forEach(step => {
            observer.observe(step);
        });





let resizeTimeout;
const starsLayer = document.getElementById("stars-layer");

document.addEventListener("DOMContentLoaded", function () {
  placeRandomStars();
  window.addEventListener("resize", onWindowResize);
});

function onWindowResize() {
  fadeOutAndAdjustStarPositions();
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(function () {
    removeExistingStars();
    placeRandomStars();
  }, 1000);
}

function placeRandomStars() {
  const pixelDensity = 5000;

  const width = starsLayer.clientWidth;
  const height = starsLayer.clientHeight;
  const totalPixels = width * height;
  const numberOfStars = Math.floor(totalPixels / pixelDensity);

  for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement("div");
    star.classList.add("star");

    const x = Math.random() * width;
    const y = Math.random() * height;

    star.dataset.percentX = x / width;
    star.dataset.percentY = y / height;

    star.style.left = `${x}px`;
    star.style.top = `${y}px`;

    const pulseDuration = 4 + Math.random() * 8;
    star.style.animation = `pulse ${pulseDuration}s infinite`;

    starsLayer.appendChild(star);

    void star.offsetWidth;
    setTimeout(() => (star.style.opacity = "1"), 10);
  }
}

function fadeOutAndAdjustStarPositions() {
  const width = starsLayer.clientWidth;
  const height = starsLayer.clientHeight;

  document.querySelectorAll(".star").forEach((star) => {
    star.style.opacity = "0";
    star.style.left = `${star.dataset.percentX * width}px`;
    star.style.top = `${star.dataset.percentY * height}px`;
  });
}

function removeExistingStars() {
  document.querySelectorAll(".star").forEach((star) => {
    starsLayer.removeChild(star);
  });
}
















// navbar

  // const menu = document.querySelector('#mobile-menu');
  // const navLinks = document.querySelector('.nav-links');

  // menu.addEventListener('click', () => {
  //   // These toggle the "active" classes defined in CSS
  //   menu.classList.toggle('is-active');
  //   navLinks.classList.toggle('active');
  // });


 
 

  const menuBtn = document.querySelector('#mobile-menu');
  const navList = document.querySelector('.nav-links');

  menuBtn.addEventListener('click', () => {
    // This toggles the 'active' and 'is-active' classes in the CSS
    menuBtn.classList.toggle('is-active');
    navList.classList.toggle('active');
  });

  // Close menu when a link is clicked
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      menuBtn.classList.remove('is-active');
      navList.classList.remove('active');
    });
  });









document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.swiper-container');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');

    // Next Button Functionality
    nextBtn.addEventListener('click', () => {
        const slideWidth = container.clientWidth;
        container.scrollBy({
            left: slideWidth,
            behavior: 'smooth'
        });
    });

    // Previous Button Functionality
    prevBtn.addEventListener('click', () => {
        const slideWidth = container.clientWidth;
        container.scrollBy({
            left: -slideWidth,
            behavior: 'smooth'
        });
    });

    // Optional: Auto-pause videos when scrolling (User experience ke liye)
    container.addEventListener('scroll', () => {
        const videos = document.querySelectorAll('.launch-video');
        videos.forEach(video => {
            // Agar video poori tarah screen par nahi hai toh pause kar de
            const rect = video.getBoundingClientRect();
            if (rect.left < 0 || rect.right > window.innerWidth) {
                video.pause();
            }
        });
    });
});










document.addEventListener("DOMContentLoaded", function() {
    const slider = document.getElementById('videoSlider');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');
   console.log('im clicking sir')
    if (!slider) {
        console.log("Slider nahi mila!");
        return;
    }

    const slide = slider.querySelector('.swiper-slide');
    const slideWidth = slide.offsetWidth + 20;

    nextBtn.addEventListener('click', () => {
        slider.scrollBy({ left: slideWidth, behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
        slider.scrollBy({ left: -slideWidth, behavior: 'smooth' });
    });
});


console.log("JS loaded");