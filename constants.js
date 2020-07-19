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

const INITIAL_INVENTORY = [
  COBBLESTONE,
  WOOD,
  IRON_INGOT,
  GOLD,
  DIAMOND,
  REDSTONE,
  STRING,
  FEATHER,
  FLINT,
  COAL
];

let RECIPES = [];
RECIPES.push(["Wood Planks", WOOD_PLANK, [0, 0, 0, 0, WOOD, 0, 0, 0, 0]]);
RECIPES.push(["Stick", STICK, [0, 0, 0, 0, WOOD_PLANK, 0, 0, WOOD_PLANK, 0]]);
RECIPES.push([
  "Bow",
  BOW,
  [STRING, STICK, 0, STRING, 0, STICK, STRING, STICK, 0]
]);
RECIPES.push(["Arrow", ARROW, [0, FLINT, 0, 0, STICK, 0, 0, FEATHER, 0]]);
RECIPES.push(["Torch", TORCH, [0, 0, 0, 0, COAL, 0, 0, STICK, 0]]);
RECIPES.push([
  "Redstone Torch",
  REDSTONETORCH,
  [0, 0, 0, 0, REDSTONE, 0, 0, STICK, 0]
]);
RECIPES.push([
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
RECIPES.push([
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
RECIPES.push([
  "Crafting Table",
  CRAFTING_TABLE,
  [0, 0, 0, WOOD_PLANK, WOOD_PLANK, 0, WOOD_PLANK, WOOD_PLANK, 0]
]);
RECIPES.push([
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
RECIPES.push([
  "Bucket",
  BUCKET,
  [0, 0, 0, IRON_INGOT, 0, IRON_INGOT, 0, IRON_INGOT, 0]
]);
RECIPES.push([
  "Flint and Steel",
  FLINT_AND_STEEL,
  [0, 0, 0, IRON_INGOT, 0, 0, 0, FLINT, 0]
]);
RECIPES.push([
  "Wooden Axe",
  WOODEN_AXE,
  [WOOD_PLANK, WOOD_PLANK, 0, WOOD_PLANK, STICK, 0, 0, STICK, 0]
]);
RECIPES.push([
  "Stone Axe",
  STONE_AXE,
  [COBBLESTONE, COBBLESTONE, 0, COBBLESTONE, STICK, 0, 0, STICK, 0]
]);
RECIPES.push([
  "Iron Axe",
  IRON_AXE,
  [IRON_INGOT, IRON_INGOT, 0, IRON_INGOT, STICK, 0, 0, STICK, 0]
]);
RECIPES.push([
  "Diamond Axe",
  DIAMOND_AXE,
  [DIAMOND, DIAMOND, 0, DIAMOND, STICK, 0, 0, STICK, 0]
]);
RECIPES.push([
  "Golden Axe",
  GOLDEN_AXE,
  [GOLD, GOLD, 0, GOLD, STICK, 0, 0, STICK, 0]
]);
RECIPES.push([
  "Wooden Hoe",
  WOODEN_HOE,
  [WOOD_PLANK, WOOD_PLANK, 0, 0, STICK, 0, 0, STICK, 0]
]);
RECIPES.push([
  "Stone Hoe",
  STONE_HOE,
  [COBBLESTONE, COBBLESTONE, 0, 0, STICK, 0, 0, STICK, 0]
]);
RECIPES.push([
  "Iron Hoe",
  IRON_HOE,
  [IRON_INGOT, IRON_INGOT, 0, 0, STICK, 0, 0, STICK, 0]
]);
RECIPES.push([
  "Diamond Hoe",
  DIAMOND_HOE,
  [DIAMOND, DIAMOND, 0, 0, STICK, 0, 0, STICK, 0]
]);
RECIPES.push([
  "Golden Hoe",
  GOLDEN_HOE,
  [GOLD, GOLD, 0, 0, STICK, 0, 0, STICK, 0]
]);
RECIPES.push([
  "Wooden Pickaxe",
  WOODEN_PICKAXE,
  [WOOD_PLANK, WOOD_PLANK, WOOD_PLANK, 0, STICK, 0, 0, STICK, 0]
]);
RECIPES.push([
  "Stone Pickaxe",
  STONE_PICKAXE,
  [COBBLESTONE, COBBLESTONE, COBBLESTONE, 0, STICK, 0, 0, STICK, 0]
]);
RECIPES.push([
  "Iron Pickaxe",
  IRON_PICKAXE,
  [IRON_INGOT, IRON_INGOT, IRON_INGOT, 0, STICK, 0, 0, STICK, 0]
]);
RECIPES.push([
  "Diamond Pickaxe",
  DIAMOND_PICKAXE,
  [DIAMOND, DIAMOND, DIAMOND, 0, STICK, 0, 0, STICK, 0]
]);
RECIPES.push([
  "Golden Pickaxe",
  GOLDEN_PICKAXE,
  [GOLD, GOLD, GOLD, 0, STICK, 0, 0, STICK, 0]
]);
RECIPES.push([
  "Wooden Shovel",
  WOODEN_SHOVEL,
  [0, WOOD_PLANK, 0, 0, STICK, 0, 0, STICK, 0]
]);
RECIPES.push([
  "Stone Shovel",
  STONE_SHOVEL,
  [0, COBBLESTONE, 0, 0, STICK, 0, 0, STICK, 0]
]);
RECIPES.push([
  "Iron Shovel",
  IRON_SHOVEL,
  [0, IRON_INGOT, 0, 0, STICK, 0, 0, STICK, 0]
]);
RECIPES.push([
  "Diamond Shovel",
  DIAMOND_SHOVEL,
  [0, DIAMOND, 0, 0, STICK, 0, 0, STICK, 0]
]);
RECIPES.push([
  "Golden Shovel",
  GOLDEN_SHOVEL,
  [0, GOLD, 0, 0, STICK, 0, 0, STICK, 0]
]);
RECIPES.push([
  "Wooden Sword",
  WOODEN_SWORD,
  [0, WOOD_PLANK, 0, 0, WOOD_PLANK, 0, 0, STICK, 0]
]);
RECIPES.push([
  "Stone Sword",
  STONE_SWORD,
  [0, COBBLESTONE, 0, 0, COBBLESTONE, 0, 0, STICK, 0]
]);
RECIPES.push([
  "Iron Sword",
  IRON_SWORD,
  [0, IRON_INGOT, 0, 0, IRON_INGOT, 0, 0, STICK, 0]
]);
RECIPES.push([
  "Diamond Sword",
  DIAMOND_SWORD,
  [0, DIAMOND, 0, 0, DIAMOND, 0, 0, STICK, 0]
]);
RECIPES.push([
  "Golden Sword",
  GOLDEN_SWORD,
  [0, GOLD, 0, 0, GOLD, 0, 0, STICK, 0]
]);
RECIPES.push([
  "Fishing Rod",
  FISHING_ROD,
  [0, 0, STICK, 0, STICK, STRING, STICK, 0, STRING]
]);
