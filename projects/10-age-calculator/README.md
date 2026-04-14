# 🗓️ 10. Age Calculator

A professional-grade age calculation tool that provides precise results down to the day. This project prioritizes calendar accuracy by handling irregular month lengths and employs a modular, functional programming approach for clean and maintainable code.

## 🚀 Key Technical Highlights

- **Precise Calendar Arithmetic:** Implemented a robust "borrowing" logic to handle negative differences when the current date is earlier in the month than the birth date. It dynamically fetches the last day of the previous month using `new Date(year, month, 0).getDate()` to ensure 100% accuracy regardless of leap years or varying month lengths.
- **Modular Functional Architecture:** Refactored the entire logic into specialized, single-responsibility functions (`calculateAge`, `createMessage`, `setMaxDate`). This separation of concerns makes the codebase easier to test, debug, and scale for future features like "Next Birthday" countdowns.
- **Automated Input Constraint:** Integrated a `DOMContentLoaded` listener that automatically calculates and sets the `max` attribute of the date input to the current day. This prevents "future birth dates" from being selected, improving data integrity without requiring manual validation.
- **Natural Language Generation:** Built a smart message constructor that filters out zero-value units (e.g., hiding "0 months") and utilizes `Array.prototype.pop()` and `.join()` to dynamically insert an Oxford comma and the word "and" only when multiple time units are present.
- **Responsive Layered Design:** Developed a mobile-first UI using CSS custom properties (variables) for consistent theming. The layout adapts from a compact mobile view to a structured desktop interface using precise media queries and Flexbox alignment.
- **State-Driven UI Updates:** Utilized a "clean slate" approach for result rendering, where the output container is toggled via a `.hidden` utility class only after a successful calculation, ensuring a clutter-free initial user experience.

---

[← Back to Project List](https://github.com/ilhamjkid/vanilla-js-projects)
