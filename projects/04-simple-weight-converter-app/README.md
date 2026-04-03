# ⚖️ 04. Simple Weight Converter App

A clean, responsive, and real-time utility tool that converts Pounds into Grams, Kilograms, and Ounces. This project focuses on live event handling, robust DOM state management, and an adaptive layout.

## 🚀 Key Technical Highlights

- **Real-Time Event Processing:** Leveraged the `input` event listener instead of the standard `change` event to provide instantaneous, live unit conversions as the user types.
- **Browser-Native Field Validation:** Utilized the strict HTML5 `type="number"` coupled with blank string checks (`val === ""`) to offload base-level state resets directly to the browser's native engine for cleaner logic.
- **Predictive State Management:** Used explicit `classList.add()` and `classList.remove()` methods instead of the standard `toggle()` operator to ensure deterministic, bug-free visibility of the results panel and error messages.
- **Edge-Case Guard Clauses:** Implemented negative number blocking and `isNaN()` safety checks to keep the application robust against invalid inputs and prevent visual layout breaks with bad data.
- **Adaptive Grid Architecture:** Engineered a fluid CSS Grid layout featuring media queries that gracefully scale from a 1-column layout on mobile devices to a symmetric 3-column display on larger desktop screens.
- **BEM & Theming Strategy:** Structured styles with CSS Variables for centralized color management and adopted the BEM (Block Element Modifier) naming convention to maintain scalable, highly readable code.

---

[← Back to Project List](https://github.com/ilhamjkid/vanilla-js-projects)
