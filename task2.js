const layers = [
  { selector: ".stars-back", speed: 0.08 },
  { selector: ".stars-mid", speed: 0.16 },
  { selector: ".stars-front", speed: 0.28 },
  { selector: ".nebula-one", speed: 0.18 },
  { selector: ".nebula-two", speed: 0.12 },
  { selector: ".planet-large", speed: 0.22 },
  { selector: ".planet-small", speed: 0.38 },
  { selector: ".moon", speed: 0.30 },
  { selector: ".planet-ringed", speed: 0.18 },
  { selector: ".asteroid-one", speed: 0.42 },
  { selector: ".asteroid-two", speed: 0.55 },
  { selector: ".orbit-one", speed: 0.10 },
  { selector: ".orbit-two", speed: 0.14 },
  { selector: ".star-one", speed: 0.35 },
  { selector: ".star-two", speed: 0.48 },
  { selector: ".deep-stars", speed: 0.08 },
  { selector: ".planet-purple", speed: 0.20 }
];

const elements = layers.map(layer => ({
  element: document.querySelector(layer.selector),
  speed: layer.speed
})).filter(item => item.element);

let latestScroll = 0;
let ticking = false;

function updateParallax() {
  elements.forEach(({ element, speed }) => {
    const section = element.closest("section");
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const offset = -rect.top * speed;

    element.style.transform = `translate3d(0, ${offset}px, 0)`;
  });

  ticking = false;
}

function requestParallaxUpdate() {
  latestScroll = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(updateParallax);
    ticking = true;
  }
}

window.addEventListener("scroll", requestParallaxUpdate, { passive: true });
window.addEventListener("resize", requestParallaxUpdate);
window.addEventListener("load", requestParallaxUpdate);
