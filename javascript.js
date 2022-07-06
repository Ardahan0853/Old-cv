

$(document).ready(
    () => {
        gsap.from("#arda1", {duration:1.5 ,x:"-100vw", opacity:0 })
        gsap.from(".navbar-dark", {duration:1.5 ,delay:1.5, y: "-200px", opacity:0})
        gsap.from(".page-header",{duration:1, delay:3, x:"-200px",opacity:0} )
        gsap.from(".image",{duration:1, delay:3, x:"200px",opacity:0} )
    }
)
gsap.registerPlugin(ScrollTrigger);
gsap.from(".image-div-2",{
    scrollTrigger:".image-div-2",
    x:-200,
    duration:1,
    opacity:0
})
gsap.from(".m-5",{
    scrollTrigger:".m-5",
    x:200,
    duration:1,
    opacity:0
})



gsap.from(".face-front",{
scrollTrigger: ".face-front",
x: -200,
duration:1,
opacity:0
});
gsap.from(".face-front2",{
scrollTrigger: ".face-front2",
y: -200,
duration:1,
opacity:0
});
gsap.from(".face-front3",{
scrollTrigger: ".face-front3",
x: 200,
duration:1,
opacity:0
});