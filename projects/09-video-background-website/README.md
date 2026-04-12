# 🎬 09. Video Background Website

A modern hero section featuring a full-screen, responsive video background with custom playback controls. This project focuses on seamless media integration, stacking context management, and event-driven UI updates.

## 🚀 Key Technical Highlights

- **Seamless Aspect Ratio Handling:** Leveraged `object-fit: cover` to ensure the background video fills the entire viewport without distortion, providing a consistent experience across both portrait (mobile) and landscape (desktop) orientations.
- **Stacking Context & Layering:** Implemented a multi-layer architecture using `z-index` and `position: absolute`. This includes a video base layer, a semi-transparent overlay for text contrast, and a top-level interactive content layer.
- **Event-Driven UI Logic:** Instead of tying UI changes directly to click events, this project uses the HTML5 Media API's `play` and `pause` event listeners. This ensures the play/pause icons are always perfectly synchronized with the actual state of the video.
- **Visual Contrast Optimization:** Integrated a dedicated `.hero__overlay` using `rgba` values. This prevents white text from "washing out" against bright scenes in the video, maintaining high accessibility and readability.
- **Modular Function Architecture:** Refactored UI update logic into an agnostic `updateIcon` function. This design pattern allows for easy scalability, such as adding Mute/Unmute or Volume controls without duplicating code.
- **Performance-Conscious Loading:** Utilized the `poster` attribute to display a static image while the video file is downloading, preventing the "black screen" glitch during initial page load.

---

[← Back to Project List](https://github.com/ilhamjkid/vanilla-js-projects)
