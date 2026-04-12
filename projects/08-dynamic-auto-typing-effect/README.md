# ⌨️ 08. Dynamic Auto Typing Effect

A high-performance and accessible typewriter effect that cycles through multiple strings of text. This project focuses on state management and recursive timing to create a natural, human-like typing rhythm within a single-loop execution.

## 🚀 Key Technical Highlights

- **Finite State Machine (FSM) Logic:** Implemented a robust state-based control system using an `isDeleting` toggle. This manages the transition between the "typing" and "deleting" phases within a single unified function, reducing complexity compared to multiple function calls.
- **Dynamic Timing via Recursion:** Utilized recursive `setTimeout` calls instead of `setInterval` to enable variable execution speeds. This allows for distinct delays between typing (standard speed), deleting (faster speed), and the pause delay once a word is fully completed.
- **Circular Array Navigation:** Leveraged the Modulo operator (`%`) to handle infinite cycling through the word array. This mathematical approach ensures a clean reset to the first index once the end of the array is reached, eliminating the need for manual index resets.
- **Decoupled Data Architecture:** Adopted a data-driven approach by storing the word lists in a `data-desc` HTML attribute in JSON format. This allows for content updates directly within the HTML without requiring modifications to the JavaScript core logic.
- **Hardware-Accelerated Visuals:** Optimized the blinking cursor effect using CSS `@keyframes` on the `opacity` property. This triggers GPU-level compositing and avoids "layout shifts" that occur when using properties like `display` or `visibility`.
- **Accessibility-First Implementation:** Integrated `aria-live="polite"` on the text container. This ensures that the dynamic content updates are detectable and properly announced by screen readers, making the effect accessible to all users.

---

[← Back to Project List](https://github.com/ilhamjkid/vanilla-js-projects)
