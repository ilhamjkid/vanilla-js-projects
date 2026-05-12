# 🧮 17. Calculator

A high-fidelity, state-driven calculator engineered to solve native JavaScript floating-point inaccuracies while providing a robust user experience through sophisticated input sanitization and a modern CSS Grid architecture.

## 🚀 Key Technical Highlights

- **Centralized State-Driven Architecture:** Implemented a `calcState` object as the "Single Source of Truth." This pattern decouples data management (current, previous, and operation states) from DOM manipulation, ensuring predictable UI transitions and easier debugging.
- **Floating-Point Precision Engineering:** Eliminated the notorious IEEE 754 floating-point error (e.g., `0.1 + 0.2 = 0.3000...4`) by implementing a strategic exponential rounding algorithm (`Math.round(result + "e12") + "e-12"`). This ensures mathematical integrity across all operations.
- **Semantic Grid Area Blueprinting:** Leveraged advanced CSS Grid `grid-template-areas` to build a complex, non-linear layout. This allowed for an ergonomic design where specific buttons (like "Equals") span multiple rows without sacrificing code readability or structural maintainability.
- **Heuristic Input Sanitization:** Developed a multi-layered "Guard Clause" system to handle edge cases in real-time. The logic prevents leading zero proliferation, restricts redundant decimal points, and supports intuitive "operator swapping" if a user changes their mind mid-calculation.
- **Exception Handling & Data Validation:** Utilized a `try-catch` pipeline combined with `isFinite()` checks to manage illegal mathematical operations. Instead of the application crashing or displaying `Infinity`, the system provides graceful, user-friendly feedback for errors like "Division by Zero."
- **Visual State Feedback (Muted UX):** Implemented a dynamic class-switching system to manage "active" vs "muted" visual states. This provides clear hierarchical feedback, distinguishing between a reset display (0) and an active input string, enhancing the overall user accessibility.
- **Declarative DOM Interaction:** Used `data-attributes` (`data-number`, `data-operation`) to separate business logic from CSS classes. This ensures that the JavaScript remains "style-agnostic," allowing for design overhauls without the risk of breaking core functional logic.

---

[← Back to Project List](https://github.com/ilhamjkid/vanilla-js-projects)
