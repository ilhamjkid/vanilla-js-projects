# 📝 20. To-Do List

An architectural Model-View-Controller (MVC) task management application engineered with a state-driven rendering pipeline, centralized memory-safe event delegation, and immutable data orchestration for modern enterprise-grade Vanilla JavaScript execution.

## 🚀 Key Technical Highlights

- **Architectural Model-View-Controller (MVC) Decoupling:** Engineered with a strict Separation of Concerns (SoC) methodology, segregating the application into three isolated operational layers: `ListItemModel` for synchronous `localStorage` data persistence, `ListItemView` for deterministic UI template generation, and `main.js` as the core controller orchestrating runtime state workflows.
- **Centralized Event Delegation & Lifecycle Stability:** Eliminated memory leak vectors and the overhead of recurrent event listener re-binding during data mutation cycles. By anchoring a single, permanent click handler onto the static `.todo-list__list-wrapper` node, the interface safely and efficiently captures event bubble streams originating from highly volatile downstream list elements.
- **Native Bubbling Remediation & Target Filtering:** Neutralized browser-native `<label>`-to-`<input>` microtask click-duplication anomalies. By intercepting target interactions strictly through explicit `.matches(".todo-list__checkbox")` and `.matches(".todo-list__delete-item")` logic gates, the application blocks secondary synthetic browser triggers from executing redundant state updates.
- **Predictable State Predictability via Spread Orchestration:** Safeguarded application data integrity by applying functional programming paradigms within the model layer. State transformations within `updateStatusListItem` use the object spread operator (`{ ...item }`) to return shallow-copied, immutable element clones, preventing accidental mutations of the underlying reference data.
- **Batched Fragment Subtree Composition:** Optimized browser layout rendering cycles during state updates via off-screen `DocumentFragment` instantiation within the view engine. This structural arrangement bundles all dynamic list additions into a single unified DOM injection, significantly mitigating costly browser reflows and repaints.
- **Non-Blocking Monotonic ID Allocation:** Streamlined record creation mechanics by eliminating blocking, synchronous disk I/O loops from the key allocation phase. Merging a temporal Unix timestamp (`Date.now()`) with a pseudo-random numerical seed guarantees immediate, collision-free unique key generation without querying local storage disk entries.

---

[← Back to Project List](https://github.com/ilhamjkid/vanilla-js-projects)
