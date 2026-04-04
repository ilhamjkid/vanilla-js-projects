# 🌊 05. Button Ripple Effect

A sleek, modern, and interactive button component that generates localized ripple animations based on the exact user click coordinates. This project focuses on dynamic DOM manipulation, math-based position mapping, and seamless CSS transitions.

## 🚀 Key Technical Highlights

- **Viewport-Relative Coordinate Mapping:** Leveraged `e.clientX/Y` combined with `.getBoundingClientRect()` to calculate precise pointer coordinates relative to the button container.
- **Dynamic DOM Element Injection:** Engineered on-demand creation of `span` elements via `document.createElement()` to produce isolated ripple effects for every click.
- **Self-Terminating Cleanup Logic:** Implemented a predictive garbage-collection routine using `setTimeout` and the `.remove()` method to prevent DOM element stacking and memory leaks.
- **Modern CSS Property Isolation:** Utilized the latest standalone CSS `scale` and `translate` properties for smoother GPU-accelerated keyframe animations.
- **Interactive Multi-State Feedback:** Allowed concurrent animations by not capping the click events, enabling a rich, layered visual response on rapid user interactions.
- **BEM & Scalable CSS:** Enforced the Block Element Modifier convention and centralized theming via CSS Variables to ensure clean, maintainable, and isolated component styles.

---

[← Back to Project List](https://github.com/ilhamjkid/vanilla-js-projects)
