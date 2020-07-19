const CRAFTING_TABLE_ID = "craft-table";
const INVENTORY_ID = "inventory";
const RESULT_ID = "result";

const GRID_CELL_CLASS = "gridCell";

class Game {
  constructor() {
    this.selectedInventoryCell = null;
    this.selectedIngredient = null;
    this.newIngredient = null;

    this.bindEvent();

    this.initCratfingTable();
    this.initInventory();
  }

  bindEvent() {
    const self = this;
    document.getElementById(RESULT_ID).onclick = function() {
      self.addNewIngredientToInventory();
    }
  }

  initCratfingTable() {
    this.craftTable = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    // this.craftTable = Array(9);

    for (let index = 0; index < 9; index++) {
      const newItem = this.createItemElement(
        `craft-table-${index}`,
        GRID_CELL_CLASS,
        () => this.selectCraftTableItem(index)
      );
      document.getElementById(CRAFTING_TABLE_ID).appendChild(newItem);
    }
  }

  selectCraftTableItem(craftCellIndex) {
    const craftTableCell = document.getElementById(`craft-table-${craftCellIndex}`);

    if (craftTableCell.innerHTML === "") {
      if (this.selectedInventoryCell) {
        // copy Item
        craftTableCell.innerHTML = this.selectedInventoryCell.innerHTML;
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
      const newItem = this.createItemElement(
        `inventory-${index}`,
        GRID_CELL_CLASS,
        () => this.selectInventoryItem(index)
      );

      const ingredient = this.inventory[index];
      if (ingredient) {
        const newImage = this.createImageElement(`./assets/${ingredient}-0.png`, `item-${index}`);
        newItem.appendChild(newImage);
      }
      inventoryElement.appendChild(newItem);
    }
  }

  selectInventoryItem(ingredientIndex) {
    if (this.selectedInventoryCell) {
      this.selectedInventoryCell.style.backgroundColor = "#8b8b8b";
    }
    this.selectedInventoryCell = document.getElementById(`inventory-${ingredientIndex}`);
    this.selectedInventoryCell.style.backgroundColor = "#88FF88";
    this.selectedIngredient = this.inventory[ingredientIndex];
  }

  craft() {
    const resultElement = document.getElementById(RESULT_ID);
    resultElement.innerHTML = "";

    this.newIngredient = null;
    for (let index = 0; index < RECIPES.length; index++) {
      if (this.evaluateRecipe(RECIPES[index][2])) {
        this.newIngredient = RECIPES[index][1];
        const imageResult = this.createImageElement(`./assets/${this.newIngredient}-0.png`, `item-${index}`)
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
    let inventoryIsFull = true;

    if (this.newIngredient) {
      if (this.inventory.indexOf(this.newIngredient) === -1) {
        // Find an empty location in the inventory
        for (let index = 0; index < this.inventory.length; index++) {
          debugger
          if (!this.inventory[index]) {
            inventoryIsFull = false;
            this.inventory[index] = this.newIngredient;

            const newImage = this.createImageElement(`./assets/${this.newIngredient}-0.png`, `item-${index}`);
            document.getElementById(`inventory-${index}`).appendChild(newImage);

            this.newIngredient = null;
            break;
          }
        }
        if (inventoryIsFull) {
          alert("Inventory is full!");
        }
      } else {
        alert("This ingredient is already in your inventory!");
      }
    }
  }

  createItemElement(id, className, onClickFn) {
    const item = document.createElement("div");
    item.id = id;
    item.className = className;
    item.onclick = onClickFn;
    return item;
  }

  createImageElement(imagePath, alt) {
    const image = document.createElement("img");
    image.src = imagePath;
    image.alt = alt;
    return image;
  }
}
