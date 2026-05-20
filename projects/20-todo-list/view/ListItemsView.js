export default class {
  static render(listItems) {
    const dFag = document.createDocumentFragment();
    if (listItems.length <= 0) {
      const listEmptyElement = this.#createListEmptyElement();
      dFag.appendChild(listEmptyElement);
    } else {
      const listItemsElement = this.#createListItemsElement(listItems);
      dFag.appendChild(listItemsElement);
    }
    const listWrapperElement = document.querySelector(".todo-list__list-wrapper");
    listWrapperElement?.querySelector(".todo-list__list-items")?.remove();
    listWrapperElement?.querySelector(".todo-list__list-empty")?.remove();
    listWrapperElement?.appendChild(dFag);
  }

  static updateSelectedFilter(filter) {
    document.querySelector(".todo-list__filter-btn.selected").classList.remove("selected");
    document.querySelector(`#filter-${filter}`).classList.add("selected");
  }

  static #createListEmptyElement() {
    const listEmptyElement = document.createElement("div");
    listEmptyElement.classList.add("todo-list__list-empty");
    listEmptyElement.textContent = "Task empty.";
    return listEmptyElement;
  }

  static #createListItemsElement(listItems) {
    const listItemsElement = document.createElement("ul");
    listItemsElement.classList.add("todo-list__list-items");
    listItems.forEach((item) => {
      const listItemElement = this.#createListItemElement(item);
      listItemsElement.appendChild(listItemElement);
    });
    return listItemsElement;
  }

  static #createListItemElement(item) {
    const listItemElement = document.createElement("li");
    listItemElement.classList.add("todo-list__item");
    if (item.status === "completed") {
      listItemElement.classList.add("completed");
    }
    listItemElement.id = item.id;
    listItemElement.innerHTML = `
      <label for="check-${item.id}" class="todo-list__text-item">
        ${item.text}
      </label>
      <div class="todo-list__control-item">
        <label for="check-${item.id}" class="todo-list__check-item">
          <input
            type="checkbox"
            id="check-${item.id}"
            class="todo-list__checkbox"
            ${item.status === "completed" ? "checked" : ""}
          >
          <span class="todo-list__checkmark"></span>
        </label>
        <button
          type="button"
          class="todo-list__delete-item"
          aria-label="Delete task"
        >
          Delete
        </button>
      </div>
    `;
    return listItemElement;
  }
}
