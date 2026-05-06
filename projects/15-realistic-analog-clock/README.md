# 🕰️ 15. Realistic Analog Clock

A high-fidelity analog clock application engineered with mathematical precision and high-performance rendering techniques. This project focuses on the intersection of trigonometry and modern CSS/JS synchronization to create a seamless "Continuous Sweep" movement.

## 🚀 Key Technical Highlights

- **Trigonometric Number Mapping:** Leveraged Sine and Cosine functions to dynamically calculate the $(x, y)$ coordinates of clock numbers. This ensures perfect circular alignment regardless of the clock's radius or responsiveness, managed via a calculated `DocumentFragment` for optimal DOM insertion.
- **Continuous Sweep Engine:** Implemented a high-frequency update logic using `requestAnimationFrame` to achieve a "luxury watch" movement. By calculating rotation down to the millisecond ($6^\circ / 1000\text{ms}$), the second hand glides smoothly rather than ticking rigidly.
- **Precision Pivot Architecture:** Solved the "center-drift" issue by synchronizing `transform-origin: 50% 85%` with a `translate(-50%, 15%)` offset. This complex alignment allows the clock hands to have a realistic "tail" while keeping the rotation axis perfectly locked at the absolute center.
- **Scoped CSS Variable Control:** Utilized CSS Variables (`--rotation`) within a BEM-structured stylesheet to prevent property overwriting. This allows JavaScript to update only the rotation degrees without interfering with the existing `translate` and `scale` values defined in CSS.
- **Performance-First Rendering:** Replaced standard `setInterval` logic with a `tick()` function synchronized to the browser's refresh rate. This approach reduces CPU overhead and preserves battery life by automatically pausing the calculation when the tab is inactive.
- **Adaptive Responsive Scaling:** Engineered a mobile-first UI using CSS Media Queries and fluid unit calculations. The clock face, hand thickness, and font sizes scale proportionally across mobile, tablet, and desktop viewports while maintaining layout stability.

---

[← Back to Project List](https://github.com/ilhamjkid/vanilla-js-projects)
