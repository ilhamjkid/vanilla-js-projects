# 💱 19. Currency Converter

A high-performance, bi-directional currency exchange calculator engineered to interface with the Frankfurter REST API, featuring $O(1)$ dictionary-lookup optimization, floating-point precision stabilization, and destructive DOM error isolation for fail-safe client-side execution.

## 🚀 Key Technical Highlights

- **Bi-Directional Conversion State Orchestration:** Implemented a polymorphic event execution strategy through a unified `runConverter` function. By dynamically swapping the parameter roles of the DOM elements based on the triggering event source (`input` or `change`), the architecture handles real-time cross-calculations symmetrically without creating circular dependencies or infinite call stacks.
- **$O(1)$ Dictionary Transformation via Array Reduce:** Optimized data accessibility by immediately parsing the API array payload into a lean key-value hash map (`CONFIG.rates`) during the initialization cycle via `Array.prototype.reduce`. This eliminates costly runtime loop iterations or recursive `.find()` filtering overhead during rapid user keystrokes, guaranteeing instant calculations.
- **IEEE 754 Floating-Point Precision Sanitization:** Neutralized native JavaScript binary floating-point drift inaccuracies by intercepting raw computation outputs. Utilizing a deterministic combination of `.toFixed()` and `Number()` instantiation ensures mathematical correctness up to 4 decimal places while automatically stripping trailing redundant zeroes for clean visual consistency.
- **Destructive DOM Isolation for Fail-Safe State Management:** Built a defensive error boundary within the asynchronous initialization lifecycle (`handleFailedSetUp`). In the event of network disruptions or upstream server failures, the system proactively purges the entire `.converter__card` inner HTML footprint, decoupling active event listeners and blocking malicious DevTools attribute manipulations that could trigger runtime script failures.
- **High-Performance Batch Option Rendering:** Optimized DOM injection efficiency using native `DocumentFragment` nodes within the dynamic dropdown construction sequence (`createOptionFragment`). This memory-resident node architecture batches the iteration updates off-screen, mitigating browser reflow and repaint performance penalties during startup.
- **Sleek FinTech Typography & Responsive Design:** Crafted a focused, zero-distraction layout utilizing a monospace font stack to ensure absolute character alignment for financial numeric structures. Layout stability is secured across all form factors via CSS Custom Properties coupled with fluid `clamp()` responsive boundary constraints.

---

[← Back to Project List](https://github.com/ilhamjkid/vanilla-js-projects)
