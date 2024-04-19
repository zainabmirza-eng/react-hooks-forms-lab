import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";
import Filter from "./Filter";
import ItemForm from "./ItemForm";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to handle toggling dark mode
  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  function handleSearchChange(searchText) {
    const filteredItems = itemData.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setItems(filteredItems);
  }

  // Function to handle adding new items
  function handleItemFormSubmit(newItem) {
    setItems([...items, newItem]);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <Filter onSearchChange={handleSearchChange} />
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
