import ListItemModel from "./model/ListItemsModel.js";
import ListItemView from "./view/ListItemsView.js";

const formAddTaskElement = document.querySelector(".todo-list__form");
const listWrapperElement = document.querySelector(".todo-list__list-wrapper");

const appState = {
  filter: "",
  updateFilter(filter = "all") {
    const isFilterNotAll = filter !== "all";
    const isFilterNotActive = filter !== "active";
    const isFilterNotCompleted = filter !== "completed";
    if (isFilterNotAll && isFilterNotActive && isFilterNotCompleted) return;
    this.filter = filter;
  },
  listItems: [],
  updateListItems() {
    const filter = this.filter;
    const listItems = ListItemModel.getListItems(filter);
    this.listItems = listItems.toReversed();
  },
};

window.addEventListener("load", () => {
  appState.updateFilter();
  appState.updateListItems();
  ListItemView.render(appState.listItems);
});
formAddTaskElement.addEventListener("submit", (event) => {
  event.preventDefault();
  handleAddTask(event.target["task-input"].value);
  event.target["task-input"].value = "";
});
listWrapperElement.addEventListener("click", (event) => {
  if (event.target.matches("#filter-all")) return handleFilterList("all");
  if (event.target.matches("#filter-active")) return handleFilterList("active");
  if (event.target.matches("#filter-completed")) return handleFilterList("completed");
  if (event.target.matches(".todo-list__checkbox")) {
    const listItemID = event.target.closest("li")?.id;
    if (listItemID) return handleControlList("updateStatus", listItemID);
    else return;
  }
  if (event.target.matches(".todo-list__delete-item")) {
    const listItemID = event.target.closest("li")?.id;
    if (listItemID) return handleControlList("delete", listItemID);
    else return;
  }
});

function handleAddTask(listItemText) {
  if (!listItemText) return;
  ListItemModel.addListItem(listItemText);
  appState.updateListItems();
  ListItemView.render(appState.listItems);
}
function handleFilterList(filter) {
  ListItemView.updateSelectedFilter(filter);
  appState.updateFilter(filter);
  appState.updateListItems();
  ListItemView.render(appState.listItems);
}
function handleControlList(control, listItemID) {
  if (control === "updateStatus") {
    ListItemModel.updateStatusListItem(listItemID);
  } else if (control === "delete") {
    ListItemModel.deleteListItem(listItemID);
  } else return;
  appState.updateListItems();
  ListItemView.render(appState.listItems);
}
