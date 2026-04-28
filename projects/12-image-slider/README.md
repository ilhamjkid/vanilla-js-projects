# 🗓️ 12. Image Slider

A high-performance image carousel featuring dynamic coordinate calculation and state-synchronized transitions. This project demonstrates advanced mastery of the CSS Object Model (CSSOM) and robust event handling to ensure a seamless experience across all screen sizes.

## 🚀 Key Technical Highlights

- **Dynamic Viewport Synchronization:** Implemented a real-time width detection system using `.clientWidth` that automatically recalibrates slide positions during window `resize` events. This ensures the slider remains perfectly centered regardless of device orientation or screen scaling.
- **Atomic Transition Locking:** Developed a sophisticated `transitionRun` state-gate that prevents "animation overlapping" and UI flickering. By leveraging the `transitionend` event, the engine guarantees that no new motion commands are processed until the current animation cycle is fully completed.
- **Mathematical Modulo Rotation:** Utilized a robust circular indexing formula `(activeSlide + step + limit) % limit` to manage slide navigation. This approach provides a fail-safe way to loop infinitely through image arrays without encountering negative index errors or complex conditional branching.
- **Hardware-Accelerated Motion:** Optimized rendering performance by using `transform: translateX()` instead of layout-heavy properties like `left` or `margin`. This shifts the animation workload to the GPU, ensuring smooth 60FPS transitions even on lower-end mobile devices.
- **BEM-Architected Interface:** Followed the Block-Element-Modifier CSS naming convention to create a highly readable and maintainable stylesheet. The separation between the "Viewport" (`container`), the "Rail" (`wrapper`), and the "Carriages" (`items`) provides a clear mental model of the layout’s physical movement.
- **Context-Aware Transition Management:** Built a flexible navigation bridge (`handleSlideChange`) that can toggle CSS transitions on or off dynamically. This is crucial for "invisible" updates during window resizing, where the slider must reposition itself instantly without showing a sliding animation.

---

[← Back to Project List](https://github.com/ilhamjkid/vanilla-js-projects)
