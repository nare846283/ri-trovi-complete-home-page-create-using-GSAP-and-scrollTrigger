gsap.registerPlugin(ScrollTrigger);

function revealToSpan() {
    document.querySelectorAll(".reveal")
    .forEach(function (elem) {
        // create two spans
        let spanParent = document.createElement("span");
        let spanChild = document.createElement("span");

        // parent and child both sets their respective classes
        spanParent.classList.add("parent");
        spanChild.classList.add("child");


        // span parent gets child and child gets elem details
        spanChild.innerHTML = elem.innerHTML;
        spanParent.appendChild(spanChild);

        // elem replaces is value with parent
        elem.innerHTML = "";
        elem.appendChild(spanParent);
    })
}

function valueSetters(){
    
    gsap.set("#text-container .parent .child", { y: "0%" })
    gsap.set("#second-sec .parent .child", { y: "0%" })


}

function animateHomepage(){
    
    let tl = gsap.timeline();

    tl
    .from("#text-container .parent .child", {
        y: "100%",
        duration: 1,
        ease: Power3
    })
    .to(".nav-logo", {
        display: "none",
        duration: 1,
        ease: Power3,
        scrollTrigger:{
            trigger:"#text-container",
            scroller:"body",
            markers:true,
            start: "top 30%"
            
        }

    })
    .from("#second-sec .parent .child", {
        y: "100%",
        duration: 5,
        ease: Power3,
        scrollTrigger:{
            trigger:"#second-sec .parent .child",
            scroller:"body",
            markers:true,
            start: "top 90%"
            
        }

    })
   
}


revealToSpan();
valueSetters();
animateHomepage();
