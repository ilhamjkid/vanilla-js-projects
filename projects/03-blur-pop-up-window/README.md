# 🌫️ 03. Blur Pop-Up Window

A modern, responsive, and immersive subscription interface. This project focuses on DOM manipulation, CSS filter layers, and synchronized visual states.

## 🚀 Key Technical Highlights

- **Dynamic Context Blurring:** Implemented a dual-layer blurring strategy using `filter` on the main container and `backdrop-filter` on the overlay for a high-end "frosted glass" aesthetic.
- **Visual Depth Engineering:** Leveraged hardware-accelerated `scale` transformations to solve the "Blur Bleeding" edge artifact, creating a seamless 3D depth effect during transitions.
- **Predictive State Management:** Utilized explicit `.add()` and `.remove()` class methods over toggling to ensure UI state remains predictable and resilient against manual DOM manipulation.
- **Event Delegation & Propagation:** Integrated smart overlay detection using `event.target` comparison to allow users to close the interface by clicking outside the modal area.
- **Accessibility Integration:** Engineered a global `keydown` listener with guard clauses to handle the `Escape` key, ensuring a fluid experience for keyboard-only navigation.
- **BEM & Scalable CSS:** Managed via CSS Variables and the BEM (Block Element Modifier) naming convention to ensure a highly structured and consistent design language across all UI components.

---

[← Back to Project List](https://github.com/ilhamjkid/vanilla-js-projects)
