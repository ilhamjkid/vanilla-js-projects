# ⚖️ 06. Modern BMI Calculator

A sleek, dark-themed, and highly interactive Body Mass Index calculator. This project focuses on pure functional programming, advanced DOM manipulation for category state management, defensive input validation, and non-blocking in-app alert feedback.

## 🚀 Key Technical Highlights

- **Separation of Concerns (Pure Functions):** Isolated the core mathematics (`calculateBMI`) and business logic (`checkCategory`) from the DOM manipulation to maintain high readability and clean architecture.
- **Dynamic CSS State Management:** Tracked the previous classification states using an `oldCategory` object to efficiently remove stale CSS classes before applying new visual cues, preventing DOM class stacking.
- **Debounced Non-Blocking Notifications:** Engineered a custom in-app alert system replacing the native, blocking `alert()` method. Leveraged `clearTimeout` to handle rapid consecutive form submissions gracefully.
- **Defensive Input Validation:** Implemented strict input checking (handling empty strings, zeros, negative values, and whitespace trimming) to ensure safe execution and accurate calculations.
- **Cross-Browser Input Normalization:** Leveraged `appearance: none` and `-webkit-` vendor prefixes to strip browser-default UI elements like number "spinners" for a cleaner, unified interface.
- **BEM & Contextual Theming:** Strictly adhered to the Block Element Modifier convention and centralized categorical color schemes using CSS custom properties (Variables).

---

[← Back to Project List](https://github.com/ilhamjkid/vanilla-js-projects)
