// Sidebar elements //
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon')

menu.addEventListener("click", function(){
    sideBar.classList.remove("close-sidebar")
    sideBar.classList.add("open-sidebar")
});

closeIcon.addEventListener("click", function(){
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");
    
})



//slider- about//
 
$('.fade').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 2000

});





//slider- works//
$('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});





//slider- works//
$(document).ready(function(){
  $('.one-time').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: true
  });
});



//personal works play video//
const videoContainers = document.querySelectorAll(".video-container");

videoContainers.forEach(container => {
  const video = container.querySelector("video");
  const hoverText = container.querySelector(".hover-text");

  video.addEventListener("mouseenter", () => {
    video.play();
    hoverText.classList.remove("active");
  });

  video.addEventListener("mouseleave", () => {
    video.pause();
    hoverText.classList.add("active");
  });
});


//personal works slick center//

$(document).ready(function(){
    $('.center').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        arrows: true,
        dots: true,
        responsive: [
            {
                breakpoint: 1440, // screens smaller than 1440px
                settings: {
                    slidesToShow: 3,
                    centerMode: true,
                    centerPadding: '60px'
                }
            },
           {
                breakpoint: 1200, // below 1200px
                settings: {
                    slidesToShow: 3,
                    centerMode: true,
                    centerPadding: '60px'
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
});



//page 2 vector icons autoplay//

$('.gif').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 768, // tablets & small devices
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        centerPadding: '40px'
      }
    },
    {
      breakpoint: 480, // iPhone size
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        centerPadding: '20px'
      }
    }
  ]
});


//smooth transition back//
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("a");

  links.forEach((link) => {
    const href = link.getAttribute("href");
    // only apply to internal pages, skip anchors and external links
    if (href && !href.startsWith("#") && !href.startsWith("http")) {
      link.addEventListener("click", function (e) {
        e.preventDefault(); // stop instant navigation
        document.body.classList.add("fade-out"); // add fade effect
        setTimeout(() => {
          window.location.href = href; // navigate after fade
        }, 500); // match transition duration
      });
    }
  });
});




  //title portfolio//
 document.addEventListener('DOMContentLoaded', function(event){
  if (!window.location.pathname.includes("index.html")) return; // exit on other pages

  var dataText = ["Creative", "Portfolio", "Visual", "Designs"];

  function typeWriter(text, i, fnCallback) {
    if (i < text.length) {
      document.querySelector("h1").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    } else if (typeof fnCallback === 'function') {
      setTimeout(fnCallback, 700);
    }
  }

  function StartTextAnimation(i) {
    if (i >= dataText.length) {
      i = 0; // loop back to the first text
    }
    typeWriter(dataText[i], 0, function() {
      StartTextAnimation(i + 1);
    });
  }

  StartTextAnimation(0);
});



//change navbar color about.html//
document.addEventListener('DOMContentLoaded', function() {
  // Get the navbar element
  const navbar = document.querySelector('header');

  // Check if the current page is about.html
  if (window.location.pathname.includes('about.html')) {
    // Change the background color
    navbar.style.backgroundColor = 'rgba(235, 235, 235, 0.37)'; 
  }
});
