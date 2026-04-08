# 🌊 07. Scrolling Background Effect

A clean and high-performance hero section feature that creates a dynamic "Zoom-In" background effect tied to the user's scroll progress. This project focuses on professional-grade synchronization between viewport events and DOM transformations.

## 🚀 Key Technical Highlights

- **Precise Value Clamping:** Implemented a "Double Locking" mechanism using `Math.min` and `Math.max`. This ensures the scroll progress stays strictly between 0 and 1, preventing visual glitches even during "over-scrolling" or "bounce" effects on mobile/macOS browsers.
- **Performance Optimization with rAF:** Leveraged `requestAnimationFrame` to throttle visual updates. This ensures the background only scales when the monitor is ready for a new frame, significantly reducing CPU usage compared to raw scroll listeners.
- **Hardware-Accelerated Transitions:** Utilized the `transform` property to trigger GPU compositing, ensuring smooth 60fps animations without causing expensive layout re-calculations.
- **State Persistence on Refresh:** Used the `DOMContentLoaded` event to calculate the correct initial scale immediately upon page load, providing a seamless experience even when starting from a pre-scrolled position.
- **Optimized Variable Scoping:** Constants are declared outside the main loop to prevent unnecessary memory allocation during high-frequency scroll events.
- **GPU Hinting:** Integrated `will-change: transform` in CSS to pre-optimize the browser's rendering pipeline for the background element.

---

[← Back to Project List](https://github.com/ilhamjkid/vanilla-js-projects)
