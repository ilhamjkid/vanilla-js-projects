# 🗓️ 13. Dynamic Random Image Gallery

An asynchronous image gallery that fetches and renders content dynamically from an external API. This project focuses on high-performance DOM manipulation, memory management, and optimized asset loading to meet professional industry standards.

## 🚀 Key Technical Highlights

- **Optimized Batch Injection:** Utilized `document.createDocumentFragment()` to minimize browser reflows and repaints. By batching DOM updates, the application maintains high performance even when injecting multiple high-resolution elements simultaneously.
- **Stateless UI Synchronization:** Developed a decoupled `validateLoadingState` function to manage UI transitions and counter resets. This approach follows functional programming principles, ensuring the logic is reusable and independent of specific DOM structures.
- **Robust Asset Error Handling:** Integrated `onerror` event listeners to ensure the "Load More" functionality remains responsive. This prevents the UI from "freezing" in a loading state if external API assets fail to resolve.
- **Cache-Bust Indexing:** Engineered a unique ID generation system using a combination of `Date.now()` and iterative offsets. This bypasses aggressive browser caching, ensuring a fresh set of randomized content from the Picsum API on every request.
- **Performance-First Rendering:** Integrated native `loading="lazy"` attributes and CSS-driven `opacity` transitions. This optimizes viewport rendering and ensures a polished visual experience where images fade in gracefully once fully buffered.
- **BEM-Architected Grid:** Followed the Block-Element-Modifier naming convention to maintain a scalable and readable stylesheet. The mobile-first CSS Grid layout adapts fluidly from a single-column stack to a multi-column gallery across different breakpoints.

---

[← Back to Project List](https://github.com/ilhamjkid/vanilla-js-projects)
