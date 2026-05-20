export default class {
  static #storageName = "todo-list-items";

  static getListItems(filter = "all") {
    const listItemsStrJSON = localStorage.getItem(this.#storageName);
    if (!listItemsStrJSON) return [];

    const listItems = JSON.parse(listItemsStrJSON);
    if (!Array.isArray(listItems)) return [];

    if (filter === "all") return listItems;
    else if (filter === "active") {
      return listItems.filter((item) => item.status === "active");
    } else if (filter === "completed") {
      return listItems.filter((item) => item.status === "completed");
    } else throw new Error("Failed to get list items.");
  }

  static getListItem(listItemID) {
    if (!listItemID) throw new Error("Failed to get list item.");

    const listItems = this.getListItems();
    return listItems.find((item) => item.id === listItemID) || null;
  }

  static addListItem(listItemText) {
    if (!listItemText) throw new Error("Failed to add list item");

    const listItemID = this.#createID();
    const listItems = this.getListItems();
    listItems.push({ id: listItemID, text: listItemText, status: "active" });
    localStorage.setItem(this.#storageName, JSON.stringify(listItems));
  }

  static deleteListItem(listItemID) {
    if (!listItemID) throw new Error("Failed to delete list item.");

    const listItems = this.getListItems();
    const newListItems = listItems.filter((item) => item.id !== listItemID);
    if (newListItems.length <= 0) localStorage.removeItem(this.#storageName);
    else localStorage.setItem(this.#storageName, JSON.stringify(newListItems));
  }

  static updateStatusListItem(listItemID) {
    if (!listItemID) throw new Error("Failed to update list item.");

    const listItems = this.getListItems();
    const newListItems = listItems.map((item) => {
      if (item.id !== listItemID) return item;
      if (item.status === "active") {
        return { ...item, status: "completed" };
      }
      if (item.status === "completed") {
        return { ...item, status: "active" };
      }
    });
    localStorage.setItem(this.#storageName, JSON.stringify(newListItems));
  }

  static #createID() {
    const min = 10;
    const max = 99;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    const listItemID = String(Date.now()) + String(randomNumber);
    return listItemID;
  }
}
