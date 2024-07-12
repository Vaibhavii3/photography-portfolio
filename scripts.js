// scripts.js
document.addEventListener("DOMContentLoaded", () => {
    gsap.from(".photo", {
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: 0.2,
        ease: "power2.out"
    });
});

const photos = document.querySelectorAll(".photo");

photos.forEach(photo => {
    photo.addEventListener("mouseenter", () => {
        gsap.to(photo, {
            duration: 0.5,
            scale: 0.9,
            ease: "power2.out"
        });
    });

    photo.addEventListener("mouseleave", () => {
        gsap.to(photo, {
            duration: 0.5,
            scale: 1,
            ease: "power2.out"
        });
    });
});
