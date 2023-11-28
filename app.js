// function cursorAnimation() {

//   document.addEventListener("mousemove", function (dets) {
//     gsap.to("#cursor", {
//       left: dets.x,
//       top: dets.y,
//     });
//   });

// }

// cursorAnimation();

let navlogo = document.querySelector(".nav-logo")

console.log(navlogo)
function loadingAnimation() {
  gsap.to(navlogo, {
    opacity: 0,
    duration : .1,
    scrollTrigger: {
      trigger: navlogo,
      scroller : 'body',
      start: "top 0%", 
    }
  })
};

loadingAnimation();


function textReveelAnimation() {
  const elements = document.querySelectorAll("#main .heading");

  // Loop through each element and define GSAP animations with ScrollTrigger
  elements.forEach((element, index) => {
    gsap.to(element, {
      y: "0%", // Adjust the animation properties as needed
      duration: 1.2,
      scrollTrigger: {
        trigger: element,
        start: "top 96%", // Adjust the start position as needed
        end: "top 16%", // Adjust the end position as needed
        toggleActions: "play reverse play reverse", // Controls the direction of the animation
      }
    });
  });
};

textReveelAnimation();