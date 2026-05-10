# 👊 16. Rock Paper Scissors Game

A robust, state-driven implementation of the classic game, engineered with a focus on architectural scalability, asynchronous control flow, and data integrity. This project marks a transition from basic DOM manipulation to advanced software design patterns.

## 🚀 Key Technical Highlights

- **ES Module Encapsulation:** Leveraged `type="module"` to create a private execution scope. This prevents global variable pollution and protects internal game states (like scores and logic) from external manipulation via the browser console, ensuring a secure and predictable runtime.
- **Asynchronous Shuffle Engine:** Implemented a sophisticated choice-selection animation using a `Promise-based` recursion and `async/await` syntax. By decoupling the visual shuffle from the game logic, the engine achieves a seamless transition between the "thinking" phase and the final result.
- **Polymorphic Notification System:** Engineered a DRY (Don't Repeat Yourself) UI handler using an object-oriented approach. This system manages multiple notification types (Alerts and Feedback) through a unified `handle()` method, centralizing `clearTimeout` logic and DOM state transitions.
- **Config-Driven Architecture:** Centralized all game parameters—from scoring thresholds to animation durations—within a immutable `CONFIG` object. This separation of "Data" and "Logic" allows for rapid game balancing and maintenance without modifying the core functional code.
- **Fluid UI Scaling with `clamp()`:** Modernized the responsive design by replacing rigid Media Queries with CSS `clamp()` functions. This ensures smooth, proportional scaling of typography, buttons, and layout containers across a continuous viewport spectrum without layout shifts.
- **Performance-Optimized DOM Updates:** Refined the visual feedback loop by implementing targeted class manipulation. Instead of re-scanning the entire DOM, the logic identifies and updates only the necessary nodes during the shuffle and selection phases, reducing CPU cycles during high-frequency UI updates.

---

[← Back to Project List](https://github.com/ilhamjkid/vanilla-js-projects)
