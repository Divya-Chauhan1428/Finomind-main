// ── Cards flow up into place as you scroll ──
// Make sure GSAP + ScrollTrigger CDN scripts are loaded BEFORE this file:
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>

gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".card-outer").forEach((card) => {
  gsap.from(card, {
    y: 80,
    opacity: 0,
    duration: 0.9,
    ease: "power3.out",
    scrollTrigger: {
      trigger: card,
      start: "top 85%",   // animation starts when card's top hits 85% of viewport height
      toggleActions: "play none none none", // plays once, doesn't reverse on scroll up
      // markers: true,   // uncomment to debug trigger points visually
    }
  });
});