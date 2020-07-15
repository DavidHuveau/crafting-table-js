class Game {}

const ARROW = 262;
const BOW = 261;
const BUCKET = 325;
const CHEST = 54;
const CLOCK = 347;
const COAL = 263;
const COBBLESTONE = 4;
const COMPASS = 345;
const CRAFTING_TABLE = 58;
const DIAMOND = 264;
const DIAMOND_AXE = 279;
const DIAMOND_HOE = 293;
const DIAMOND_PICKAXE = 278;
const DIAMOND_SHOVEL = 277;
const DIAMOND_SWORD = 276;
const FEATHER = 288;
const FISHING_ROD = 346;
const FLINT = 318;
const FLINT_AND_STEEL = 259;
const FURNACE = 61;
const GOLD = 266;
const GOLDEN_AXE = 286;
const GOLDEN_HOE = 294;
const GOLDEN_PICKAXE = 285;
const GOLDEN_SHOVEL = 284;
const GOLDEN_SWORD = 283;
const IRON_AXE = 258;
const IRON_HOE = 292;
const IRON_INGOT = 265;
const IRON_PICKAXE = 257;
const IRON_SHOVEL = 256;
const IRON_SWORD = 267;
const REDSTONE = 331;
const REDSTONE_BLOCK = 152;
const REDSTONETORCH = 76;
const STICK = 280;
const STONE_AXE = 275;
const STONE_HOE = 291;
const STONE_PICKAXE = 274;
const STONE_SHOVEL = 273;
const STONE_SWORD = 272;
const STRING = 287;
const TORCH = 50;
const WOOD = 17;
const WOOD_PLANK = 5;
const WOODEN_AXE = 271;
const WOODEN_HOE = 290;
const WOODEN_PICKAXE = 270;
const WOODEN_SHOVEL = 269;
const WOODEN_SWORD = 268;

let craftTable = [0, 0, 0, 0, 0, 0, 0, 0, 0];

let inventory = [
  COBBLESTONE,
  WOOD,
  IRON_INGOT,
  GOLD,
  DIAMOND,
  REDSTONE,
  STRING,
  FEATHER,
  FLINT,
  COAL,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0
];

let selectedCell;
let selectedIngredient = 0;
let newItem = 0;

let recipes = [];
recipes.push(["Wood Planks", WOOD_PLANK, [0, 0, 0, 0, WOOD, 0, 0, 0, 0]]);
recipes.push(["Stick", STICK, [0, 0, 0, 0, WOOD_PLANK, 0, 0, WOOD_PLANK, 0]]);
recipes.push([
  "Bow",
  BOW,
  [STRING, STICK, 0, STRING, 0, STICK, STRING, STICK, 0]
]);
recipes.push(["Arrow", ARROW, [0, FLINT, 0, 0, STICK, 0, 0, FEATHER, 0]]);
recipes.push(["Torch", TORCH, [0, 0, 0, 0, COAL, 0, 0, STICK, 0]]);
recipes.push([
  "Redstone Torch",
  REDSTONETORCH,
  [0, 0, 0, 0, REDSTONE, 0, 0, STICK, 0]
]);
recipes.push([
  "Redstone Block",
  REDSTONE_BLOCK,
  [
    REDSTONE,
    REDSTONE,
    REDSTONE,
    REDSTONE,
    REDSTONE,
    REDSTONE,
    REDSTONE,
    REDSTONE,
    REDSTONE
  ]
]);
recipes.push([
  "Chest",
  CHEST,
  [
    WOOD_PLANK,
    WOOD_PLANK,
    WOOD_PLANK,
    WOOD_PLANK,
    0,
    WOOD_PLANK,
    WOOD_PLANK,
    WOOD_PLANK,
    WOOD_PLANK
  ]
]);
recipes.push([
  "Crafting Table",
  CRAFTING_TABLE,
  [0, 0, 0, WOOD_PLANK, WOOD_PLANK, 0, WOOD_PLANK, WOOD_PLANK, 0]
]);
recipes.push([
  "Furnace",
  FURNACE,
  [
    COBBLESTONE,
    COBBLESTONE,
    COBBLESTONE,
    COBBLESTONE,
    0,
    COBBLESTONE,
    COBBLESTONE,
    COBBLESTONE,
    COBBLESTONE
  ]
]);
recipes.push([
  "Bucket",
  BUCKET,
  [0, 0, 0, IRON_INGOT, 0, IRON_INGOT, 0, IRON_INGOT, 0]
]);
recipes.push([
  "Flint and Steel",
  FLINT_AND_STEEL,
  [0, 0, 0, IRON_INGOT, 0, 0, 0, FLINT, 0]
]);
recipes.push([
  "Wooden Axe",
  WOODEN_AXE,
  [WOOD_PLANK, WOOD_PLANK, 0, WOOD_PLANK, STICK, 0, 0, STICK, 0]
]);
recipes.push([
  "Stone Axe",
  STONE_AXE,
  [COBBLESTONE, COBBLESTONE, 0, COBBLESTONE, STICK, 0, 0, STICK, 0]
]);
recipes.push([
  "Iron Axe",
  IRON_AXE,
  [IRON_INGOT, IRON_INGOT, 0, IRON_INGOT, STICK, 0, 0, STICK, 0]
]);
recipes.push([
  "Diamond Axe",
  DIAMOND_AXE,
  [DIAMOND, DIAMOND, 0, DIAMOND, STICK, 0, 0, STICK, 0]
]);
recipes.push([
  "Golden Axe",
  GOLDEN_AXE,
  [GOLD, GOLD, 0, GOLD, STICK, 0, 0, STICK, 0]
]);
recipes.push([
  "Wooden Hoe",
  WOODEN_HOE,
  [WOOD_PLANK, WOOD_PLANK, 0, 0, STICK, 0, 0, STICK, 0]
]);
recipes.push([
  "Stone Hoe",
  STONE_HOE,
  [COBBLESTONE, COBBLESTONE, 0, 0, STICK, 0, 0, STICK, 0]
]);
recipes.push([
  "Iron Hoe",
  IRON_HOE,
  [IRON_INGOT, IRON_INGOT, 0, 0, STICK, 0, 0, STICK, 0]
]);
recipes.push([
  "Diamond Hoe",
  DIAMOND_HOE,
  [DIAMOND, DIAMOND, 0, 0, STICK, 0, 0, STICK, 0]
]);
recipes.push([
  "Golden Hoe",
  GOLDEN_HOE,
  [GOLD, GOLD, 0, 0, STICK, 0, 0, STICK, 0]
]);
recipes.push([
  "Wooden Pickaxe",
  WOODEN_PICKAXE,
  [WOOD_PLANK, WOOD_PLANK, WOOD_PLANK, 0, STICK, 0, 0, STICK, 0]
]);
recipes.push([
  "Stone Pickaxe",
  STONE_PICKAXE,
  [COBBLESTONE, COBBLESTONE, COBBLESTONE, 0, STICK, 0, 0, STICK, 0]
]);
recipes.push([
  "Iron Pickaxe",
  IRON_PICKAXE,
  [IRON_INGOT, IRON_INGOT, IRON_INGOT, 0, STICK, 0, 0, STICK, 0]
]);
recipes.push([
  "Diamond Pickaxe",
  DIAMOND_PICKAXE,
  [DIAMOND, DIAMOND, DIAMOND, 0, STICK, 0, 0, STICK, 0]
]);
recipes.push([
  "Golden Pickaxe",
  GOLDEN_PICKAXE,
  [GOLD, GOLD, GOLD, 0, STICK, 0, 0, STICK, 0]
]);
recipes.push([
  "Wooden Shovel",
  WOODEN_SHOVEL,
  [0, WOOD_PLANK, 0, 0, STICK, 0, 0, STICK, 0]
]);
recipes.push([
  "Stone Shovel",
  STONE_SHOVEL,
  [0, COBBLESTONE, 0, 0, STICK, 0, 0, STICK, 0]
]);
recipes.push([
  "Iron Shovel",
  IRON_SHOVEL,
  [0, IRON_INGOT, 0, 0, STICK, 0, 0, STICK, 0]
]);
recipes.push([
  "Diamond Shovel",
  DIAMOND_SHOVEL,
  [0, DIAMOND, 0, 0, STICK, 0, 0, STICK, 0]
]);
recipes.push([
  "Golden Shovel",
  GOLDEN_SHOVEL,
  [0, GOLD, 0, 0, STICK, 0, 0, STICK, 0]
]);
recipes.push([
  "Wooden Sword",
  WOODEN_SWORD,
  [0, WOOD_PLANK, 0, 0, WOOD_PLANK, 0, 0, STICK, 0]
]);
recipes.push([
  "Stone Sword",
  STONE_SWORD,
  [0, COBBLESTONE, 0, 0, COBBLESTONE, 0, 0, STICK, 0]
]);
recipes.push([
  "Iron Sword",
  IRON_SWORD,
  [0, IRON_INGOT, 0, 0, IRON_INGOT, 0, 0, STICK, 0]
]);
recipes.push([
  "Diamond Sword",
  DIAMOND_SWORD,
  [0, DIAMOND, 0, 0, DIAMOND, 0, 0, STICK, 0]
]);
recipes.push([
  "Golden Sword",
  GOLDEN_SWORD,
  [0, GOLD, 0, 0, GOLD, 0, 0, STICK, 0]
]);
recipes.push([
  "Fishing Rod",
  FISHING_ROD,
  [0, 0, STICK, 0, STICK, STRING, STICK, 0, STRING]
]);

// Add newly crafted item to the inventory (if it's not already there)
function addItemToInventory() {
  var inventoryIsFull = true;
  if (newItem != 0) {
    // First check if this item is not already in the inventory
    if (inventory.indexOf(newItem) == -1) {
      // Then find an empty location in the inventory
      for (var i = 0; i < inventory.length; i++) {
        if (inventory[i] == 0) {
          // Empty location spotted. Add item to the inventory
          inventoryIsFull = false;
          inventory[i] = newItem;
          document.getElementById("inventory-" + i).innerHTML =
            "<IMG src='http://www.101computing.net/mc/" + +newItem + "-0.png'>";
          break;
        }
      }
      if (inventoryIsFull) alert("Inventory is full!");
    } else {
      alert("This item is already in your inventory!");
    }
  }
}

// Highlight inventory item when user click on it
function selectInventoryItem(cell_ID) {
  if (selectedCell) {
    selectedCell.style.backgroundColor = "#8b8b8b";
  }
  selectedCell = document.getElementById("inventory-" + cell_ID);
  selectedCell.style.backgroundColor = "#88FF88";
  selectedIngredient = inventory[cell_ID];
}

// Replace ingredient on craft table when the user click on one of the 9 cells of the craft table
function selectCraftTable(cell_ID) {
  var craftTableCell = document.getElementById("craftTable-" + cell_ID);
  if (craftTableCell.innerHTML == "") {
    if (selectedCell) {
      craftTableCell.innerHTML = selectedCell.innerHTML;
      craftTable[cell_ID] = selectedIngredient;
    }
  } else {
    craftTableCell.innerHTML = "";
    craftTable[cell_ID] = 0;
  }
  craft();
}

// A function to compare the craft table with all recipes to see if an item can be crafted
function craft() {
  // Check each recipe one at a time
  document.getElementById("result").innerHTML = "";
  newItem = "";
  for (var i = 0; i < recipes.length; i++) {
    if (checkRecipe(recipes[i][2])) {
      newItem = recipes[i][1];
      // Craft the new item!
      document.getElementById("result").innerHTML =
        "<IMG src='http://www.101computing.net/mc/" +
        +recipes[i][1] +
        "-0.png'><br/>" +
        recipes[i][0] +
        "<BR/>Click on this item to add it to your inventory.";
      break;
    }
  }
}

// A function to compare a recipe with the content of the craft table
function checkRecipe(recipe) {
  var match = true;
  for (var i = 0; i < 9; i++) {
    if (recipe[i] != craftTable[i]) {
      match = false;
      break;
    }
  }
  return match;
}
