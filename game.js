const CRAFTING_TABLE_ID = "craft-table";
const INVENTORY_ID = "inventory";
const RESULT_ID = "result";

const GRID_CELL_CLASS = "gridCell";

class Game {
  constructor() {
    this.selectedCell = null;
    this.selectedIngredient = null;
    this.newIngredient = null;

    this.bindEvent();

    this.initCratfingTable();

    this.initInventory();
  }

  bindEvent() {
    document.getElementById(RESULT_ID).onclick = this.addNewIngredientToInventory;
  }

  initCratfingTable() {
    this.craftTable = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    for (let index = 0; index < 9; index++) {


      const cell = document.createElement("div");
      cell.id = `craft-table-${index}`;
      cell.className = GRID_CELL_CLASS;
      const self = this;
      cell.onclick = function () {
        self.selectCraftTableItem(index);
      }

      document.getElementById(CRAFTING_TABLE_ID).appendChild(cell);
    }


  }

  selectCraftTableItem(craftCellIndex) {
    const craftTableCell = document.getElementById(`craft-table-${craftCellIndex}`);

    if (craftTableCell.innerHTML === "") {
      if (this.selectedCell) {

        // copy Item
        craftTableCell.innerHTML = this.selectedCell.innerHTML;
        this.craftTable[craftCellIndex] = this.selectedIngredient;
      }
    } else {

      // clear Item
      craftTableCell.innerHTML = "";
      this.craftTable[craftCellIndex] = 0;
    }

    this.craft();
  }

  initInventory() {

    this.inventory = [...INITIAL_INVENTORY, ...Array(26 - INITIAL_INVENTORY.length)]

    const inventoryElement = document.getElementById(INVENTORY_ID);

    inventoryElement.innerHTML = "";
    for (let index = 0; index < 27; index++) {

      const itemElement = document.createElement("div");
      itemElement.id = `inventory-${index}`;
      itemElement.className = GRID_CELL_CLASS;
      const self = this;
      itemElement.onclick = function() {
        self.selectInventoryItem(index);
      }

      const ingredient = this.inventory[index];
      if (ingredient) {
        const imageItem = document.createElement("img");
        imageItem.src = `./assets/${ingredient}-0.png`;
        imageItem.alt = `item-${index}`;
        itemElement.appendChild(imageItem);
      }

      inventoryElement.appendChild(itemElement);
    }
  }

  selectInventoryItem(ingredientIndex) {
    if (this.selectedCell) {
      this.selectedCell.style.backgroundColor = "#8b8b8b";
    }
    this.selectedCell = document.getElementById(`inventory-${ingredientIndex}`);
    this.selectedCell.style.backgroundColor = "#88FF88";
    this.selectedIngredient = this.inventory[ingredientIndex];
  }

  craft() {
    const resultElement = document.getElementById(RESULT_ID);
    resultElement.innerHTML = "";

    this.newIngredient = null;
    for (let index = 0; index < recipes.length; index++) {
      if (this.evaluateRecipe(recipes[index][2])) {
        this.newIngredient = recipes[index][1];
        const imageResult = document.createElement("img");
        imageResult.src = `./assets/${this.newIngredient}-0.png`;
        imageResult.alt = `item-${index}`;

        resultElement.appendChild(imageResult);
        resultElement.appendChild(document.createTextNode("Click on this item to add it to your inventory."))
        break;
      }
    }
  }

  evaluateRecipe(recipe) {
    let match = true;

    for (let index = 0; index < 9; index++) {
      if (recipe[index] != this.craftTable[index]) {
        match = false;
        break;
      }
    }
    return match;
  }

  addNewIngredientToInventory() {
    debugger
  }
}





// let newItem = 0;

// // Add newly crafted item to the inventory (if it's not already there)
// function addItemToInventory() {
//   var inventoryIsFull = true;
//   if (newItem != 0) {
//     // First check if this item is not already in the inventory
//     if (inventory.indexOf(newItem) == -1) {
//       // Then find an empty location in the inventory
//       for (var i = 0; i < inventory.length; i++) {
//         if (inventory[i] == 0) {
//           // Empty location spotted. Add item to the inventory
//           inventoryIsFull = false;
//           inventory[i] = newItem;
//           document.getElementById("inventory-" + i).innerHTML =
//             "<IMG src='http://www.101computing.net/mc/" + +newItem + "-0.png'>";
//           break;
//         }
//       }
//       if (inventoryIsFull) alert("Inventory is full!");
//     } else {
//       alert("This item is already in your inventory!");
//     }
//   }
// }
