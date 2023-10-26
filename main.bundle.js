/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Animation: () => (/* binding */ Animation),
/* harmony export */   CustomProperty: () => (/* binding */ CustomProperty),
/* harmony export */   EntityType: () => (/* binding */ EntityType),
/* harmony export */   Frame: () => (/* binding */ Frame),
/* harmony export */   Item: () => (/* binding */ Item),
/* harmony export */   LoaderKey: () => (/* binding */ LoaderKey),
/* harmony export */   Tile: () => (/* binding */ Tile),
/* harmony export */   TilemapLayer: () => (/* binding */ TilemapLayer)
/* harmony export */ });
const CustomProperty = {
	COMBINATION: 'combination',
	PROMPT_MESSAGE: 'promptMessage',
	SPAWN_ITEM_NAME: 'spawnItem',
	SPAWN_ITEM_TEXTURE: 'spawnItemTexture',
	SPAWN_ITEM_FRAME: 'spawnItemFrame',
	SPAWN_ITEM_DESCRIPTION: 'spawnItemDescription',
	LOCKED: 'locked',
	LOCKED_MESSAGE: 'lockedMessage',
	TEXT: 'text',
	VISIBLE: 'visible',
	SCRAMBLED: 'scrambled',
	SCRAMBLED_TEXT: 'scrambledText'
};

const TilemapLayer = {
	BACKGROUND: 'background',
	FOREGROUND: 'foreground',
	OBJECTS: 'objects'
};

const EntityType = {
	DOOR: 'door',
	SAFE: 'safe',
	CHEST: 'chest',
	SIGN: 'sign',
	SCRAMBLED_SIGN: 'scrambled-sign'
};

const LoaderKey = {
	TILEMAP: 'tilemap',
	TILESET: 'tiles',
	FRAME: 'frame',
	ITEMS: 'items',
	UI: 'ui',
	CHEST: 'chest',
	DOOR: 'door',
	SAFE: 'safe'
};

const Tile = {
	SIGN: 144,
	CLOSE_WINDOW: 258,
	OPEN_WINDOW: 235,
	COFFIN: [71, 95],
	DESTROYED_KNIGHT: 96,
	TOP_CHAIR: 312,
	MIDDLE_CHAIR: 336,
	BOTTOM_CHAIR: 360,
	HOLE_IN_WALL: 249,
	TOP_LEFT_GARGOYLE: 232,
	TOP_RIGHT_GARGOYLE: 233,
	BOTTOM_LEFT_GARGOYLE: 256,
	BOTTOM_RIGHT_GARGOYLE: 257,
	TOP_LEFT_WATER: 10,
	TOP_CENTER_WATER: 11,
	TOP_RIGHT_WATER: 12,
	MIDDLE_LEFT_WATER: 34,
	MIDDLE_CENTER_WATER: 35,
	MIDDLE_RIGHT_WATER: 36,
	BOTTOM_LEFT_WATER: 58,
	BOTTOM_CENTER_WATER: 59,
	BOTTOM_RIGHT_WATER: 60,
	DIGGED_HOLE: 316,
	STAIR: 124,
};

const Item = {
	BOOK: 'book',
	HAMMER: 'hammer',
	PICKAXE: 'pickaxe',
	KEY: 'key',
	MASTER_KEY: 'master-key',
	ICE_ROD: 'ice-rod',
	POTION: 'potion',
	SHOVEL: 'shovel',
	RING: 'ring'
};

const Animation = {
	DOOR_OPEN: 'door-open',
	SAFE_OPEN: 'safe-open',
	CHEST_OPEN: 'chest-open'
};

const Frame = {
	MASTER_KEY: 51,
	PICKAXE: 83,
	POTION: 61,
	KEY: 50,
	RING: 13
};

Object.freeze(TilemapLayer);
Object.freeze(CustomProperty);
Object.freeze(LoaderKey);
Object.freeze(EntityType);
Object.freeze(Tile);
Object.freeze(Item);
Object.freeze(Animation);
Object.freeze(Frame);



/***/ }),

/***/ "./src/entities/Chest.js":
/*!*******************************!*\
  !*** ./src/entities/Chest.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Chest)
/* harmony export */ });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ItemContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemContainer */ "./src/entities/ItemContainer.js");



class Chest extends _ItemContainer__WEBPACK_IMPORTED_MODULE_1__["default"] {

	locked = true;
	lockedMessage = null;
	opened = false;

	constructor(scene, x, y, texture, frame, name, locked, lockedMessage, spawnItem, spawnItemTexture, spawnItemFrame, spawnItemDescription) {
		super(scene, x, y, texture, frame, name, spawnItem, spawnItemTexture, spawnItemFrame, spawnItemDescription);
		scene.add.existing(this);
		this.setInteractive();
		this.name = name;
		this.locked = locked;
		this.lockedMessage = lockedMessage;
	}

	lock() {
		this.locked = true;
	}

	unlock() {
		this.locked = false;
	}

	isLocked() {
		return this.locked;
    }
    
    setLockedMessage(message) {
        this.lockedMessage = message;
    }

    getLockedMessage() {
        return this.lockedMessage;
	}
	
	isOpened() {
		return this.opened;
	}

	setOpened(opened) {
		this.opened = opened;
	}
}


/***/ }),

/***/ "./src/entities/Door.js":
/*!******************************!*\
  !*** ./src/entities/Door.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Door)
/* harmony export */ });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);


class Door extends (phaser__WEBPACK_IMPORTED_MODULE_0___default().Physics).Arcade.Sprite {
	name = null;
	locked = false;
	lockedMessage = null;
	opened = false;

	constructor(scene, x, y, texture, frame, name, locked, lockedMessage) {
		console.log(frame);
		super(scene, x, y, texture, frame);
		this.name = name;
		this.locked = locked;
		this.lockedMessage = lockedMessage;
		scene.add.existing(this);
		this.setScale(2);
		this.setInteractive();
	}

	getName() {
		return this.name;
	}

	setName(name) {
		this.name = name;
	}

	lock() {
		this.locked = true;
	}

	unlock() {
		this.locked = false;
	}

	isLocked() {
		return this.locked;
	}

	setLockedMessage(message) {
		this.lockedMessage = message;
	}

	getLockedMessage() {
		return this.lockedMessage;
	}

	isOpened() {
		return this.opened;
	}

	setOpened(opened) {
		this.opened = opened;
	}
}


/***/ }),

/***/ "./src/entities/ItemContainer.js":
/*!***************************************!*\
  !*** ./src/entities/ItemContainer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ItemContainer)
/* harmony export */ });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);


class ItemContainer extends (phaser__WEBPACK_IMPORTED_MODULE_0___default().Physics).Arcade.Sprite {
    name = null;
    spawnItemName = null;
	spawnItemTexture = null;
	spawnItemFrame = null;
	spawnItemDescription = null;

	constructor(scene, x, y, texture, frame, name, spawnItemName, spawnItemTexture, spawnItemFrame, spawnItemDescription) {
        super(scene, x, y, texture, frame);
        this.name = name;
        this.spawnItemName = spawnItemName;
        this.spawnItemTexture = spawnItemTexture;
        this.spawnItemFrame = spawnItemFrame;
        this.spawnItemDescription = spawnItemDescription;
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setSpawnItem(spawnItemName) {
        this.spawnItemName = spawnItemName;
    }

    getSpawnItemName() {
        return this.spawnItemName;
    }

    setSpawnItemTexture(texture) {
        this.spawnItemTexture = texture
    }

    getSpawnItemTexture() {
        return this.spawnItemTexture;
    }

    setSpawnItemFrame(frame) {
        this.spawnItemFrame = frame;
    }

    getSpawnItemFrame() {
        return this.spawnItemFrame;
    }

    setSpawnItemDescription(description) {
       this.spawnItemDescription = description; 
    }

    getSpawnItemDescription() {
        return this.spawnItemDescription;
    }
}


/***/ }),

/***/ "./src/entities/Safe.js":
/*!******************************!*\
  !*** ./src/entities/Safe.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Safe)
/* harmony export */ });
/* harmony import */ var _ItemContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemContainer */ "./src/entities/ItemContainer.js");


class Safe extends _ItemContainer__WEBPACK_IMPORTED_MODULE_0__["default"] {

    combination = null;
    promptMessage = null;
    opened = false;

    constructor(scene, x, y, texture, frame, name, combination, promptMessage, spawnItem, spawnItemTexture, spawnItemFrame, spawnItemDescription) {
		super(scene, x, y, texture, frame, name, spawnItem, spawnItemTexture, spawnItemFrame, spawnItemDescription);
		scene.add.existing(this);
		this.setInteractive();
		this.name = name;
		this.combination = combination;
		this.promptMessage = promptMessage;
    }
    
    getCombination() {
        return this.combination;
    }

    setCombination(combination) {
        this.combination = combination;
    }

    getPromptMessage() {
        return this.promptMessage;
    }

    setPromptMessage(message) {
        this.promptMessage = message;
    }

    isOpened() {
        return this.opened;
    }

    setOpened(opened) {
        this.opened;
    }
}

/***/ }),

/***/ "./src/entities/ScrambledSign.js":
/*!***************************************!*\
  !*** ./src/entities/ScrambledSign.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ScrambledSign)
/* harmony export */ });
/* harmony import */ var _Sign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sign */ "./src/entities/Sign.js");


class ScrambledSign extends _Sign__WEBPACK_IMPORTED_MODULE_0__["default"] {

    scrambled = true;
    scrambledText = null;

	constructor(scene, x, y, name, text, visible, scrambled, scrambledText) {
        super(scene, x, y, name, text, visible);
        this.scrambled = scrambled;
        this.scrambledText = scrambledText;
    }
    
    isScrambled() {
        return this.scrambled;
    }

    setScrambled(scrambled) {
        this.scrambled = scrambled;
    }

    getScrambledText() {
        return this.scrambledText;
    }

    setScrambledText(text) {
        this.scrambledText = text;
    }
}


/***/ }),

/***/ "./src/entities/Sign.js":
/*!******************************!*\
  !*** ./src/entities/Sign.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Sign)
/* harmony export */ });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);


class Sign extends (phaser__WEBPACK_IMPORTED_MODULE_0___default().Physics).Arcade.Image {
	text = null;
	name = null;
	visible = false;

	constructor(scene, x, y, name, text, visible) {
		super(scene, x, y);
		scene.add.existing(this);
		this.setOrigin(0, 0);
		this.setInteractive();
		this.name = name;
		this.text = text;
		this.visible = visible;
	}

	getName() {
		return this.name;
	}

	setName(name) {
		this.name = name;
	}

	getText() {
		return this.text;
	}

	setText(text) {
		this.text = text;
	}

	isVisible() {
		return this.visible;
	}

	setVisible(visible) {
		this.visible = visible;
	}
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scenes_Play__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenes/Play */ "./src/scenes/Play.js");
/* harmony import */ var _scenes_GameOver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scenes/GameOver */ "./src/scenes/GameOver.js");
/* harmony import */ var _scenes_Win__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scenes/Win */ "./src/scenes/Win.js");
/* harmony import */ var _scenes_Splash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scenes/Splash */ "./src/scenes/Splash.js");






const config = {
	type: (phaser__WEBPACK_IMPORTED_MODULE_0___default().AUTO),
	scale: {
		mode: (phaser__WEBPACK_IMPORTED_MODULE_0___default().Scale).FIT,
        autoCenter: (phaser__WEBPACK_IMPORTED_MODULE_0___default().Scale).CENTER_BOTH,
		width: 1024,
		height: 768
	},
	physics: {
		default: 'arcade',
		arcade: {
			debug: true,
			gravity: { y: 200 }
		}
	},
	scene: [_scenes_Splash__WEBPACK_IMPORTED_MODULE_4__["default"], _scenes_Play__WEBPACK_IMPORTED_MODULE_1__["default"], _scenes_GameOver__WEBPACK_IMPORTED_MODULE_2__["default"], _scenes_Win__WEBPACK_IMPORTED_MODULE_3__["default"]]
};

const game = new (phaser__WEBPACK_IMPORTED_MODULE_0___default().Game)(config);


/***/ }),

/***/ "./src/scenes/GameOver.js":
/*!********************************!*\
  !*** ./src/scenes/GameOver.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameOverScene)
/* harmony export */ });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);


class GameOverScene extends (phaser__WEBPACK_IMPORTED_MODULE_0___default().Scene) {

    constructor() {
        super('gameover');
    }

    create() {
        const text = this.add.text(512, 384, 'Game over', {
            fontSize: '22px',
            fontFamily: 'Verdana'
        });
        text.setOrigin(0.5, 0.5);
    }

}

/***/ }),

/***/ "./src/scenes/Play.js":
/*!****************************!*\
  !*** ./src/scenes/Play.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PlayScene)
/* harmony export */ });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _entities_Chest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../entities/Chest */ "./src/entities/Chest.js");
/* harmony import */ var _entities_Safe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entities/Safe */ "./src/entities/Safe.js");
/* harmony import */ var _entities_Door__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../entities/Door */ "./src/entities/Door.js");
/* harmony import */ var _entities_Sign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../entities/Sign */ "./src/entities/Sign.js");
/* harmony import */ var _entities_ScrambledSign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../entities/ScrambledSign */ "./src/entities/ScrambledSign.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants */ "./src/constants.js");








const SECRET_TILE_X = 6;
const SECRET_TILE_Y = 3;

class PlayScene extends (phaser__WEBPACK_IMPORTED_MODULE_0___default().Scene) {
	signs = null;
	door = null;
	chests = null;
	tilemap = null;
	safes = null;
	items = [];
	selectedItem = null;
	selectedRectangle = null;
	dialogGroup = null;

	constructor() {
		super('play');
	}

	preload() {
		this.load.tilemapTiledJSON(_constants__WEBPACK_IMPORTED_MODULE_6__.LoaderKey.TILEMAP, 'assets/json/escape-room-map.json');
		this.load.image(_constants__WEBPACK_IMPORTED_MODULE_6__.LoaderKey.TILESET, 'assets/img/tiles.png');
		this.load.image(_constants__WEBPACK_IMPORTED_MODULE_6__.LoaderKey.FRAME, 'assets/img/frame.png');
		this.load.spritesheet(_constants__WEBPACK_IMPORTED_MODULE_6__.LoaderKey.ITEMS, 'assets/img/items.png', { frameWidth: 16, frameHeight: 16 });
		this.load.spritesheet(_constants__WEBPACK_IMPORTED_MODULE_6__.LoaderKey.UI, 'assets/img/ui.png', { frameWidth: 32, frameHeight: 13 });
		this.load.spritesheet(_constants__WEBPACK_IMPORTED_MODULE_6__.LoaderKey.CHEST, 'assets/img/chest.png', { frameWidth: 32, frameHeight: 32 });
		this.load.spritesheet(_constants__WEBPACK_IMPORTED_MODULE_6__.LoaderKey.DOOR, 'assets/img/door.png', { frameWidth: 24, frameHeight: 32 });
		this.load.spritesheet(_constants__WEBPACK_IMPORTED_MODULE_6__.LoaderKey.SAFE, 'assets/img/safe.png', { frameWidth: 32, frameHeight: 40 });
	}

	create() {
		this.tilemap = this.createTilemap(_constants__WEBPACK_IMPORTED_MODULE_6__.LoaderKey.TILEMAP);
		const tileset = this.createTileset(this.tilemap, 'cavern_ruins', _constants__WEBPACK_IMPORTED_MODULE_6__.LoaderKey.TILESET);
		const { objectsLayer, foregroundLayer } = this.createLayers(this.tilemap, tileset);
		this.chests = this.createChests(objectsLayer);
		this.door = this.createDoor(objectsLayer);
		this.safes = this.createSafes(objectsLayer);
		this.scrambledSigns = this.createScrambledSigns(objectsLayer);
		this.signs = this.createSigns(objectsLayer);
		this.createHud();
		this.startTimer(1);
	}

	createHud() {
		const text = this.add.text(920, 20, 'Items', { fontSize: '20px', fontFamily: 'Verdana' });
	}

	updateHud() {
		for (let i = 0; i < this.items.length; i++) {
			const image = this.add.image(950, i * 50 + 80, this.items[i].texture, this.items[i].frame);
			image.setScale(2);
			image.setInteractive();
			image.on('pointerdown', () => {
				if (this.selectedRectangle) {
					this.selectedRectangle.destroy();
				}
				this.selectedItem = this.items[i];
				this.selectedRectangle = this.add.rectangle(image.x, image.y, 50, 50);
				this.selectedRectangle.setStrokeStyle(3, 0xffffff);
			});
		}
	}

	createTilemap(tilemapKey) {
		return this.make.tilemap({ key: tilemapKey });
	}

	createTileset(tilemap, tilesetKey, tilesetTextureKey) {
		return tilemap.addTilesetImage(tilesetKey, tilesetTextureKey);
	}

	createLayers(tilemap, tileset) {
		const backgroundLayer = tilemap.createLayer(_constants__WEBPACK_IMPORTED_MODULE_6__.TilemapLayer.BACKGROUND, tileset);
		const foregroundLayer = tilemap.createLayer(_constants__WEBPACK_IMPORTED_MODULE_6__.TilemapLayer.FOREGROUND, tileset);
		const objectsLayer = tilemap.getObjectLayer(_constants__WEBPACK_IMPORTED_MODULE_6__.TilemapLayer.OBJECTS);
		return { backgroundLayer, foregroundLayer, objectsLayer };
	}

	createSafes(objectsLayer) {
		const safes = [];
		objectsLayer.objects.forEach((spawnObject) => {
			if (spawnObject.type === _constants__WEBPACK_IMPORTED_MODULE_6__.EntityType.SAFE) {
				const safe = new _entities_Safe__WEBPACK_IMPORTED_MODULE_2__["default"](
					this,
					spawnObject.x,
					spawnObject.y,
					_constants__WEBPACK_IMPORTED_MODULE_6__.LoaderKey.SAFE,
					12,
					spawnObject.name,
					this.getCustomProperty(spawnObject, _constants__WEBPACK_IMPORTED_MODULE_6__.CustomProperty.COMBINATION),
					this.getCustomProperty(spawnObject, _constants__WEBPACK_IMPORTED_MODULE_6__.CustomProperty.PROMPT_MESSAGE),
					this.getCustomProperty(spawnObject, _constants__WEBPACK_IMPORTED_MODULE_6__.CustomProperty.SPAWN_ITEM_NAME),
					this.getCustomProperty(spawnObject, _constants__WEBPACK_IMPORTED_MODULE_6__.CustomProperty.SPAWN_ITEM_TEXTURE),
					this.getCustomProperty(spawnObject, _constants__WEBPACK_IMPORTED_MODULE_6__.CustomProperty.SPAWN_ITEM_FRAME),
					this.getCustomProperty(spawnObject, _constants__WEBPACK_IMPORTED_MODULE_6__.CustomProperty.SPAWN_ITEM_DESCRIPTION)
				);
				safe.on('pointerdown', () => {
					if (!safe.isOpened()) {
						const answer = window.prompt(safe.getPromptMessage());
						if (answer && answer.toLocaleUpperCase() === safe.getCombination().toLocaleUpperCase()) {
							safe.play(_constants__WEBPACK_IMPORTED_MODULE_6__.Animation.SAFE_OPEN);
							safe.setOpened(true);
							this.spawnItem(
								safe.x,
								safe.y + safe.height,
								safe.getSpawnItemName(),
								safe.getSpawnItemTexture(),
								safe.getSpawnItemFrame(),
								safe.getSpawnItemDescription()
							);
						}
					}
				});
				safes.push(safe);
			}
		});
		this.createAnimation(_constants__WEBPACK_IMPORTED_MODULE_6__.Animation.SAFE_OPEN, _constants__WEBPACK_IMPORTED_MODULE_6__.LoaderKey.SAFE, [13], 4);
		return safes;
	}

	createDoor(objectsLayer) {
		const spawnObject = objectsLayer.objects.find((spawnObject) => {
			return spawnObject.type === _constants__WEBPACK_IMPORTED_MODULE_6__.EntityType.DOOR;
		});
		const door = new _entities_Door__WEBPACK_IMPORTED_MODULE_3__["default"](
			this,
			spawnObject.x,
			spawnObject.y,
			_constants__WEBPACK_IMPORTED_MODULE_6__.LoaderKey.DOOR,
			10,
			spawnObject.name,
			this.getCustomProperty(spawnObject, _constants__WEBPACK_IMPORTED_MODULE_6__.CustomProperty.LOCKED),
			this.getCustomProperty(spawnObject, _constants__WEBPACK_IMPORTED_MODULE_6__.CustomProperty.LOCKED_MESSAGE)
		);
		door.on('pointerdown', () => {
			if (door.isLocked()) {
				this.showDialog(door.getLockedMessage());
			} else {
				door.play(_constants__WEBPACK_IMPORTED_MODULE_6__.Animation.DOOR_OPEN);
				door.setOpened(true);
				this.showDialog('Mouahahah you thought the game was over? Try to find the real escape route now!');
			}
		});
		this.createAnimation(_constants__WEBPACK_IMPORTED_MODULE_6__.Animation.DOOR_OPEN, _constants__WEBPACK_IMPORTED_MODULE_6__.LoaderKey.DOOR, [5, 0], 4);
		return door;
	}

	createChests(objectsLayer) {
		const chests = [];
		objectsLayer.objects.forEach((spawnObject) => {
			if (spawnObject.type === _constants__WEBPACK_IMPORTED_MODULE_6__.EntityType.CHEST) {
				const chest = new _entities_Chest__WEBPACK_IMPORTED_MODULE_1__["default"](
					this,
					spawnObject.x,
					spawnObject.y,
					_constants__WEBPACK_IMPORTED_MODULE_6__.LoaderKey.CHEST,
					null,
					spawnObject.name,
					this.getCustomProperty(spawnObject, _constants__WEBPACK_IMPORTED_MODULE_6__.CustomProperty.LOCKED),
					this.getCustomProperty(spawnObject, _constants__WEBPACK_IMPORTED_MODULE_6__.CustomProperty.LOCKED_MESSAGE),
					this.getCustomProperty(spawnObject, _constants__WEBPACK_IMPORTED_MODULE_6__.CustomProperty.SPAWN_ITEM_NAME),
					this.getCustomProperty(spawnObject, _constants__WEBPACK_IMPORTED_MODULE_6__.CustomProperty.SPAWN_ITEM_TEXTURE),
					this.getCustomProperty(spawnObject, _constants__WEBPACK_IMPORTED_MODULE_6__.CustomProperty.SPAWN_ITEM_FRAME),
					this.getCustomProperty(spawnObject, _constants__WEBPACK_IMPORTED_MODULE_6__.CustomProperty.SPAWN_ITEM_DESCRIPTION)
				);
				chest.on('pointerdown', () => {
					if (chest.isLocked()) {
						this.showDialog(chest.lockedMessage);
					} else {
						if (!chest.isOpened()) {
							chest.play(_constants__WEBPACK_IMPORTED_MODULE_6__.Animation.CHEST_OPEN);
							chest.setOpened(true);
							this.spawnItem(
								chest.x,
								chest.y + chest.height + 5,
								chest.getSpawnItemName(),
								chest.getSpawnItemTexture(),
								chest.getSpawnItemFrame(),
								chest.getSpawnItemDescription()
							);
						}
					}
				});
				chests.push(chest);
			}
		});
		this.createAnimation(_constants__WEBPACK_IMPORTED_MODULE_6__.Animation.CHEST_OPEN, _constants__WEBPACK_IMPORTED_MODULE_6__.LoaderKey.CHEST, [1], 8, -1);
		return chests;
	}

	createScrambledSigns(objectsLayer) {
		const signs = [];
		objectsLayer.objects.forEach((spawnObject) => {
			if (spawnObject.type === _constants__WEBPACK_IMPORTED_MODULE_6__.EntityType.SCRAMBLED_SIGN) {
				const sign = new _entities_ScrambledSign__WEBPACK_IMPORTED_MODULE_5__["default"](
					this,
					spawnObject.x,
					spawnObject.y,
					spawnObject.name,
					this.getCustomProperty(spawnObject, _constants__WEBPACK_IMPORTED_MODULE_6__.CustomProperty.TEXT),
					this.getCustomProperty(spawnObject, _constants__WEBPACK_IMPORTED_MODULE_6__.CustomProperty.VISIBLE),
					this.getCustomProperty(spawnObject, _constants__WEBPACK_IMPORTED_MODULE_6__.CustomProperty.SCRAMBLED),
					this.getCustomProperty(spawnObject, _constants__WEBPACK_IMPORTED_MODULE_6__.CustomProperty.SCRAMBLED_TEXT)
				);
				sign.on('pointerdown', () => {
					if (sign.isVisible()) {
						if (sign.isScrambled()) {
							this.showDialog(sign.getScrambledText());
						} else {
							this.showDialog(sign.getText());
						}
					}
				});
				signs.push(sign);
			}
		});
		return signs;
	}

	createSigns(objectsLayer) {
		const signs = [];
		objectsLayer.objects.forEach((spawnObject) => {
			if (spawnObject.type === _constants__WEBPACK_IMPORTED_MODULE_6__.EntityType.SIGN) {
				const sign = new _entities_Sign__WEBPACK_IMPORTED_MODULE_4__["default"](
					this,
					spawnObject.x,
					spawnObject.y,
					spawnObject.name,
					this.getCustomProperty(spawnObject, _constants__WEBPACK_IMPORTED_MODULE_6__.CustomProperty.TEXT),
					this.getCustomProperty(spawnObject, _constants__WEBPACK_IMPORTED_MODULE_6__.CustomProperty.VISIBLE)
				);
				sign.on('pointerdown', () => {
					if (sign.isVisible()) {
						this.showDialog(sign.getText());
					}
				});
				signs.push(sign);
			}
		});
		return signs;
	}

	scrambleDialogs(scrambled) {
		this.scrambledSigns.forEach((dialog) => dialog.setScrambled(scrambled));
	}

	showDialog(text, itemTexture, itemFrame, closeCallback) {
		if (this.dialogGroup) {
			this.dialogGroup.destroy(true, false);
		}
		this.dialogGroup = this.add.group();
		const dialogFrame = this.add.nineslice(450, 350, _constants__WEBPACK_IMPORTED_MODULE_6__.LoaderKey.FRAME, null, 300, 550);
		let textY = 350;
		if (itemTexture) {
			textY = 330;
			const dialogImage = this.add.image(450, 360, itemTexture, itemFrame);
			dialogImage.setScale(2);
			dialogImage.setOrigin(0.5, 0.5);
			this.dialogGroup.add(dialogImage);
		}
		const dialogText = this.add.text(450, textY, text, {
			fontFamily: 'Verdana',
			fontSize: '12px'
		});
		dialogText.setOrigin(0.5, 0.5);
		dialogText.setWordWrapWidth(250);
		const closeButton = this.add.image(585, 300, _constants__WEBPACK_IMPORTED_MODULE_6__.LoaderKey.UI, 2);
		closeButton.setInteractive();

		this.dialogGroup.add(closeButton);
		this.dialogGroup.add(dialogText);
		this.dialogGroup.add(dialogFrame);
		closeButton.on('pointerdown', () => {
			this.dialogGroup.destroy(true, false);
			if (closeCallback) {
				closeCallback();
			}
		});
	}

	createAnimation(key, texture, frames, frameRate, repeat) {
		this.anims.create({
			key,
			frames: this.anims.generateFrameNumbers(texture, { frames }),
			frameRate,
			repeat
		});
	}

	getCustomProperty(spawnObject, name) {
		let property = null;
		if (spawnObject) {
			property = spawnObject.properties.find((property) => property.name === name);
		}
		return property?.value;
	}

	getDialog(dialogs, name) {
		return dialogs.find((dialog) => dialog.name == name);
	}

	isBreakableWindowTile(tile) {
		return tile?.index === _constants__WEBPACK_IMPORTED_MODULE_6__.Tile.CLOSE_WINDOW;
	}

	breakWindow(x, y) {
		this.tilemap.putTileAt(_constants__WEBPACK_IMPORTED_MODULE_6__.Tile.OPEN_WINDOW, x, y);
	}

	getBreakableWindowsTiles(tilemap) {
		return tilemap.filterTiles((tile) => tile.index === _constants__WEBPACK_IMPORTED_MODULE_6__.Tile.CLOSE_WINDOW);
	}

	hasBreakableWindowsTiles() {
		return this.getBreakableWindowsTiles(this.tilemap).length === 0 ? false : true;
	}

	getCoffinTiles(tilemap) {
		return this.tilemap.filterTiles((tile) => _constants__WEBPACK_IMPORTED_MODULE_6__.Tile.COFFIN.includes(tile.index));
	}

	destroyCoffin() {
		this.tilemap.removeTile(this.getCoffinTiles(this.tilemap));
	}

	spawnItem(x, y, itemName, itemTexture, itemFrame, itemDescription) {
		const item = this.add.image(x, y, itemTexture, itemFrame);
		item.setScale(2);
		item.setInteractive();
		item.on('pointerdown', () => {
			item.destroy();
			this.showDialog(itemDescription, itemTexture, itemFrame, () => {
				this.items.push({
					name: itemName,
					texture: itemTexture,
					frame: itemFrame
				});
				this.updateHud();
			});
		});
	}

	isChairTile(tile) {
		return (tile?.x === 23 && tile?.y === 4) || (tile?.x === 23 && tile?.y === 5) || (tile?.x === 23 && tile?.y === 6);
	}

	moveChair() {
		this.tilemap.putTileAt(_constants__WEBPACK_IMPORTED_MODULE_6__.Tile.TOP_CHAIR, 22, 4);
		this.tilemap.putTileAt(_constants__WEBPACK_IMPORTED_MODULE_6__.Tile.MIDDLE_CHAIR, 22, 5);
		this.tilemap.putTileAt(_constants__WEBPACK_IMPORTED_MODULE_6__.Tile.BOTTOM_CHAIR, 22, 6);
		this.tilemap.putTileAt(_constants__WEBPACK_IMPORTED_MODULE_6__.Tile.SIGN, 23, 6);
		this.tilemap.removeTileAt(23, 4);
		this.tilemap.removeTileAt(23, 5);
		const sign = this.signs.find((sign) => sign.name === 'chair-sign');
		sign.setVisible(true);
	}

	isKnightTile(tile) {
		return (tile?.x === 22 && tile?.y === 15) || (tile?.x === 22 && tile?.y === 16);
	}

	destroyKnight() {
		const sign = this.signs.find((sign) => sign.name === 'knight-sign');
		sign.setVisible(true);
		this.tilemap.putTileAt(_constants__WEBPACK_IMPORTED_MODULE_6__.Tile.SIGN, 22, 15);
		this.tilemap.putTileAt(_constants__WEBPACK_IMPORTED_MODULE_6__.Tile.DESTROYED_KNIGHT, 22, 16);
	}

	isBreakableWallTile(tile) {
		return tile?.x === SECRET_TILE_X && tile?.y === SECRET_TILE_Y;
	}

	breakWall(x, y) {
		this.tilemap.putTileAt(_constants__WEBPACK_IMPORTED_MODULE_6__.Tile.HOLE_IN_WALL, x, y);
	}

	isLeftGargoyleTile(tile) {
		return (
			(tile?.x === 3 && tile?.y === 15) ||
			(tile?.x === 3 && tile?.y === 16) ||
			(tile?.x === 4 && tile?.y === 15) ||
			(tile?.x === 4 && tile?.y === 16)
		);
	}

	isRightGargoyleTile(tile) {
		return (
			(tile?.x === 8 && tile?.y === 15) ||
			(tile?.x === 8 && tile?.y === 16) ||
			(tile?.x === 9 && tile?.y === 15) ||
			(tile?.x === 9 && tile?.y === 16)
		);
	}

	moveLeftGargoyle(tile) {
		this.tilemap.putTileAt(_constants__WEBPACK_IMPORTED_MODULE_6__.Tile.TOP_LEFT_GARGOYLE, 2, 15);
		this.tilemap.putTileAt(_constants__WEBPACK_IMPORTED_MODULE_6__.Tile.TOP_RIGHT_GARGOYLE, 3, 15);
		this.tilemap.putTileAt(_constants__WEBPACK_IMPORTED_MODULE_6__.Tile.BOTTOM_LEFT_GARGOYLE, 2, 16);
		this.tilemap.putTileAt(_constants__WEBPACK_IMPORTED_MODULE_6__.Tile.BOTTOM_RIGHT_GARGOYLE, 3, 16);
		this.tilemap.removeTileAt(4, 15);
		this.tilemap.removeTileAt(4, 16);
	}

	moveRightGargoyle(tile) {
		this.tilemap.putTileAt(_constants__WEBPACK_IMPORTED_MODULE_6__.Tile.TOP_LEFT_GARGOYLE, 9, 15);
		this.tilemap.putTileAt(_constants__WEBPACK_IMPORTED_MODULE_6__.Tile.TOP_RIGHT_GARGOYLE, 10, 15);
		this.tilemap.putTileAt(_constants__WEBPACK_IMPORTED_MODULE_6__.Tile.BOTTOM_LEFT_GARGOYLE, 9, 16);
		this.tilemap.putTileAt(_constants__WEBPACK_IMPORTED_MODULE_6__.Tile.BOTTOM_RIGHT_GARGOYLE, 10, 16);
		this.tilemap.removeTileAt(8, 15);
		this.tilemap.putTileAt(_constants__WEBPACK_IMPORTED_MODULE_6__.Tile.STAIR, 8, 16);
	}

	isFireTile(tile) {
		return (
			(tile?.x === 12 && tile?.y === 18) ||
			(tile?.x === 13 && tile?.y === 18) ||
			(tile?.x === 14 && tile?.y === 18) ||
			(tile?.x === 12 && tile?.y === 19) ||
			(tile?.x === 13 && tile?.y === 19) ||
			(tile?.x === 14 && tile?.y === 19) ||
			(tile?.x === 12 && tile?.y === 20) ||
			(tile?.x === 13 && tile?.y === 20) ||
			(tile?.x === 14 && tile?.y === 20)
		);
	}

	extinguishFire() {
		this.tilemap.putTileAt(_constants__WEBPACK_IMPORTED_MODULE_6__.Tile.TOP_LEFT_WATER, 12, 18);
		this.tilemap.putTileAt(_constants__WEBPACK_IMPORTED_MODULE_6__.Tile.TOP_CENTER_WATER, 13, 18);
		this.tilemap.putTileAt(_constants__WEBPACK_IMPORTED_MODULE_6__.Tile.TOP_RIGHT_WATER, 14, 18);
		this.tilemap.putTileAt(_constants__WEBPACK_IMPORTED_MODULE_6__.Tile.MIDDLE_LEFT_WATER, 12, 19);
		this.tilemap.putTileAt(_constants__WEBPACK_IMPORTED_MODULE_6__.Tile.MIDDLE_CENTER_WATER, 13, 19);
		this.tilemap.putTileAt(_constants__WEBPACK_IMPORTED_MODULE_6__.Tile.MIDDLE_RIGHT_WATER, 14, 19);
		this.tilemap.putTileAt(_constants__WEBPACK_IMPORTED_MODULE_6__.Tile.BOTTOM_LEFT_WATER, 12, 20);
		this.tilemap.putTileAt(_constants__WEBPACK_IMPORTED_MODULE_6__.Tile.BOTTOM_CENTER_WATER, 13, 20);
		this.tilemap.putTileAt(_constants__WEBPACK_IMPORTED_MODULE_6__.Tile.BOTTOM_RIGHT_WATER, 14, 20);
	}

	isSkeletonTile(tile) {
		return tile?.x === 7 && tile?.y === 9;
	}

	isStairTile(tile) {
		return tile?.index === _constants__WEBPACK_IMPORTED_MODULE_6__.Tile.STAIR;
	}

	digSkeleton() {
		this.tilemap.putTileAt(_constants__WEBPACK_IMPORTED_MODULE_6__.Tile.DIGGED_HOLE, 7, 9);
	}

	isItemSelected(name) {
		return this.selectedItem?.name === name;
	}

	startTimer(numberOfHours) {
		if (!this.isRunning) {
			const now = new Date().getTime();
			this.countDownDate = new Date(now + numberOfHours * 60 * 60 * 1000).getTime();
			this.isRunning = false;
			this.isTimeElapsed = false;
			this.interval = setInterval(() => {
				this.isRunning = true;
				const now = new Date().getTime();
				this.timeRemaining = this.countDownDate - now;
				if (now >= this.countDownDate) {
					this.isRunning = false;
					this.isTimeElapsed = true;
					clearInterval(this.interval);
				}
			}, 1000);
		}
	}

	updateTime() {
		if (this.timeText) {
			this.timeText.destroy();
		}
		const hoursRemaining = Math.floor((this.timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		const minutesRemaining = Math.floor((this.timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
		const secondsRemaining = Math.floor((this.timeRemaining % (1000 * 60)) / 1000);
		if (this.timeRemaining) {
			this.timeText = this.add.text(915, 730, `${hoursRemaining}:${minutesRemaining}:${secondsRemaining}`, {
				fontSize: '12px',
				fontFamily: 'Verdana'
			});
		}
	}

	update() {
		this.updateTime();

		if (this.isTimeElapsed) {
			this.scene.start('gameover');
		}

		if (this.isItemSelected(_constants__WEBPACK_IMPORTED_MODULE_6__.Item.BOOK)) {
			this.scrambleDialogs(false);
		} else {
			this.scrambleDialogs(true);
		}

		if (this.isItemSelected(_constants__WEBPACK_IMPORTED_MODULE_6__.Item.KEY)) {
			const chest = this.chests.find((chest) => chest.name === 'chest');
			chest.unlock();
		} else {
			const chest = this.chests.find((chest) => chest.name === 'chest');
			chest.lock();
		}

		if (this.isItemSelected(_constants__WEBPACK_IMPORTED_MODULE_6__.Item.MASTER_KEY)) {
			this.door.unlock();
		} else {
			this.door.lock();
		}

		const worldPoint = this.input.activePointer.positionToCamera(this.cameras.main);

		// Rounds down to nearest tile
		const pointerTileX = this.tilemap.worldToTileX(worldPoint.x);
		const pointerTileY = this.tilemap.worldToTileY(worldPoint.y);

		if (this.input.manager.activePointer.isDown) {
			const tile = this.tilemap.getTileAt(pointerTileX, pointerTileY, false, _constants__WEBPACK_IMPORTED_MODULE_6__.TilemapLayer.FOREGROUND);

			if (this.isBreakableWindowTile(tile) && this.isItemSelected(_constants__WEBPACK_IMPORTED_MODULE_6__.Item.HAMMER)) {
				this.breakWindow(pointerTileX, pointerTileY);
				if (!this.hasBreakableWindowsTiles()) {
					this.destroyCoffin();
					this.spawnItem(530, 205, _constants__WEBPACK_IMPORTED_MODULE_6__.Item.RING, _constants__WEBPACK_IMPORTED_MODULE_6__.LoaderKey.ITEMS, _constants__WEBPACK_IMPORTED_MODULE_6__.Frame.RING, 'You got the power ring');
				}
			}

			// move chair when clicked on it
			if (this.isChairTile(tile)) {
				this.moveChair();
			}

			// if tile if knight
			if (this.isKnightTile(tile) && !this.knightDestroyed && this.isItemSelected(_constants__WEBPACK_IMPORTED_MODULE_6__.Item.POTION)) {
				this.knightDestroyed = true;
				this.destroyKnight();
			}

			if (this.isBreakableWallTile(tile) && !this.wallDestroyed && this.isItemSelected(_constants__WEBPACK_IMPORTED_MODULE_6__.Item.PICKAXE)) {
				this.wallDestroyed = true;
				this.breakWall(pointerTileX, pointerTileY);
				this.spawnItem(205, 140, _constants__WEBPACK_IMPORTED_MODULE_6__.Item.KEY, _constants__WEBPACK_IMPORTED_MODULE_6__.LoaderKey.ITEMS, _constants__WEBPACK_IMPORTED_MODULE_6__.Frame.KEY, 'You got the key');
			}

			// if tile is gargoyle
			if (this.isLeftGargoyleTile(tile) && !this.isLeftGargoyleMoved && this.isItemSelected(_constants__WEBPACK_IMPORTED_MODULE_6__.Item.RING)) {
				this.isLeftGargoyleMoved = true;
				this.moveLeftGargoyle();
				this.spawnItem(145, 525, _constants__WEBPACK_IMPORTED_MODULE_6__.Item.POTION, _constants__WEBPACK_IMPORTED_MODULE_6__.LoaderKey.ITEMS, _constants__WEBPACK_IMPORTED_MODULE_6__.Frame.POTION, 'You got the magic solvent');
			}

			if (this.isRightGargoyleTile(tile) && !this.isRightGargoyleMoved && this.isItemSelected(_constants__WEBPACK_IMPORTED_MODULE_6__.Item.RING) && this.door.isOpened()) {
				this.isRightGargoyleMoved = true;
				this.moveRightGargoyle();
			}

			if (this.isFireTile(tile) && !this.fireExtinguished && this.isItemSelected(_constants__WEBPACK_IMPORTED_MODULE_6__.Item.ICE_ROD)) {
				this.fireExtinguished = true;
				this.extinguishFire();
				this.spawnItem(435, 620, _constants__WEBPACK_IMPORTED_MODULE_6__.Item.PICKAXE, _constants__WEBPACK_IMPORTED_MODULE_6__.LoaderKey.ITEMS, _constants__WEBPACK_IMPORTED_MODULE_6__.Frame.PICKAXE, 'You got the pickaxe');
			}

			if (this.isSkeletonTile(tile) && !this.isDigged && this.isItemSelected(_constants__WEBPACK_IMPORTED_MODULE_6__.Item.SHOVEL)) {
				this.isDigged = true;
				this.digSkeleton();
				this.spawnItem(250, 300, _constants__WEBPACK_IMPORTED_MODULE_6__.Item.MASTER_KEY, _constants__WEBPACK_IMPORTED_MODULE_6__.LoaderKey.ITEMS, _constants__WEBPACK_IMPORTED_MODULE_6__.Frame.MASTER_KEY, 'You got the master key');
			}

			if (this.isStairTile(tile)) {
				this.scene.start('win');
			}
		}
	}
}


/***/ }),

/***/ "./src/scenes/Splash.js":
/*!******************************!*\
  !*** ./src/scenes/Splash.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SplashScene)
/* harmony export */ });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);


class SplashScene extends (phaser__WEBPACK_IMPORTED_MODULE_0___default().Scene) {

    constructor() {
        super('splash');
    }

    create() {
        const text = this.add.text(512, 250, 'Escape from MAAX dungeon', {
            fontSize: '50px',
            fontFamily: 'Verdana',
            fill: '#000'
        });
        text.setStroke('#543873', 6);
        text.setOrigin(0.5, 0.5);
        
        const clickToContinue = this.add.text(512, 400, 'Click to start the game', {
            fontSize: '12px',
            fontFamily: 'Verdana'
        });
        clickToContinue.setOrigin(0.5, 0.5);
    }

    update() {
        if (this.input.manager.activePointer.isDown) {
            this.scene.start('play');
        }
    }

}

/***/ }),

/***/ "./src/scenes/Win.js":
/*!***************************!*\
  !*** ./src/scenes/Win.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WinningScene)
/* harmony export */ });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);


class WinningScene extends (phaser__WEBPACK_IMPORTED_MODULE_0___default().Scene) {

    constructor() {
        super('win');
    }

    create() {
        const text = this.add.text(512, 384, 'Congratulations for escaping? Thank you for playing!', {
            fontSize: '22px',
            fontFamily: 'Verdana'
        });
        text.setOrigin(0.5, 0.5);
    }

}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkescape_room"] = self["webpackChunkescape_room"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRzRCO0FBQ2dCO0FBQzVDO0FBQ2Usb0JBQW9CLHNEQUFhO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QzRCO0FBQzVCO0FBQ2UsbUJBQW1CLHVEQUFjO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3REMEM7QUFDMUM7QUFDZSw0QkFBNEIsdURBQWM7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RDRDO0FBQzVDO0FBQ2UsbUJBQW1CLHNEQUFhO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3hDMEI7QUFDMUI7QUFDZSw0QkFBNEIsNkNBQUk7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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eUJBQXlCLDRDQUFJO0FBQzdCLHlCQUF5Qiw0Q0FBSTtBQUM3Qix5QkFBeUIsNENBQUk7QUFDN0IseUJBQXlCLDRDQUFJO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDRDQUFJO0FBQzdCLHlCQUF5Qiw0Q0FBSTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw0Q0FBSTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNENBQUk7QUFDN0IseUJBQXlCLDRDQUFJO0FBQzdCLHlCQUF5Qiw0Q0FBSTtBQUM3Qix5QkFBeUIsNENBQUk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw0Q0FBSTtBQUM3Qix5QkFBeUIsNENBQUk7QUFDN0IseUJBQXlCLDRDQUFJO0FBQzdCLHlCQUF5Qiw0Q0FBSTtBQUM3QjtBQUNBLHlCQUF5Qiw0Q0FBSTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDRDQUFJO0FBQzdCLHlCQUF5Qiw0Q0FBSTtBQUM3Qix5QkFBeUIsNENBQUk7QUFDN0IseUJBQXlCLDRDQUFJO0FBQzdCLHlCQUF5Qiw0Q0FBSTtBQUM3Qix5QkFBeUIsNENBQUk7QUFDN0IseUJBQXlCLDRDQUFJO0FBQzdCLHlCQUF5Qiw0Q0FBSTtBQUM3Qix5QkFBeUIsNENBQUk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNENBQUk7QUFDN0I7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDRDQUFJO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FB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V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVoREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzY2FwZS1yb29tLy4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9lc2NhcGUtcm9vbS8uL3NyYy9lbnRpdGllcy9DaGVzdC5qcyIsIndlYnBhY2s6Ly9lc2NhcGUtcm9vbS8uL3NyYy9lbnRpdGllcy9Eb29yLmpzIiwid2VicGFjazovL2VzY2FwZS1yb29tLy4vc3JjL2VudGl0aWVzL0l0ZW1Db250YWluZXIuanMiLCJ3ZWJwYWNrOi8vZXNjYXBlLXJvb20vLi9zcmMvZW50aXRpZXMvU2FmZS5qcyIsIndlYnBhY2s6Ly9lc2NhcGUtcm9vbS8uL3NyYy9lbnRpdGllcy9TY3JhbWJsZWRTaWduLmpzIiwid2VicGFjazovL2VzY2FwZS1yb29tLy4vc3JjL2VudGl0aWVzL1NpZ24uanMiLCJ3ZWJwYWNrOi8vZXNjYXBlLXJvb20vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXNjYXBlLXJvb20vLi9zcmMvc2NlbmVzL0dhbWVPdmVyLmpzIiwid2VicGFjazovL2VzY2FwZS1yb29tLy4vc3JjL3NjZW5lcy9QbGF5LmpzIiwid2VicGFjazovL2VzY2FwZS1yb29tLy4vc3JjL3NjZW5lcy9TcGxhc2guanMiLCJ3ZWJwYWNrOi8vZXNjYXBlLXJvb20vLi9zcmMvc2NlbmVzL1dpbi5qcyIsIndlYnBhY2s6Ly9lc2NhcGUtcm9vbS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lc2NhcGUtcm9vbS93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2VzY2FwZS1yb29tL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2VzY2FwZS1yb29tL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9lc2NhcGUtcm9vbS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2VzY2FwZS1yb29tL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXNjYXBlLXJvb20vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vZXNjYXBlLXJvb20vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9lc2NhcGUtcm9vbS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vZXNjYXBlLXJvb20vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEN1c3RvbVByb3BlcnR5ID0ge1xyXG5cdENPTUJJTkFUSU9OOiAnY29tYmluYXRpb24nLFxyXG5cdFBST01QVF9NRVNTQUdFOiAncHJvbXB0TWVzc2FnZScsXHJcblx0U1BBV05fSVRFTV9OQU1FOiAnc3Bhd25JdGVtJyxcclxuXHRTUEFXTl9JVEVNX1RFWFRVUkU6ICdzcGF3bkl0ZW1UZXh0dXJlJyxcclxuXHRTUEFXTl9JVEVNX0ZSQU1FOiAnc3Bhd25JdGVtRnJhbWUnLFxyXG5cdFNQQVdOX0lURU1fREVTQ1JJUFRJT046ICdzcGF3bkl0ZW1EZXNjcmlwdGlvbicsXHJcblx0TE9DS0VEOiAnbG9ja2VkJyxcclxuXHRMT0NLRURfTUVTU0FHRTogJ2xvY2tlZE1lc3NhZ2UnLFxyXG5cdFRFWFQ6ICd0ZXh0JyxcclxuXHRWSVNJQkxFOiAndmlzaWJsZScsXHJcblx0U0NSQU1CTEVEOiAnc2NyYW1ibGVkJyxcclxuXHRTQ1JBTUJMRURfVEVYVDogJ3NjcmFtYmxlZFRleHQnXHJcbn07XHJcblxyXG5jb25zdCBUaWxlbWFwTGF5ZXIgPSB7XHJcblx0QkFDS0dST1VORDogJ2JhY2tncm91bmQnLFxyXG5cdEZPUkVHUk9VTkQ6ICdmb3JlZ3JvdW5kJyxcclxuXHRPQkpFQ1RTOiAnb2JqZWN0cydcclxufTtcclxuXHJcbmNvbnN0IEVudGl0eVR5cGUgPSB7XHJcblx0RE9PUjogJ2Rvb3InLFxyXG5cdFNBRkU6ICdzYWZlJyxcclxuXHRDSEVTVDogJ2NoZXN0JyxcclxuXHRTSUdOOiAnc2lnbicsXHJcblx0U0NSQU1CTEVEX1NJR046ICdzY3JhbWJsZWQtc2lnbidcclxufTtcclxuXHJcbmNvbnN0IExvYWRlcktleSA9IHtcclxuXHRUSUxFTUFQOiAndGlsZW1hcCcsXHJcblx0VElMRVNFVDogJ3RpbGVzJyxcclxuXHRGUkFNRTogJ2ZyYW1lJyxcclxuXHRJVEVNUzogJ2l0ZW1zJyxcclxuXHRVSTogJ3VpJyxcclxuXHRDSEVTVDogJ2NoZXN0JyxcclxuXHRET09SOiAnZG9vcicsXHJcblx0U0FGRTogJ3NhZmUnXHJcbn07XHJcblxyXG5jb25zdCBUaWxlID0ge1xyXG5cdFNJR046IDE0NCxcclxuXHRDTE9TRV9XSU5ET1c6IDI1OCxcclxuXHRPUEVOX1dJTkRPVzogMjM1LFxyXG5cdENPRkZJTjogWzcxLCA5NV0sXHJcblx0REVTVFJPWUVEX0tOSUdIVDogOTYsXHJcblx0VE9QX0NIQUlSOiAzMTIsXHJcblx0TUlERExFX0NIQUlSOiAzMzYsXHJcblx0Qk9UVE9NX0NIQUlSOiAzNjAsXHJcblx0SE9MRV9JTl9XQUxMOiAyNDksXHJcblx0VE9QX0xFRlRfR0FSR09ZTEU6IDIzMixcclxuXHRUT1BfUklHSFRfR0FSR09ZTEU6IDIzMyxcclxuXHRCT1RUT01fTEVGVF9HQVJHT1lMRTogMjU2LFxyXG5cdEJPVFRPTV9SSUdIVF9HQVJHT1lMRTogMjU3LFxyXG5cdFRPUF9MRUZUX1dBVEVSOiAxMCxcclxuXHRUT1BfQ0VOVEVSX1dBVEVSOiAxMSxcclxuXHRUT1BfUklHSFRfV0FURVI6IDEyLFxyXG5cdE1JRERMRV9MRUZUX1dBVEVSOiAzNCxcclxuXHRNSURETEVfQ0VOVEVSX1dBVEVSOiAzNSxcclxuXHRNSURETEVfUklHSFRfV0FURVI6IDM2LFxyXG5cdEJPVFRPTV9MRUZUX1dBVEVSOiA1OCxcclxuXHRCT1RUT01fQ0VOVEVSX1dBVEVSOiA1OSxcclxuXHRCT1RUT01fUklHSFRfV0FURVI6IDYwLFxyXG5cdERJR0dFRF9IT0xFOiAzMTYsXHJcblx0U1RBSVI6IDEyNCxcclxufTtcclxuXHJcbmNvbnN0IEl0ZW0gPSB7XHJcblx0Qk9PSzogJ2Jvb2snLFxyXG5cdEhBTU1FUjogJ2hhbW1lcicsXHJcblx0UElDS0FYRTogJ3BpY2theGUnLFxyXG5cdEtFWTogJ2tleScsXHJcblx0TUFTVEVSX0tFWTogJ21hc3Rlci1rZXknLFxyXG5cdElDRV9ST0Q6ICdpY2Utcm9kJyxcclxuXHRQT1RJT046ICdwb3Rpb24nLFxyXG5cdFNIT1ZFTDogJ3Nob3ZlbCcsXHJcblx0UklORzogJ3JpbmcnXHJcbn07XHJcblxyXG5jb25zdCBBbmltYXRpb24gPSB7XHJcblx0RE9PUl9PUEVOOiAnZG9vci1vcGVuJyxcclxuXHRTQUZFX09QRU46ICdzYWZlLW9wZW4nLFxyXG5cdENIRVNUX09QRU46ICdjaGVzdC1vcGVuJ1xyXG59O1xyXG5cclxuY29uc3QgRnJhbWUgPSB7XHJcblx0TUFTVEVSX0tFWTogNTEsXHJcblx0UElDS0FYRTogODMsXHJcblx0UE9USU9OOiA2MSxcclxuXHRLRVk6IDUwLFxyXG5cdFJJTkc6IDEzXHJcbn07XHJcblxyXG5PYmplY3QuZnJlZXplKFRpbGVtYXBMYXllcik7XHJcbk9iamVjdC5mcmVlemUoQ3VzdG9tUHJvcGVydHkpO1xyXG5PYmplY3QuZnJlZXplKExvYWRlcktleSk7XHJcbk9iamVjdC5mcmVlemUoRW50aXR5VHlwZSk7XHJcbk9iamVjdC5mcmVlemUoVGlsZSk7XHJcbk9iamVjdC5mcmVlemUoSXRlbSk7XHJcbk9iamVjdC5mcmVlemUoQW5pbWF0aW9uKTtcclxuT2JqZWN0LmZyZWV6ZShGcmFtZSk7XHJcblxyXG5leHBvcnQgeyBUaWxlbWFwTGF5ZXIsIEN1c3RvbVByb3BlcnR5LCBMb2FkZXJLZXksIEVudGl0eVR5cGUsIFRpbGUsIEl0ZW0sIEFuaW1hdGlvbiwgRnJhbWUgfSIsImltcG9ydCBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuaW1wb3J0IEl0ZW1Db250YWluZXIgZnJvbSAnLi9JdGVtQ29udGFpbmVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoZXN0IGV4dGVuZHMgSXRlbUNvbnRhaW5lciB7XHJcblxyXG5cdGxvY2tlZCA9IHRydWU7XHJcblx0bG9ja2VkTWVzc2FnZSA9IG51bGw7XHJcblx0b3BlbmVkID0gZmFsc2U7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHNjZW5lLCB4LCB5LCB0ZXh0dXJlLCBmcmFtZSwgbmFtZSwgbG9ja2VkLCBsb2NrZWRNZXNzYWdlLCBzcGF3bkl0ZW0sIHNwYXduSXRlbVRleHR1cmUsIHNwYXduSXRlbUZyYW1lLCBzcGF3bkl0ZW1EZXNjcmlwdGlvbikge1xyXG5cdFx0c3VwZXIoc2NlbmUsIHgsIHksIHRleHR1cmUsIGZyYW1lLCBuYW1lLCBzcGF3bkl0ZW0sIHNwYXduSXRlbVRleHR1cmUsIHNwYXduSXRlbUZyYW1lLCBzcGF3bkl0ZW1EZXNjcmlwdGlvbik7XHJcblx0XHRzY2VuZS5hZGQuZXhpc3RpbmcodGhpcyk7XHJcblx0XHR0aGlzLnNldEludGVyYWN0aXZlKCk7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdFx0dGhpcy5sb2NrZWQgPSBsb2NrZWQ7XHJcblx0XHR0aGlzLmxvY2tlZE1lc3NhZ2UgPSBsb2NrZWRNZXNzYWdlO1xyXG5cdH1cclxuXHJcblx0bG9jaygpIHtcclxuXHRcdHRoaXMubG9ja2VkID0gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdHVubG9jaygpIHtcclxuXHRcdHRoaXMubG9ja2VkID0gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRpc0xvY2tlZCgpIHtcclxuXHRcdHJldHVybiB0aGlzLmxvY2tlZDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2V0TG9ja2VkTWVzc2FnZShtZXNzYWdlKSB7XHJcbiAgICAgICAgdGhpcy5sb2NrZWRNZXNzYWdlID0gbWVzc2FnZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMb2NrZWRNZXNzYWdlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxvY2tlZE1lc3NhZ2U7XHJcblx0fVxyXG5cdFxyXG5cdGlzT3BlbmVkKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMub3BlbmVkO1xyXG5cdH1cclxuXHJcblx0c2V0T3BlbmVkKG9wZW5lZCkge1xyXG5cdFx0dGhpcy5vcGVuZWQgPSBvcGVuZWQ7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvb3IgZXh0ZW5kcyBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlIHtcclxuXHRuYW1lID0gbnVsbDtcclxuXHRsb2NrZWQgPSBmYWxzZTtcclxuXHRsb2NrZWRNZXNzYWdlID0gbnVsbDtcclxuXHRvcGVuZWQgPSBmYWxzZTtcclxuXHJcblx0Y29uc3RydWN0b3Ioc2NlbmUsIHgsIHksIHRleHR1cmUsIGZyYW1lLCBuYW1lLCBsb2NrZWQsIGxvY2tlZE1lc3NhZ2UpIHtcclxuXHRcdGNvbnNvbGUubG9nKGZyYW1lKTtcclxuXHRcdHN1cGVyKHNjZW5lLCB4LCB5LCB0ZXh0dXJlLCBmcmFtZSk7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdFx0dGhpcy5sb2NrZWQgPSBsb2NrZWQ7XHJcblx0XHR0aGlzLmxvY2tlZE1lc3NhZ2UgPSBsb2NrZWRNZXNzYWdlO1xyXG5cdFx0c2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMpO1xyXG5cdFx0dGhpcy5zZXRTY2FsZSgyKTtcclxuXHRcdHRoaXMuc2V0SW50ZXJhY3RpdmUoKTtcclxuXHR9XHJcblxyXG5cdGdldE5hbWUoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5uYW1lO1xyXG5cdH1cclxuXHJcblx0c2V0TmFtZShuYW1lKSB7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdH1cclxuXHJcblx0bG9jaygpIHtcclxuXHRcdHRoaXMubG9ja2VkID0gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdHVubG9jaygpIHtcclxuXHRcdHRoaXMubG9ja2VkID0gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRpc0xvY2tlZCgpIHtcclxuXHRcdHJldHVybiB0aGlzLmxvY2tlZDtcclxuXHR9XHJcblxyXG5cdHNldExvY2tlZE1lc3NhZ2UobWVzc2FnZSkge1xyXG5cdFx0dGhpcy5sb2NrZWRNZXNzYWdlID0gbWVzc2FnZTtcclxuXHR9XHJcblxyXG5cdGdldExvY2tlZE1lc3NhZ2UoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5sb2NrZWRNZXNzYWdlO1xyXG5cdH1cclxuXHJcblx0aXNPcGVuZWQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5vcGVuZWQ7XHJcblx0fVxyXG5cclxuXHRzZXRPcGVuZWQob3BlbmVkKSB7XHJcblx0XHR0aGlzLm9wZW5lZCA9IG9wZW5lZDtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IFBoYXNlciwgeyBUaWxlbWFwcyB9IGZyb20gJ3BoYXNlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJdGVtQ29udGFpbmVyIGV4dGVuZHMgUGhhc2VyLlBoeXNpY3MuQXJjYWRlLlNwcml0ZSB7XHJcbiAgICBuYW1lID0gbnVsbDtcclxuICAgIHNwYXduSXRlbU5hbWUgPSBudWxsO1xyXG5cdHNwYXduSXRlbVRleHR1cmUgPSBudWxsO1xyXG5cdHNwYXduSXRlbUZyYW1lID0gbnVsbDtcclxuXHRzcGF3bkl0ZW1EZXNjcmlwdGlvbiA9IG51bGw7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHNjZW5lLCB4LCB5LCB0ZXh0dXJlLCBmcmFtZSwgbmFtZSwgc3Bhd25JdGVtTmFtZSwgc3Bhd25JdGVtVGV4dHVyZSwgc3Bhd25JdGVtRnJhbWUsIHNwYXduSXRlbURlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmUsIHgsIHksIHRleHR1cmUsIGZyYW1lKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuc3Bhd25JdGVtTmFtZSA9IHNwYXduSXRlbU5hbWU7XHJcbiAgICAgICAgdGhpcy5zcGF3bkl0ZW1UZXh0dXJlID0gc3Bhd25JdGVtVGV4dHVyZTtcclxuICAgICAgICB0aGlzLnNwYXduSXRlbUZyYW1lID0gc3Bhd25JdGVtRnJhbWU7XHJcbiAgICAgICAgdGhpcy5zcGF3bkl0ZW1EZXNjcmlwdGlvbiA9IHNwYXduSXRlbURlc2NyaXB0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE5hbWUobmFtZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFNwYXduSXRlbShzcGF3bkl0ZW1OYW1lKSB7XHJcbiAgICAgICAgdGhpcy5zcGF3bkl0ZW1OYW1lID0gc3Bhd25JdGVtTmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTcGF3bkl0ZW1OYW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNwYXduSXRlbU5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3Bhd25JdGVtVGV4dHVyZSh0ZXh0dXJlKSB7XHJcbiAgICAgICAgdGhpcy5zcGF3bkl0ZW1UZXh0dXJlID0gdGV4dHVyZVxyXG4gICAgfVxyXG5cclxuICAgIGdldFNwYXduSXRlbVRleHR1cmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3Bhd25JdGVtVGV4dHVyZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTcGF3bkl0ZW1GcmFtZShmcmFtZSkge1xyXG4gICAgICAgIHRoaXMuc3Bhd25JdGVtRnJhbWUgPSBmcmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTcGF3bkl0ZW1GcmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zcGF3bkl0ZW1GcmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTcGF3bkl0ZW1EZXNjcmlwdGlvbihkZXNjcmlwdGlvbikge1xyXG4gICAgICAgdGhpcy5zcGF3bkl0ZW1EZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uOyBcclxuICAgIH1cclxuXHJcbiAgICBnZXRTcGF3bkl0ZW1EZXNjcmlwdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zcGF3bkl0ZW1EZXNjcmlwdGlvbjtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgSXRlbUNvbnRhaW5lciBmcm9tICcuL0l0ZW1Db250YWluZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2FmZSBleHRlbmRzIEl0ZW1Db250YWluZXIge1xyXG5cclxuICAgIGNvbWJpbmF0aW9uID0gbnVsbDtcclxuICAgIHByb21wdE1lc3NhZ2UgPSBudWxsO1xyXG4gICAgb3BlbmVkID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmUsIHgsIHksIHRleHR1cmUsIGZyYW1lLCBuYW1lLCBjb21iaW5hdGlvbiwgcHJvbXB0TWVzc2FnZSwgc3Bhd25JdGVtLCBzcGF3bkl0ZW1UZXh0dXJlLCBzcGF3bkl0ZW1GcmFtZSwgc3Bhd25JdGVtRGVzY3JpcHRpb24pIHtcclxuXHRcdHN1cGVyKHNjZW5lLCB4LCB5LCB0ZXh0dXJlLCBmcmFtZSwgbmFtZSwgc3Bhd25JdGVtLCBzcGF3bkl0ZW1UZXh0dXJlLCBzcGF3bkl0ZW1GcmFtZSwgc3Bhd25JdGVtRGVzY3JpcHRpb24pO1xyXG5cdFx0c2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMpO1xyXG5cdFx0dGhpcy5zZXRJbnRlcmFjdGl2ZSgpO1xyXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcclxuXHRcdHRoaXMuY29tYmluYXRpb24gPSBjb21iaW5hdGlvbjtcclxuXHRcdHRoaXMucHJvbXB0TWVzc2FnZSA9IHByb21wdE1lc3NhZ2U7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldENvbWJpbmF0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbWJpbmF0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENvbWJpbmF0aW9uKGNvbWJpbmF0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5jb21iaW5hdGlvbiA9IGNvbWJpbmF0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFByb21wdE1lc3NhZ2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvbXB0TWVzc2FnZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQcm9tcHRNZXNzYWdlKG1lc3NhZ2UpIHtcclxuICAgICAgICB0aGlzLnByb21wdE1lc3NhZ2UgPSBtZXNzYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIGlzT3BlbmVkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9wZW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRPcGVuZWQob3BlbmVkKSB7XHJcbiAgICAgICAgdGhpcy5vcGVuZWQ7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgU2lnbiBmcm9tICcuL1NpZ24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NyYW1ibGVkU2lnbiBleHRlbmRzIFNpZ24ge1xyXG5cclxuICAgIHNjcmFtYmxlZCA9IHRydWU7XHJcbiAgICBzY3JhbWJsZWRUZXh0ID0gbnVsbDtcclxuXHJcblx0Y29uc3RydWN0b3Ioc2NlbmUsIHgsIHksIG5hbWUsIHRleHQsIHZpc2libGUsIHNjcmFtYmxlZCwgc2NyYW1ibGVkVGV4dCkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lLCB4LCB5LCBuYW1lLCB0ZXh0LCB2aXNpYmxlKTtcclxuICAgICAgICB0aGlzLnNjcmFtYmxlZCA9IHNjcmFtYmxlZDtcclxuICAgICAgICB0aGlzLnNjcmFtYmxlZFRleHQgPSBzY3JhbWJsZWRUZXh0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpc1NjcmFtYmxlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY3JhbWJsZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U2NyYW1ibGVkKHNjcmFtYmxlZCkge1xyXG4gICAgICAgIHRoaXMuc2NyYW1ibGVkID0gc2NyYW1ibGVkO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNjcmFtYmxlZFRleHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NyYW1ibGVkVGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTY3JhbWJsZWRUZXh0KHRleHQpIHtcclxuICAgICAgICB0aGlzLnNjcmFtYmxlZFRleHQgPSB0ZXh0O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZ24gZXh0ZW5kcyBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuSW1hZ2Uge1xyXG5cdHRleHQgPSBudWxsO1xyXG5cdG5hbWUgPSBudWxsO1xyXG5cdHZpc2libGUgPSBmYWxzZTtcclxuXHJcblx0Y29uc3RydWN0b3Ioc2NlbmUsIHgsIHksIG5hbWUsIHRleHQsIHZpc2libGUpIHtcclxuXHRcdHN1cGVyKHNjZW5lLCB4LCB5KTtcclxuXHRcdHNjZW5lLmFkZC5leGlzdGluZyh0aGlzKTtcclxuXHRcdHRoaXMuc2V0T3JpZ2luKDAsIDApO1xyXG5cdFx0dGhpcy5zZXRJbnRlcmFjdGl2ZSgpO1xyXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcclxuXHRcdHRoaXMudGV4dCA9IHRleHQ7XHJcblx0XHR0aGlzLnZpc2libGUgPSB2aXNpYmxlO1xyXG5cdH1cclxuXHJcblx0Z2V0TmFtZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLm5hbWU7XHJcblx0fVxyXG5cclxuXHRzZXROYW1lKG5hbWUpIHtcclxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XHJcblx0fVxyXG5cclxuXHRnZXRUZXh0KCkge1xyXG5cdFx0cmV0dXJuIHRoaXMudGV4dDtcclxuXHR9XHJcblxyXG5cdHNldFRleHQodGV4dCkge1xyXG5cdFx0dGhpcy50ZXh0ID0gdGV4dDtcclxuXHR9XHJcblxyXG5cdGlzVmlzaWJsZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLnZpc2libGU7XHJcblx0fVxyXG5cclxuXHRzZXRWaXNpYmxlKHZpc2libGUpIHtcclxuXHRcdHRoaXMudmlzaWJsZSA9IHZpc2libGU7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuaW1wb3J0IFBsYXlTY2VuZSBmcm9tICcuL3NjZW5lcy9QbGF5JztcclxuaW1wb3J0IEdhbWVPdmVyU2NlbmUgIGZyb20gJy4vc2NlbmVzL0dhbWVPdmVyJztcclxuaW1wb3J0IFdpblNjZW5lIGZyb20gJy4vc2NlbmVzL1dpbic7XHJcbmltcG9ydCBTcGxhc2hTY2VuZSBmcm9tICcuL3NjZW5lcy9TcGxhc2gnO1xyXG5cclxuY29uc3QgY29uZmlnID0ge1xyXG5cdHR5cGU6IFBoYXNlci5BVVRPLFxyXG5cdHNjYWxlOiB7XHJcblx0XHRtb2RlOiBQaGFzZXIuU2NhbGUuRklULFxyXG4gICAgICAgIGF1dG9DZW50ZXI6IFBoYXNlci5TY2FsZS5DRU5URVJfQk9USCxcclxuXHRcdHdpZHRoOiAxMDI0LFxyXG5cdFx0aGVpZ2h0OiA3NjhcclxuXHR9LFxyXG5cdHBoeXNpY3M6IHtcclxuXHRcdGRlZmF1bHQ6ICdhcmNhZGUnLFxyXG5cdFx0YXJjYWRlOiB7XHJcblx0XHRcdGRlYnVnOiB0cnVlLFxyXG5cdFx0XHRncmF2aXR5OiB7IHk6IDIwMCB9XHJcblx0XHR9XHJcblx0fSxcclxuXHRzY2VuZTogW1NwbGFzaFNjZW5lLCBQbGF5U2NlbmUsIEdhbWVPdmVyU2NlbmUsIFdpblNjZW5lXVxyXG59O1xyXG5cclxuY29uc3QgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZShjb25maWcpO1xyXG4iLCJpbXBvcnQgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lT3ZlclNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcignZ2FtZW92ZXInKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGUoKSB7XHJcbiAgICAgICAgY29uc3QgdGV4dCA9IHRoaXMuYWRkLnRleHQoNTEyLCAzODQsICdHYW1lIG92ZXInLCB7XHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMjJweCcsXHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdWZXJkYW5hJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRleHQuc2V0T3JpZ2luKDAuNSwgMC41KTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCBDaGVzdCBmcm9tICcuLi9lbnRpdGllcy9DaGVzdCc7XHJcbmltcG9ydCBTYWZlIGZyb20gJy4uL2VudGl0aWVzL1NhZmUnO1xyXG5pbXBvcnQgRG9vciBmcm9tICcuLi9lbnRpdGllcy9Eb29yJztcclxuaW1wb3J0IFNpZ24gZnJvbSAnLi4vZW50aXRpZXMvU2lnbic7XHJcbmltcG9ydCBTY3JhbWJsZWRTaWduIGZyb20gJy4uL2VudGl0aWVzL1NjcmFtYmxlZFNpZ24nO1xyXG5pbXBvcnQgeyBDdXN0b21Qcm9wZXJ0eSwgVGlsZW1hcExheWVyLCBFbnRpdHlUeXBlLCBMb2FkZXJLZXksIFRpbGUsIEl0ZW0sIEFuaW1hdGlvbiwgRnJhbWUgfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5cclxuY29uc3QgU0VDUkVUX1RJTEVfWCA9IDY7XHJcbmNvbnN0IFNFQ1JFVF9USUxFX1kgPSAzO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuXHRzaWducyA9IG51bGw7XHJcblx0ZG9vciA9IG51bGw7XHJcblx0Y2hlc3RzID0gbnVsbDtcclxuXHR0aWxlbWFwID0gbnVsbDtcclxuXHRzYWZlcyA9IG51bGw7XHJcblx0aXRlbXMgPSBbXTtcclxuXHRzZWxlY3RlZEl0ZW0gPSBudWxsO1xyXG5cdHNlbGVjdGVkUmVjdGFuZ2xlID0gbnVsbDtcclxuXHRkaWFsb2dHcm91cCA9IG51bGw7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoJ3BsYXknKTtcclxuXHR9XHJcblxyXG5cdHByZWxvYWQoKSB7XHJcblx0XHR0aGlzLmxvYWQudGlsZW1hcFRpbGVkSlNPTihMb2FkZXJLZXkuVElMRU1BUCwgJ2Fzc2V0cy9qc29uL2VzY2FwZS1yb29tLW1hcC5qc29uJyk7XHJcblx0XHR0aGlzLmxvYWQuaW1hZ2UoTG9hZGVyS2V5LlRJTEVTRVQsICdhc3NldHMvaW1nL3RpbGVzLnBuZycpO1xyXG5cdFx0dGhpcy5sb2FkLmltYWdlKExvYWRlcktleS5GUkFNRSwgJ2Fzc2V0cy9pbWcvZnJhbWUucG5nJyk7XHJcblx0XHR0aGlzLmxvYWQuc3ByaXRlc2hlZXQoTG9hZGVyS2V5LklURU1TLCAnYXNzZXRzL2ltZy9pdGVtcy5wbmcnLCB7IGZyYW1lV2lkdGg6IDE2LCBmcmFtZUhlaWdodDogMTYgfSk7XHJcblx0XHR0aGlzLmxvYWQuc3ByaXRlc2hlZXQoTG9hZGVyS2V5LlVJLCAnYXNzZXRzL2ltZy91aS5wbmcnLCB7IGZyYW1lV2lkdGg6IDMyLCBmcmFtZUhlaWdodDogMTMgfSk7XHJcblx0XHR0aGlzLmxvYWQuc3ByaXRlc2hlZXQoTG9hZGVyS2V5LkNIRVNULCAnYXNzZXRzL2ltZy9jaGVzdC5wbmcnLCB7IGZyYW1lV2lkdGg6IDMyLCBmcmFtZUhlaWdodDogMzIgfSk7XHJcblx0XHR0aGlzLmxvYWQuc3ByaXRlc2hlZXQoTG9hZGVyS2V5LkRPT1IsICdhc3NldHMvaW1nL2Rvb3IucG5nJywgeyBmcmFtZVdpZHRoOiAyNCwgZnJhbWVIZWlnaHQ6IDMyIH0pO1xyXG5cdFx0dGhpcy5sb2FkLnNwcml0ZXNoZWV0KExvYWRlcktleS5TQUZFLCAnYXNzZXRzL2ltZy9zYWZlLnBuZycsIHsgZnJhbWVXaWR0aDogMzIsIGZyYW1lSGVpZ2h0OiA0MCB9KTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZSgpIHtcclxuXHRcdHRoaXMudGlsZW1hcCA9IHRoaXMuY3JlYXRlVGlsZW1hcChMb2FkZXJLZXkuVElMRU1BUCk7XHJcblx0XHRjb25zdCB0aWxlc2V0ID0gdGhpcy5jcmVhdGVUaWxlc2V0KHRoaXMudGlsZW1hcCwgJ2NhdmVybl9ydWlucycsIExvYWRlcktleS5USUxFU0VUKTtcclxuXHRcdGNvbnN0IHsgb2JqZWN0c0xheWVyLCBmb3JlZ3JvdW5kTGF5ZXIgfSA9IHRoaXMuY3JlYXRlTGF5ZXJzKHRoaXMudGlsZW1hcCwgdGlsZXNldCk7XHJcblx0XHR0aGlzLmNoZXN0cyA9IHRoaXMuY3JlYXRlQ2hlc3RzKG9iamVjdHNMYXllcik7XHJcblx0XHR0aGlzLmRvb3IgPSB0aGlzLmNyZWF0ZURvb3Iob2JqZWN0c0xheWVyKTtcclxuXHRcdHRoaXMuc2FmZXMgPSB0aGlzLmNyZWF0ZVNhZmVzKG9iamVjdHNMYXllcik7XHJcblx0XHR0aGlzLnNjcmFtYmxlZFNpZ25zID0gdGhpcy5jcmVhdGVTY3JhbWJsZWRTaWducyhvYmplY3RzTGF5ZXIpO1xyXG5cdFx0dGhpcy5zaWducyA9IHRoaXMuY3JlYXRlU2lnbnMob2JqZWN0c0xheWVyKTtcclxuXHRcdHRoaXMuY3JlYXRlSHVkKCk7XHJcblx0XHR0aGlzLnN0YXJ0VGltZXIoMSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVIdWQoKSB7XHJcblx0XHRjb25zdCB0ZXh0ID0gdGhpcy5hZGQudGV4dCg5MjAsIDIwLCAnSXRlbXMnLCB7IGZvbnRTaXplOiAnMjBweCcsIGZvbnRGYW1pbHk6ICdWZXJkYW5hJyB9KTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZUh1ZCgpIHtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRjb25zdCBpbWFnZSA9IHRoaXMuYWRkLmltYWdlKDk1MCwgaSAqIDUwICsgODAsIHRoaXMuaXRlbXNbaV0udGV4dHVyZSwgdGhpcy5pdGVtc1tpXS5mcmFtZSk7XHJcblx0XHRcdGltYWdlLnNldFNjYWxlKDIpO1xyXG5cdFx0XHRpbWFnZS5zZXRJbnRlcmFjdGl2ZSgpO1xyXG5cdFx0XHRpbWFnZS5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XHJcblx0XHRcdFx0aWYgKHRoaXMuc2VsZWN0ZWRSZWN0YW5nbGUpIHtcclxuXHRcdFx0XHRcdHRoaXMuc2VsZWN0ZWRSZWN0YW5nbGUuZGVzdHJveSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLnNlbGVjdGVkSXRlbSA9IHRoaXMuaXRlbXNbaV07XHJcblx0XHRcdFx0dGhpcy5zZWxlY3RlZFJlY3RhbmdsZSA9IHRoaXMuYWRkLnJlY3RhbmdsZShpbWFnZS54LCBpbWFnZS55LCA1MCwgNTApO1xyXG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWRSZWN0YW5nbGUuc2V0U3Ryb2tlU3R5bGUoMywgMHhmZmZmZmYpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNyZWF0ZVRpbGVtYXAodGlsZW1hcEtleSkge1xyXG5cdFx0cmV0dXJuIHRoaXMubWFrZS50aWxlbWFwKHsga2V5OiB0aWxlbWFwS2V5IH0pO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlVGlsZXNldCh0aWxlbWFwLCB0aWxlc2V0S2V5LCB0aWxlc2V0VGV4dHVyZUtleSkge1xyXG5cdFx0cmV0dXJuIHRpbGVtYXAuYWRkVGlsZXNldEltYWdlKHRpbGVzZXRLZXksIHRpbGVzZXRUZXh0dXJlS2V5KTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZUxheWVycyh0aWxlbWFwLCB0aWxlc2V0KSB7XHJcblx0XHRjb25zdCBiYWNrZ3JvdW5kTGF5ZXIgPSB0aWxlbWFwLmNyZWF0ZUxheWVyKFRpbGVtYXBMYXllci5CQUNLR1JPVU5ELCB0aWxlc2V0KTtcclxuXHRcdGNvbnN0IGZvcmVncm91bmRMYXllciA9IHRpbGVtYXAuY3JlYXRlTGF5ZXIoVGlsZW1hcExheWVyLkZPUkVHUk9VTkQsIHRpbGVzZXQpO1xyXG5cdFx0Y29uc3Qgb2JqZWN0c0xheWVyID0gdGlsZW1hcC5nZXRPYmplY3RMYXllcihUaWxlbWFwTGF5ZXIuT0JKRUNUUyk7XHJcblx0XHRyZXR1cm4geyBiYWNrZ3JvdW5kTGF5ZXIsIGZvcmVncm91bmRMYXllciwgb2JqZWN0c0xheWVyIH07XHJcblx0fVxyXG5cclxuXHRjcmVhdGVTYWZlcyhvYmplY3RzTGF5ZXIpIHtcclxuXHRcdGNvbnN0IHNhZmVzID0gW107XHJcblx0XHRvYmplY3RzTGF5ZXIub2JqZWN0cy5mb3JFYWNoKChzcGF3bk9iamVjdCkgPT4ge1xyXG5cdFx0XHRpZiAoc3Bhd25PYmplY3QudHlwZSA9PT0gRW50aXR5VHlwZS5TQUZFKSB7XHJcblx0XHRcdFx0Y29uc3Qgc2FmZSA9IG5ldyBTYWZlKFxyXG5cdFx0XHRcdFx0dGhpcyxcclxuXHRcdFx0XHRcdHNwYXduT2JqZWN0LngsXHJcblx0XHRcdFx0XHRzcGF3bk9iamVjdC55LFxyXG5cdFx0XHRcdFx0TG9hZGVyS2V5LlNBRkUsXHJcblx0XHRcdFx0XHQxMixcclxuXHRcdFx0XHRcdHNwYXduT2JqZWN0Lm5hbWUsXHJcblx0XHRcdFx0XHR0aGlzLmdldEN1c3RvbVByb3BlcnR5KHNwYXduT2JqZWN0LCBDdXN0b21Qcm9wZXJ0eS5DT01CSU5BVElPTiksXHJcblx0XHRcdFx0XHR0aGlzLmdldEN1c3RvbVByb3BlcnR5KHNwYXduT2JqZWN0LCBDdXN0b21Qcm9wZXJ0eS5QUk9NUFRfTUVTU0FHRSksXHJcblx0XHRcdFx0XHR0aGlzLmdldEN1c3RvbVByb3BlcnR5KHNwYXduT2JqZWN0LCBDdXN0b21Qcm9wZXJ0eS5TUEFXTl9JVEVNX05BTUUpLFxyXG5cdFx0XHRcdFx0dGhpcy5nZXRDdXN0b21Qcm9wZXJ0eShzcGF3bk9iamVjdCwgQ3VzdG9tUHJvcGVydHkuU1BBV05fSVRFTV9URVhUVVJFKSxcclxuXHRcdFx0XHRcdHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkoc3Bhd25PYmplY3QsIEN1c3RvbVByb3BlcnR5LlNQQVdOX0lURU1fRlJBTUUpLFxyXG5cdFx0XHRcdFx0dGhpcy5nZXRDdXN0b21Qcm9wZXJ0eShzcGF3bk9iamVjdCwgQ3VzdG9tUHJvcGVydHkuU1BBV05fSVRFTV9ERVNDUklQVElPTilcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdHNhZmUub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKCFzYWZlLmlzT3BlbmVkKCkpIHtcclxuXHRcdFx0XHRcdFx0Y29uc3QgYW5zd2VyID0gd2luZG93LnByb21wdChzYWZlLmdldFByb21wdE1lc3NhZ2UoKSk7XHJcblx0XHRcdFx0XHRcdGlmIChhbnN3ZXIgJiYgYW5zd2VyLnRvTG9jYWxlVXBwZXJDYXNlKCkgPT09IHNhZmUuZ2V0Q29tYmluYXRpb24oKS50b0xvY2FsZVVwcGVyQ2FzZSgpKSB7XHJcblx0XHRcdFx0XHRcdFx0c2FmZS5wbGF5KEFuaW1hdGlvbi5TQUZFX09QRU4pO1xyXG5cdFx0XHRcdFx0XHRcdHNhZmUuc2V0T3BlbmVkKHRydWUpO1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuc3Bhd25JdGVtKFxyXG5cdFx0XHRcdFx0XHRcdFx0c2FmZS54LFxyXG5cdFx0XHRcdFx0XHRcdFx0c2FmZS55ICsgc2FmZS5oZWlnaHQsXHJcblx0XHRcdFx0XHRcdFx0XHRzYWZlLmdldFNwYXduSXRlbU5hbWUoKSxcclxuXHRcdFx0XHRcdFx0XHRcdHNhZmUuZ2V0U3Bhd25JdGVtVGV4dHVyZSgpLFxyXG5cdFx0XHRcdFx0XHRcdFx0c2FmZS5nZXRTcGF3bkl0ZW1GcmFtZSgpLFxyXG5cdFx0XHRcdFx0XHRcdFx0c2FmZS5nZXRTcGF3bkl0ZW1EZXNjcmlwdGlvbigpXHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHNhZmVzLnB1c2goc2FmZSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5jcmVhdGVBbmltYXRpb24oQW5pbWF0aW9uLlNBRkVfT1BFTiwgTG9hZGVyS2V5LlNBRkUsIFsxM10sIDQpO1xyXG5cdFx0cmV0dXJuIHNhZmVzO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlRG9vcihvYmplY3RzTGF5ZXIpIHtcclxuXHRcdGNvbnN0IHNwYXduT2JqZWN0ID0gb2JqZWN0c0xheWVyLm9iamVjdHMuZmluZCgoc3Bhd25PYmplY3QpID0+IHtcclxuXHRcdFx0cmV0dXJuIHNwYXduT2JqZWN0LnR5cGUgPT09IEVudGl0eVR5cGUuRE9PUjtcclxuXHRcdH0pO1xyXG5cdFx0Y29uc3QgZG9vciA9IG5ldyBEb29yKFxyXG5cdFx0XHR0aGlzLFxyXG5cdFx0XHRzcGF3bk9iamVjdC54LFxyXG5cdFx0XHRzcGF3bk9iamVjdC55LFxyXG5cdFx0XHRMb2FkZXJLZXkuRE9PUixcclxuXHRcdFx0MTAsXHJcblx0XHRcdHNwYXduT2JqZWN0Lm5hbWUsXHJcblx0XHRcdHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkoc3Bhd25PYmplY3QsIEN1c3RvbVByb3BlcnR5LkxPQ0tFRCksXHJcblx0XHRcdHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkoc3Bhd25PYmplY3QsIEN1c3RvbVByb3BlcnR5LkxPQ0tFRF9NRVNTQUdFKVxyXG5cdFx0KTtcclxuXHRcdGRvb3Iub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xyXG5cdFx0XHRpZiAoZG9vci5pc0xvY2tlZCgpKSB7XHJcblx0XHRcdFx0dGhpcy5zaG93RGlhbG9nKGRvb3IuZ2V0TG9ja2VkTWVzc2FnZSgpKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRkb29yLnBsYXkoQW5pbWF0aW9uLkRPT1JfT1BFTik7XHJcblx0XHRcdFx0ZG9vci5zZXRPcGVuZWQodHJ1ZSk7XHJcblx0XHRcdFx0dGhpcy5zaG93RGlhbG9nKCdNb3VhaGFoYWggeW91IHRob3VnaHQgdGhlIGdhbWUgd2FzIG92ZXI/IFRyeSB0byBmaW5kIHRoZSByZWFsIGVzY2FwZSByb3V0ZSBub3chJyk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5jcmVhdGVBbmltYXRpb24oQW5pbWF0aW9uLkRPT1JfT1BFTiwgTG9hZGVyS2V5LkRPT1IsIFs1LCAwXSwgNCk7XHJcblx0XHRyZXR1cm4gZG9vcjtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZUNoZXN0cyhvYmplY3RzTGF5ZXIpIHtcclxuXHRcdGNvbnN0IGNoZXN0cyA9IFtdO1xyXG5cdFx0b2JqZWN0c0xheWVyLm9iamVjdHMuZm9yRWFjaCgoc3Bhd25PYmplY3QpID0+IHtcclxuXHRcdFx0aWYgKHNwYXduT2JqZWN0LnR5cGUgPT09IEVudGl0eVR5cGUuQ0hFU1QpIHtcclxuXHRcdFx0XHRjb25zdCBjaGVzdCA9IG5ldyBDaGVzdChcclxuXHRcdFx0XHRcdHRoaXMsXHJcblx0XHRcdFx0XHRzcGF3bk9iamVjdC54LFxyXG5cdFx0XHRcdFx0c3Bhd25PYmplY3QueSxcclxuXHRcdFx0XHRcdExvYWRlcktleS5DSEVTVCxcclxuXHRcdFx0XHRcdG51bGwsXHJcblx0XHRcdFx0XHRzcGF3bk9iamVjdC5uYW1lLFxyXG5cdFx0XHRcdFx0dGhpcy5nZXRDdXN0b21Qcm9wZXJ0eShzcGF3bk9iamVjdCwgQ3VzdG9tUHJvcGVydHkuTE9DS0VEKSxcclxuXHRcdFx0XHRcdHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkoc3Bhd25PYmplY3QsIEN1c3RvbVByb3BlcnR5LkxPQ0tFRF9NRVNTQUdFKSxcclxuXHRcdFx0XHRcdHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkoc3Bhd25PYmplY3QsIEN1c3RvbVByb3BlcnR5LlNQQVdOX0lURU1fTkFNRSksXHJcblx0XHRcdFx0XHR0aGlzLmdldEN1c3RvbVByb3BlcnR5KHNwYXduT2JqZWN0LCBDdXN0b21Qcm9wZXJ0eS5TUEFXTl9JVEVNX1RFWFRVUkUpLFxyXG5cdFx0XHRcdFx0dGhpcy5nZXRDdXN0b21Qcm9wZXJ0eShzcGF3bk9iamVjdCwgQ3VzdG9tUHJvcGVydHkuU1BBV05fSVRFTV9GUkFNRSksXHJcblx0XHRcdFx0XHR0aGlzLmdldEN1c3RvbVByb3BlcnR5KHNwYXduT2JqZWN0LCBDdXN0b21Qcm9wZXJ0eS5TUEFXTl9JVEVNX0RFU0NSSVBUSU9OKVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0Y2hlc3Qub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKGNoZXN0LmlzTG9ja2VkKCkpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5zaG93RGlhbG9nKGNoZXN0LmxvY2tlZE1lc3NhZ2UpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0aWYgKCFjaGVzdC5pc09wZW5lZCgpKSB7XHJcblx0XHRcdFx0XHRcdFx0Y2hlc3QucGxheShBbmltYXRpb24uQ0hFU1RfT1BFTik7XHJcblx0XHRcdFx0XHRcdFx0Y2hlc3Quc2V0T3BlbmVkKHRydWUpO1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuc3Bhd25JdGVtKFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2hlc3QueCxcclxuXHRcdFx0XHRcdFx0XHRcdGNoZXN0LnkgKyBjaGVzdC5oZWlnaHQgKyA1LFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2hlc3QuZ2V0U3Bhd25JdGVtTmFtZSgpLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2hlc3QuZ2V0U3Bhd25JdGVtVGV4dHVyZSgpLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2hlc3QuZ2V0U3Bhd25JdGVtRnJhbWUoKSxcclxuXHRcdFx0XHRcdFx0XHRcdGNoZXN0LmdldFNwYXduSXRlbURlc2NyaXB0aW9uKClcclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0Y2hlc3RzLnB1c2goY2hlc3QpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuY3JlYXRlQW5pbWF0aW9uKEFuaW1hdGlvbi5DSEVTVF9PUEVOLCBMb2FkZXJLZXkuQ0hFU1QsIFsxXSwgOCwgLTEpO1xyXG5cdFx0cmV0dXJuIGNoZXN0cztcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVNjcmFtYmxlZFNpZ25zKG9iamVjdHNMYXllcikge1xyXG5cdFx0Y29uc3Qgc2lnbnMgPSBbXTtcclxuXHRcdG9iamVjdHNMYXllci5vYmplY3RzLmZvckVhY2goKHNwYXduT2JqZWN0KSA9PiB7XHJcblx0XHRcdGlmIChzcGF3bk9iamVjdC50eXBlID09PSBFbnRpdHlUeXBlLlNDUkFNQkxFRF9TSUdOKSB7XHJcblx0XHRcdFx0Y29uc3Qgc2lnbiA9IG5ldyBTY3JhbWJsZWRTaWduKFxyXG5cdFx0XHRcdFx0dGhpcyxcclxuXHRcdFx0XHRcdHNwYXduT2JqZWN0LngsXHJcblx0XHRcdFx0XHRzcGF3bk9iamVjdC55LFxyXG5cdFx0XHRcdFx0c3Bhd25PYmplY3QubmFtZSxcclxuXHRcdFx0XHRcdHRoaXMuZ2V0Q3VzdG9tUHJvcGVydHkoc3Bhd25PYmplY3QsIEN1c3RvbVByb3BlcnR5LlRFWFQpLFxyXG5cdFx0XHRcdFx0dGhpcy5nZXRDdXN0b21Qcm9wZXJ0eShzcGF3bk9iamVjdCwgQ3VzdG9tUHJvcGVydHkuVklTSUJMRSksXHJcblx0XHRcdFx0XHR0aGlzLmdldEN1c3RvbVByb3BlcnR5KHNwYXduT2JqZWN0LCBDdXN0b21Qcm9wZXJ0eS5TQ1JBTUJMRUQpLFxyXG5cdFx0XHRcdFx0dGhpcy5nZXRDdXN0b21Qcm9wZXJ0eShzcGF3bk9iamVjdCwgQ3VzdG9tUHJvcGVydHkuU0NSQU1CTEVEX1RFWFQpXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0XHRzaWduLm9uKCdwb2ludGVyZG93bicsICgpID0+IHtcclxuXHRcdFx0XHRcdGlmIChzaWduLmlzVmlzaWJsZSgpKSB7XHJcblx0XHRcdFx0XHRcdGlmIChzaWduLmlzU2NyYW1ibGVkKCkpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnNob3dEaWFsb2coc2lnbi5nZXRTY3JhbWJsZWRUZXh0KCkpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuc2hvd0RpYWxvZyhzaWduLmdldFRleHQoKSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRzaWducy5wdXNoKHNpZ24pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBzaWducztcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVNpZ25zKG9iamVjdHNMYXllcikge1xyXG5cdFx0Y29uc3Qgc2lnbnMgPSBbXTtcclxuXHRcdG9iamVjdHNMYXllci5vYmplY3RzLmZvckVhY2goKHNwYXduT2JqZWN0KSA9PiB7XHJcblx0XHRcdGlmIChzcGF3bk9iamVjdC50eXBlID09PSBFbnRpdHlUeXBlLlNJR04pIHtcclxuXHRcdFx0XHRjb25zdCBzaWduID0gbmV3IFNpZ24oXHJcblx0XHRcdFx0XHR0aGlzLFxyXG5cdFx0XHRcdFx0c3Bhd25PYmplY3QueCxcclxuXHRcdFx0XHRcdHNwYXduT2JqZWN0LnksXHJcblx0XHRcdFx0XHRzcGF3bk9iamVjdC5uYW1lLFxyXG5cdFx0XHRcdFx0dGhpcy5nZXRDdXN0b21Qcm9wZXJ0eShzcGF3bk9iamVjdCwgQ3VzdG9tUHJvcGVydHkuVEVYVCksXHJcblx0XHRcdFx0XHR0aGlzLmdldEN1c3RvbVByb3BlcnR5KHNwYXduT2JqZWN0LCBDdXN0b21Qcm9wZXJ0eS5WSVNJQkxFKVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0c2lnbi5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAoc2lnbi5pc1Zpc2libGUoKSkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnNob3dEaWFsb2coc2lnbi5nZXRUZXh0KCkpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHNpZ25zLnB1c2goc2lnbik7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIHNpZ25zO1xyXG5cdH1cclxuXHJcblx0c2NyYW1ibGVEaWFsb2dzKHNjcmFtYmxlZCkge1xyXG5cdFx0dGhpcy5zY3JhbWJsZWRTaWducy5mb3JFYWNoKChkaWFsb2cpID0+IGRpYWxvZy5zZXRTY3JhbWJsZWQoc2NyYW1ibGVkKSk7XHJcblx0fVxyXG5cclxuXHRzaG93RGlhbG9nKHRleHQsIGl0ZW1UZXh0dXJlLCBpdGVtRnJhbWUsIGNsb3NlQ2FsbGJhY2spIHtcclxuXHRcdGlmICh0aGlzLmRpYWxvZ0dyb3VwKSB7XHJcblx0XHRcdHRoaXMuZGlhbG9nR3JvdXAuZGVzdHJveSh0cnVlLCBmYWxzZSk7XHJcblx0XHR9XHJcblx0XHR0aGlzLmRpYWxvZ0dyb3VwID0gdGhpcy5hZGQuZ3JvdXAoKTtcclxuXHRcdGNvbnN0IGRpYWxvZ0ZyYW1lID0gdGhpcy5hZGQubmluZXNsaWNlKDQ1MCwgMzUwLCBMb2FkZXJLZXkuRlJBTUUsIG51bGwsIDMwMCwgNTUwKTtcclxuXHRcdGxldCB0ZXh0WSA9IDM1MDtcclxuXHRcdGlmIChpdGVtVGV4dHVyZSkge1xyXG5cdFx0XHR0ZXh0WSA9IDMzMDtcclxuXHRcdFx0Y29uc3QgZGlhbG9nSW1hZ2UgPSB0aGlzLmFkZC5pbWFnZSg0NTAsIDM2MCwgaXRlbVRleHR1cmUsIGl0ZW1GcmFtZSk7XHJcblx0XHRcdGRpYWxvZ0ltYWdlLnNldFNjYWxlKDIpO1xyXG5cdFx0XHRkaWFsb2dJbWFnZS5zZXRPcmlnaW4oMC41LCAwLjUpO1xyXG5cdFx0XHR0aGlzLmRpYWxvZ0dyb3VwLmFkZChkaWFsb2dJbWFnZSk7XHJcblx0XHR9XHJcblx0XHRjb25zdCBkaWFsb2dUZXh0ID0gdGhpcy5hZGQudGV4dCg0NTAsIHRleHRZLCB0ZXh0LCB7XHJcblx0XHRcdGZvbnRGYW1pbHk6ICdWZXJkYW5hJyxcclxuXHRcdFx0Zm9udFNpemU6ICcxMnB4J1xyXG5cdFx0fSk7XHJcblx0XHRkaWFsb2dUZXh0LnNldE9yaWdpbigwLjUsIDAuNSk7XHJcblx0XHRkaWFsb2dUZXh0LnNldFdvcmRXcmFwV2lkdGgoMjUwKTtcclxuXHRcdGNvbnN0IGNsb3NlQnV0dG9uID0gdGhpcy5hZGQuaW1hZ2UoNTg1LCAzMDAsIExvYWRlcktleS5VSSwgMik7XHJcblx0XHRjbG9zZUJ1dHRvbi5zZXRJbnRlcmFjdGl2ZSgpO1xyXG5cclxuXHRcdHRoaXMuZGlhbG9nR3JvdXAuYWRkKGNsb3NlQnV0dG9uKTtcclxuXHRcdHRoaXMuZGlhbG9nR3JvdXAuYWRkKGRpYWxvZ1RleHQpO1xyXG5cdFx0dGhpcy5kaWFsb2dHcm91cC5hZGQoZGlhbG9nRnJhbWUpO1xyXG5cdFx0Y2xvc2VCdXR0b24ub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xyXG5cdFx0XHR0aGlzLmRpYWxvZ0dyb3VwLmRlc3Ryb3kodHJ1ZSwgZmFsc2UpO1xyXG5cdFx0XHRpZiAoY2xvc2VDYWxsYmFjaykge1xyXG5cdFx0XHRcdGNsb3NlQ2FsbGJhY2soKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVBbmltYXRpb24oa2V5LCB0ZXh0dXJlLCBmcmFtZXMsIGZyYW1lUmF0ZSwgcmVwZWF0KSB7XHJcblx0XHR0aGlzLmFuaW1zLmNyZWF0ZSh7XHJcblx0XHRcdGtleSxcclxuXHRcdFx0ZnJhbWVzOiB0aGlzLmFuaW1zLmdlbmVyYXRlRnJhbWVOdW1iZXJzKHRleHR1cmUsIHsgZnJhbWVzIH0pLFxyXG5cdFx0XHRmcmFtZVJhdGUsXHJcblx0XHRcdHJlcGVhdFxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRnZXRDdXN0b21Qcm9wZXJ0eShzcGF3bk9iamVjdCwgbmFtZSkge1xyXG5cdFx0bGV0IHByb3BlcnR5ID0gbnVsbDtcclxuXHRcdGlmIChzcGF3bk9iamVjdCkge1xyXG5cdFx0XHRwcm9wZXJ0eSA9IHNwYXduT2JqZWN0LnByb3BlcnRpZXMuZmluZCgocHJvcGVydHkpID0+IHByb3BlcnR5Lm5hbWUgPT09IG5hbWUpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHByb3BlcnR5Py52YWx1ZTtcclxuXHR9XHJcblxyXG5cdGdldERpYWxvZyhkaWFsb2dzLCBuYW1lKSB7XHJcblx0XHRyZXR1cm4gZGlhbG9ncy5maW5kKChkaWFsb2cpID0+IGRpYWxvZy5uYW1lID09IG5hbWUpO1xyXG5cdH1cclxuXHJcblx0aXNCcmVha2FibGVXaW5kb3dUaWxlKHRpbGUpIHtcclxuXHRcdHJldHVybiB0aWxlPy5pbmRleCA9PT0gVGlsZS5DTE9TRV9XSU5ET1c7XHJcblx0fVxyXG5cclxuXHRicmVha1dpbmRvdyh4LCB5KSB7XHJcblx0XHR0aGlzLnRpbGVtYXAucHV0VGlsZUF0KFRpbGUuT1BFTl9XSU5ET1csIHgsIHkpO1xyXG5cdH1cclxuXHJcblx0Z2V0QnJlYWthYmxlV2luZG93c1RpbGVzKHRpbGVtYXApIHtcclxuXHRcdHJldHVybiB0aWxlbWFwLmZpbHRlclRpbGVzKCh0aWxlKSA9PiB0aWxlLmluZGV4ID09PSBUaWxlLkNMT1NFX1dJTkRPVyk7XHJcblx0fVxyXG5cclxuXHRoYXNCcmVha2FibGVXaW5kb3dzVGlsZXMoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5nZXRCcmVha2FibGVXaW5kb3dzVGlsZXModGhpcy50aWxlbWFwKS5sZW5ndGggPT09IDAgPyBmYWxzZSA6IHRydWU7XHJcblx0fVxyXG5cclxuXHRnZXRDb2ZmaW5UaWxlcyh0aWxlbWFwKSB7XHJcblx0XHRyZXR1cm4gdGhpcy50aWxlbWFwLmZpbHRlclRpbGVzKCh0aWxlKSA9PiBUaWxlLkNPRkZJTi5pbmNsdWRlcyh0aWxlLmluZGV4KSk7XHJcblx0fVxyXG5cclxuXHRkZXN0cm95Q29mZmluKCkge1xyXG5cdFx0dGhpcy50aWxlbWFwLnJlbW92ZVRpbGUodGhpcy5nZXRDb2ZmaW5UaWxlcyh0aGlzLnRpbGVtYXApKTtcclxuXHR9XHJcblxyXG5cdHNwYXduSXRlbSh4LCB5LCBpdGVtTmFtZSwgaXRlbVRleHR1cmUsIGl0ZW1GcmFtZSwgaXRlbURlc2NyaXB0aW9uKSB7XHJcblx0XHRjb25zdCBpdGVtID0gdGhpcy5hZGQuaW1hZ2UoeCwgeSwgaXRlbVRleHR1cmUsIGl0ZW1GcmFtZSk7XHJcblx0XHRpdGVtLnNldFNjYWxlKDIpO1xyXG5cdFx0aXRlbS5zZXRJbnRlcmFjdGl2ZSgpO1xyXG5cdFx0aXRlbS5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XHJcblx0XHRcdGl0ZW0uZGVzdHJveSgpO1xyXG5cdFx0XHR0aGlzLnNob3dEaWFsb2coaXRlbURlc2NyaXB0aW9uLCBpdGVtVGV4dHVyZSwgaXRlbUZyYW1lLCAoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5pdGVtcy5wdXNoKHtcclxuXHRcdFx0XHRcdG5hbWU6IGl0ZW1OYW1lLFxyXG5cdFx0XHRcdFx0dGV4dHVyZTogaXRlbVRleHR1cmUsXHJcblx0XHRcdFx0XHRmcmFtZTogaXRlbUZyYW1lXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0dGhpcy51cGRhdGVIdWQoKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGlzQ2hhaXJUaWxlKHRpbGUpIHtcclxuXHRcdHJldHVybiAodGlsZT8ueCA9PT0gMjMgJiYgdGlsZT8ueSA9PT0gNCkgfHwgKHRpbGU/LnggPT09IDIzICYmIHRpbGU/LnkgPT09IDUpIHx8ICh0aWxlPy54ID09PSAyMyAmJiB0aWxlPy55ID09PSA2KTtcclxuXHR9XHJcblxyXG5cdG1vdmVDaGFpcigpIHtcclxuXHRcdHRoaXMudGlsZW1hcC5wdXRUaWxlQXQoVGlsZS5UT1BfQ0hBSVIsIDIyLCA0KTtcclxuXHRcdHRoaXMudGlsZW1hcC5wdXRUaWxlQXQoVGlsZS5NSURETEVfQ0hBSVIsIDIyLCA1KTtcclxuXHRcdHRoaXMudGlsZW1hcC5wdXRUaWxlQXQoVGlsZS5CT1RUT01fQ0hBSVIsIDIyLCA2KTtcclxuXHRcdHRoaXMudGlsZW1hcC5wdXRUaWxlQXQoVGlsZS5TSUdOLCAyMywgNik7XHJcblx0XHR0aGlzLnRpbGVtYXAucmVtb3ZlVGlsZUF0KDIzLCA0KTtcclxuXHRcdHRoaXMudGlsZW1hcC5yZW1vdmVUaWxlQXQoMjMsIDUpO1xyXG5cdFx0Y29uc3Qgc2lnbiA9IHRoaXMuc2lnbnMuZmluZCgoc2lnbikgPT4gc2lnbi5uYW1lID09PSAnY2hhaXItc2lnbicpO1xyXG5cdFx0c2lnbi5zZXRWaXNpYmxlKHRydWUpO1xyXG5cdH1cclxuXHJcblx0aXNLbmlnaHRUaWxlKHRpbGUpIHtcclxuXHRcdHJldHVybiAodGlsZT8ueCA9PT0gMjIgJiYgdGlsZT8ueSA9PT0gMTUpIHx8ICh0aWxlPy54ID09PSAyMiAmJiB0aWxlPy55ID09PSAxNik7XHJcblx0fVxyXG5cclxuXHRkZXN0cm95S25pZ2h0KCkge1xyXG5cdFx0Y29uc3Qgc2lnbiA9IHRoaXMuc2lnbnMuZmluZCgoc2lnbikgPT4gc2lnbi5uYW1lID09PSAna25pZ2h0LXNpZ24nKTtcclxuXHRcdHNpZ24uc2V0VmlzaWJsZSh0cnVlKTtcclxuXHRcdHRoaXMudGlsZW1hcC5wdXRUaWxlQXQoVGlsZS5TSUdOLCAyMiwgMTUpO1xyXG5cdFx0dGhpcy50aWxlbWFwLnB1dFRpbGVBdChUaWxlLkRFU1RST1lFRF9LTklHSFQsIDIyLCAxNik7XHJcblx0fVxyXG5cclxuXHRpc0JyZWFrYWJsZVdhbGxUaWxlKHRpbGUpIHtcclxuXHRcdHJldHVybiB0aWxlPy54ID09PSBTRUNSRVRfVElMRV9YICYmIHRpbGU/LnkgPT09IFNFQ1JFVF9USUxFX1k7XHJcblx0fVxyXG5cclxuXHRicmVha1dhbGwoeCwgeSkge1xyXG5cdFx0dGhpcy50aWxlbWFwLnB1dFRpbGVBdChUaWxlLkhPTEVfSU5fV0FMTCwgeCwgeSk7XHJcblx0fVxyXG5cclxuXHRpc0xlZnRHYXJnb3lsZVRpbGUodGlsZSkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0KHRpbGU/LnggPT09IDMgJiYgdGlsZT8ueSA9PT0gMTUpIHx8XHJcblx0XHRcdCh0aWxlPy54ID09PSAzICYmIHRpbGU/LnkgPT09IDE2KSB8fFxyXG5cdFx0XHQodGlsZT8ueCA9PT0gNCAmJiB0aWxlPy55ID09PSAxNSkgfHxcclxuXHRcdFx0KHRpbGU/LnggPT09IDQgJiYgdGlsZT8ueSA9PT0gMTYpXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0aXNSaWdodEdhcmdveWxlVGlsZSh0aWxlKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQodGlsZT8ueCA9PT0gOCAmJiB0aWxlPy55ID09PSAxNSkgfHxcclxuXHRcdFx0KHRpbGU/LnggPT09IDggJiYgdGlsZT8ueSA9PT0gMTYpIHx8XHJcblx0XHRcdCh0aWxlPy54ID09PSA5ICYmIHRpbGU/LnkgPT09IDE1KSB8fFxyXG5cdFx0XHQodGlsZT8ueCA9PT0gOSAmJiB0aWxlPy55ID09PSAxNilcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRtb3ZlTGVmdEdhcmdveWxlKHRpbGUpIHtcclxuXHRcdHRoaXMudGlsZW1hcC5wdXRUaWxlQXQoVGlsZS5UT1BfTEVGVF9HQVJHT1lMRSwgMiwgMTUpO1xyXG5cdFx0dGhpcy50aWxlbWFwLnB1dFRpbGVBdChUaWxlLlRPUF9SSUdIVF9HQVJHT1lMRSwgMywgMTUpO1xyXG5cdFx0dGhpcy50aWxlbWFwLnB1dFRpbGVBdChUaWxlLkJPVFRPTV9MRUZUX0dBUkdPWUxFLCAyLCAxNik7XHJcblx0XHR0aGlzLnRpbGVtYXAucHV0VGlsZUF0KFRpbGUuQk9UVE9NX1JJR0hUX0dBUkdPWUxFLCAzLCAxNik7XHJcblx0XHR0aGlzLnRpbGVtYXAucmVtb3ZlVGlsZUF0KDQsIDE1KTtcclxuXHRcdHRoaXMudGlsZW1hcC5yZW1vdmVUaWxlQXQoNCwgMTYpO1xyXG5cdH1cclxuXHJcblx0bW92ZVJpZ2h0R2FyZ295bGUodGlsZSkge1xyXG5cdFx0dGhpcy50aWxlbWFwLnB1dFRpbGVBdChUaWxlLlRPUF9MRUZUX0dBUkdPWUxFLCA5LCAxNSk7XHJcblx0XHR0aGlzLnRpbGVtYXAucHV0VGlsZUF0KFRpbGUuVE9QX1JJR0hUX0dBUkdPWUxFLCAxMCwgMTUpO1xyXG5cdFx0dGhpcy50aWxlbWFwLnB1dFRpbGVBdChUaWxlLkJPVFRPTV9MRUZUX0dBUkdPWUxFLCA5LCAxNik7XHJcblx0XHR0aGlzLnRpbGVtYXAucHV0VGlsZUF0KFRpbGUuQk9UVE9NX1JJR0hUX0dBUkdPWUxFLCAxMCwgMTYpO1xyXG5cdFx0dGhpcy50aWxlbWFwLnJlbW92ZVRpbGVBdCg4LCAxNSk7XHJcblx0XHR0aGlzLnRpbGVtYXAucHV0VGlsZUF0KFRpbGUuU1RBSVIsIDgsIDE2KTtcclxuXHR9XHJcblxyXG5cdGlzRmlyZVRpbGUodGlsZSkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0KHRpbGU/LnggPT09IDEyICYmIHRpbGU/LnkgPT09IDE4KSB8fFxyXG5cdFx0XHQodGlsZT8ueCA9PT0gMTMgJiYgdGlsZT8ueSA9PT0gMTgpIHx8XHJcblx0XHRcdCh0aWxlPy54ID09PSAxNCAmJiB0aWxlPy55ID09PSAxOCkgfHxcclxuXHRcdFx0KHRpbGU/LnggPT09IDEyICYmIHRpbGU/LnkgPT09IDE5KSB8fFxyXG5cdFx0XHQodGlsZT8ueCA9PT0gMTMgJiYgdGlsZT8ueSA9PT0gMTkpIHx8XHJcblx0XHRcdCh0aWxlPy54ID09PSAxNCAmJiB0aWxlPy55ID09PSAxOSkgfHxcclxuXHRcdFx0KHRpbGU/LnggPT09IDEyICYmIHRpbGU/LnkgPT09IDIwKSB8fFxyXG5cdFx0XHQodGlsZT8ueCA9PT0gMTMgJiYgdGlsZT8ueSA9PT0gMjApIHx8XHJcblx0XHRcdCh0aWxlPy54ID09PSAxNCAmJiB0aWxlPy55ID09PSAyMClcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRleHRpbmd1aXNoRmlyZSgpIHtcclxuXHRcdHRoaXMudGlsZW1hcC5wdXRUaWxlQXQoVGlsZS5UT1BfTEVGVF9XQVRFUiwgMTIsIDE4KTtcclxuXHRcdHRoaXMudGlsZW1hcC5wdXRUaWxlQXQoVGlsZS5UT1BfQ0VOVEVSX1dBVEVSLCAxMywgMTgpO1xyXG5cdFx0dGhpcy50aWxlbWFwLnB1dFRpbGVBdChUaWxlLlRPUF9SSUdIVF9XQVRFUiwgMTQsIDE4KTtcclxuXHRcdHRoaXMudGlsZW1hcC5wdXRUaWxlQXQoVGlsZS5NSURETEVfTEVGVF9XQVRFUiwgMTIsIDE5KTtcclxuXHRcdHRoaXMudGlsZW1hcC5wdXRUaWxlQXQoVGlsZS5NSURETEVfQ0VOVEVSX1dBVEVSLCAxMywgMTkpO1xyXG5cdFx0dGhpcy50aWxlbWFwLnB1dFRpbGVBdChUaWxlLk1JRERMRV9SSUdIVF9XQVRFUiwgMTQsIDE5KTtcclxuXHRcdHRoaXMudGlsZW1hcC5wdXRUaWxlQXQoVGlsZS5CT1RUT01fTEVGVF9XQVRFUiwgMTIsIDIwKTtcclxuXHRcdHRoaXMudGlsZW1hcC5wdXRUaWxlQXQoVGlsZS5CT1RUT01fQ0VOVEVSX1dBVEVSLCAxMywgMjApO1xyXG5cdFx0dGhpcy50aWxlbWFwLnB1dFRpbGVBdChUaWxlLkJPVFRPTV9SSUdIVF9XQVRFUiwgMTQsIDIwKTtcclxuXHR9XHJcblxyXG5cdGlzU2tlbGV0b25UaWxlKHRpbGUpIHtcclxuXHRcdHJldHVybiB0aWxlPy54ID09PSA3ICYmIHRpbGU/LnkgPT09IDk7XHJcblx0fVxyXG5cclxuXHRpc1N0YWlyVGlsZSh0aWxlKSB7XHJcblx0XHRyZXR1cm4gdGlsZT8uaW5kZXggPT09IFRpbGUuU1RBSVI7XHJcblx0fVxyXG5cclxuXHRkaWdTa2VsZXRvbigpIHtcclxuXHRcdHRoaXMudGlsZW1hcC5wdXRUaWxlQXQoVGlsZS5ESUdHRURfSE9MRSwgNywgOSk7XHJcblx0fVxyXG5cclxuXHRpc0l0ZW1TZWxlY3RlZChuYW1lKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5zZWxlY3RlZEl0ZW0/Lm5hbWUgPT09IG5hbWU7XHJcblx0fVxyXG5cclxuXHRzdGFydFRpbWVyKG51bWJlck9mSG91cnMpIHtcclxuXHRcdGlmICghdGhpcy5pc1J1bm5pbmcpIHtcclxuXHRcdFx0Y29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcblx0XHRcdHRoaXMuY291bnREb3duRGF0ZSA9IG5ldyBEYXRlKG5vdyArIG51bWJlck9mSG91cnMgKiA2MCAqIDYwICogMTAwMCkuZ2V0VGltZSgpO1xyXG5cdFx0XHR0aGlzLmlzUnVubmluZyA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLmlzVGltZUVsYXBzZWQgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLmlzUnVubmluZyA9IHRydWU7XHJcblx0XHRcdFx0Y29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcblx0XHRcdFx0dGhpcy50aW1lUmVtYWluaW5nID0gdGhpcy5jb3VudERvd25EYXRlIC0gbm93O1xyXG5cdFx0XHRcdGlmIChub3cgPj0gdGhpcy5jb3VudERvd25EYXRlKSB7XHJcblx0XHRcdFx0XHR0aGlzLmlzUnVubmluZyA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0dGhpcy5pc1RpbWVFbGFwc2VkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LCAxMDAwKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHVwZGF0ZVRpbWUoKSB7XHJcblx0XHRpZiAodGhpcy50aW1lVGV4dCkge1xyXG5cdFx0XHR0aGlzLnRpbWVUZXh0LmRlc3Ryb3koKTtcclxuXHRcdH1cclxuXHRcdGNvbnN0IGhvdXJzUmVtYWluaW5nID0gTWF0aC5mbG9vcigodGhpcy50aW1lUmVtYWluaW5nICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpO1xyXG5cdFx0Y29uc3QgbWludXRlc1JlbWFpbmluZyA9IE1hdGguZmxvb3IoKHRoaXMudGltZVJlbWFpbmluZyAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xyXG5cdFx0Y29uc3Qgc2Vjb25kc1JlbWFpbmluZyA9IE1hdGguZmxvb3IoKHRoaXMudGltZVJlbWFpbmluZyAlICgxMDAwICogNjApKSAvIDEwMDApO1xyXG5cdFx0aWYgKHRoaXMudGltZVJlbWFpbmluZykge1xyXG5cdFx0XHR0aGlzLnRpbWVUZXh0ID0gdGhpcy5hZGQudGV4dCg5MTUsIDczMCwgYCR7aG91cnNSZW1haW5pbmd9OiR7bWludXRlc1JlbWFpbmluZ306JHtzZWNvbmRzUmVtYWluaW5nfWAsIHtcclxuXHRcdFx0XHRmb250U2l6ZTogJzEycHgnLFxyXG5cdFx0XHRcdGZvbnRGYW1pbHk6ICdWZXJkYW5hJ1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHVwZGF0ZSgpIHtcclxuXHRcdHRoaXMudXBkYXRlVGltZSgpO1xyXG5cclxuXHRcdGlmICh0aGlzLmlzVGltZUVsYXBzZWQpIHtcclxuXHRcdFx0dGhpcy5zY2VuZS5zdGFydCgnZ2FtZW92ZXInKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAodGhpcy5pc0l0ZW1TZWxlY3RlZChJdGVtLkJPT0spKSB7XHJcblx0XHRcdHRoaXMuc2NyYW1ibGVEaWFsb2dzKGZhbHNlKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuc2NyYW1ibGVEaWFsb2dzKHRydWUpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLmlzSXRlbVNlbGVjdGVkKEl0ZW0uS0VZKSkge1xyXG5cdFx0XHRjb25zdCBjaGVzdCA9IHRoaXMuY2hlc3RzLmZpbmQoKGNoZXN0KSA9PiBjaGVzdC5uYW1lID09PSAnY2hlc3QnKTtcclxuXHRcdFx0Y2hlc3QudW5sb2NrKCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb25zdCBjaGVzdCA9IHRoaXMuY2hlc3RzLmZpbmQoKGNoZXN0KSA9PiBjaGVzdC5uYW1lID09PSAnY2hlc3QnKTtcclxuXHRcdFx0Y2hlc3QubG9jaygpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLmlzSXRlbVNlbGVjdGVkKEl0ZW0uTUFTVEVSX0tFWSkpIHtcclxuXHRcdFx0dGhpcy5kb29yLnVubG9jaygpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5kb29yLmxvY2soKTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCB3b3JsZFBvaW50ID0gdGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLnBvc2l0aW9uVG9DYW1lcmEodGhpcy5jYW1lcmFzLm1haW4pO1xyXG5cclxuXHRcdC8vIFJvdW5kcyBkb3duIHRvIG5lYXJlc3QgdGlsZVxyXG5cdFx0Y29uc3QgcG9pbnRlclRpbGVYID0gdGhpcy50aWxlbWFwLndvcmxkVG9UaWxlWCh3b3JsZFBvaW50LngpO1xyXG5cdFx0Y29uc3QgcG9pbnRlclRpbGVZID0gdGhpcy50aWxlbWFwLndvcmxkVG9UaWxlWSh3b3JsZFBvaW50LnkpO1xyXG5cclxuXHRcdGlmICh0aGlzLmlucHV0Lm1hbmFnZXIuYWN0aXZlUG9pbnRlci5pc0Rvd24pIHtcclxuXHRcdFx0Y29uc3QgdGlsZSA9IHRoaXMudGlsZW1hcC5nZXRUaWxlQXQocG9pbnRlclRpbGVYLCBwb2ludGVyVGlsZVksIGZhbHNlLCBUaWxlbWFwTGF5ZXIuRk9SRUdST1VORCk7XHJcblxyXG5cdFx0XHRpZiAodGhpcy5pc0JyZWFrYWJsZVdpbmRvd1RpbGUodGlsZSkgJiYgdGhpcy5pc0l0ZW1TZWxlY3RlZChJdGVtLkhBTU1FUikpIHtcclxuXHRcdFx0XHR0aGlzLmJyZWFrV2luZG93KHBvaW50ZXJUaWxlWCwgcG9pbnRlclRpbGVZKTtcclxuXHRcdFx0XHRpZiAoIXRoaXMuaGFzQnJlYWthYmxlV2luZG93c1RpbGVzKCkpIHtcclxuXHRcdFx0XHRcdHRoaXMuZGVzdHJveUNvZmZpbigpO1xyXG5cdFx0XHRcdFx0dGhpcy5zcGF3bkl0ZW0oNTMwLCAyMDUsIEl0ZW0uUklORywgTG9hZGVyS2V5LklURU1TLCBGcmFtZS5SSU5HLCAnWW91IGdvdCB0aGUgcG93ZXIgcmluZycpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gbW92ZSBjaGFpciB3aGVuIGNsaWNrZWQgb24gaXRcclxuXHRcdFx0aWYgKHRoaXMuaXNDaGFpclRpbGUodGlsZSkpIHtcclxuXHRcdFx0XHR0aGlzLm1vdmVDaGFpcigpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBpZiB0aWxlIGlmIGtuaWdodFxyXG5cdFx0XHRpZiAodGhpcy5pc0tuaWdodFRpbGUodGlsZSkgJiYgIXRoaXMua25pZ2h0RGVzdHJveWVkICYmIHRoaXMuaXNJdGVtU2VsZWN0ZWQoSXRlbS5QT1RJT04pKSB7XHJcblx0XHRcdFx0dGhpcy5rbmlnaHREZXN0cm95ZWQgPSB0cnVlO1xyXG5cdFx0XHRcdHRoaXMuZGVzdHJveUtuaWdodCgpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAodGhpcy5pc0JyZWFrYWJsZVdhbGxUaWxlKHRpbGUpICYmICF0aGlzLndhbGxEZXN0cm95ZWQgJiYgdGhpcy5pc0l0ZW1TZWxlY3RlZChJdGVtLlBJQ0tBWEUpKSB7XHJcblx0XHRcdFx0dGhpcy53YWxsRGVzdHJveWVkID0gdHJ1ZTtcclxuXHRcdFx0XHR0aGlzLmJyZWFrV2FsbChwb2ludGVyVGlsZVgsIHBvaW50ZXJUaWxlWSk7XHJcblx0XHRcdFx0dGhpcy5zcGF3bkl0ZW0oMjA1LCAxNDAsIEl0ZW0uS0VZLCBMb2FkZXJLZXkuSVRFTVMsIEZyYW1lLktFWSwgJ1lvdSBnb3QgdGhlIGtleScpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBpZiB0aWxlIGlzIGdhcmdveWxlXHJcblx0XHRcdGlmICh0aGlzLmlzTGVmdEdhcmdveWxlVGlsZSh0aWxlKSAmJiAhdGhpcy5pc0xlZnRHYXJnb3lsZU1vdmVkICYmIHRoaXMuaXNJdGVtU2VsZWN0ZWQoSXRlbS5SSU5HKSkge1xyXG5cdFx0XHRcdHRoaXMuaXNMZWZ0R2FyZ295bGVNb3ZlZCA9IHRydWU7XHJcblx0XHRcdFx0dGhpcy5tb3ZlTGVmdEdhcmdveWxlKCk7XHJcblx0XHRcdFx0dGhpcy5zcGF3bkl0ZW0oMTQ1LCA1MjUsIEl0ZW0uUE9USU9OLCBMb2FkZXJLZXkuSVRFTVMsIEZyYW1lLlBPVElPTiwgJ1lvdSBnb3QgdGhlIG1hZ2ljIHNvbHZlbnQnKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHRoaXMuaXNSaWdodEdhcmdveWxlVGlsZSh0aWxlKSAmJiAhdGhpcy5pc1JpZ2h0R2FyZ295bGVNb3ZlZCAmJiB0aGlzLmlzSXRlbVNlbGVjdGVkKEl0ZW0uUklORykgJiYgdGhpcy5kb29yLmlzT3BlbmVkKCkpIHtcclxuXHRcdFx0XHR0aGlzLmlzUmlnaHRHYXJnb3lsZU1vdmVkID0gdHJ1ZTtcclxuXHRcdFx0XHR0aGlzLm1vdmVSaWdodEdhcmdveWxlKCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICh0aGlzLmlzRmlyZVRpbGUodGlsZSkgJiYgIXRoaXMuZmlyZUV4dGluZ3Vpc2hlZCAmJiB0aGlzLmlzSXRlbVNlbGVjdGVkKEl0ZW0uSUNFX1JPRCkpIHtcclxuXHRcdFx0XHR0aGlzLmZpcmVFeHRpbmd1aXNoZWQgPSB0cnVlO1xyXG5cdFx0XHRcdHRoaXMuZXh0aW5ndWlzaEZpcmUoKTtcclxuXHRcdFx0XHR0aGlzLnNwYXduSXRlbSg0MzUsIDYyMCwgSXRlbS5QSUNLQVhFLCBMb2FkZXJLZXkuSVRFTVMsIEZyYW1lLlBJQ0tBWEUsICdZb3UgZ290IHRoZSBwaWNrYXhlJyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICh0aGlzLmlzU2tlbGV0b25UaWxlKHRpbGUpICYmICF0aGlzLmlzRGlnZ2VkICYmIHRoaXMuaXNJdGVtU2VsZWN0ZWQoSXRlbS5TSE9WRUwpKSB7XHJcblx0XHRcdFx0dGhpcy5pc0RpZ2dlZCA9IHRydWU7XHJcblx0XHRcdFx0dGhpcy5kaWdTa2VsZXRvbigpO1xyXG5cdFx0XHRcdHRoaXMuc3Bhd25JdGVtKDI1MCwgMzAwLCBJdGVtLk1BU1RFUl9LRVksIExvYWRlcktleS5JVEVNUywgRnJhbWUuTUFTVEVSX0tFWSwgJ1lvdSBnb3QgdGhlIG1hc3RlciBrZXknKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHRoaXMuaXNTdGFpclRpbGUodGlsZSkpIHtcclxuXHRcdFx0XHR0aGlzLnNjZW5lLnN0YXJ0KCd3aW4nKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcGxhc2hTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ3NwbGFzaCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZSgpIHtcclxuICAgICAgICBjb25zdCB0ZXh0ID0gdGhpcy5hZGQudGV4dCg1MTIsIDI1MCwgJ0VzY2FwZSBmcm9tIE1BQVggZHVuZ2VvbicsIHtcclxuICAgICAgICAgICAgZm9udFNpemU6ICc1MHB4JyxcclxuICAgICAgICAgICAgZm9udEZhbWlseTogJ1ZlcmRhbmEnLFxyXG4gICAgICAgICAgICBmaWxsOiAnIzAwMCdcclxuICAgICAgICB9KTtcclxuICAgICAgICB0ZXh0LnNldFN0cm9rZSgnIzU0Mzg3MycsIDYpO1xyXG4gICAgICAgIHRleHQuc2V0T3JpZ2luKDAuNSwgMC41KTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBjbGlja1RvQ29udGludWUgPSB0aGlzLmFkZC50ZXh0KDUxMiwgNDAwLCAnQ2xpY2sgdG8gc3RhcnQgdGhlIGdhbWUnLCB7XHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCcsXHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdWZXJkYW5hJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNsaWNrVG9Db250aW51ZS5zZXRPcmlnaW4oMC41LCAwLjUpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5pbnB1dC5tYW5hZ2VyLmFjdGl2ZVBvaW50ZXIuaXNEb3duKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUuc3RhcnQoJ3BsYXknKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2lubmluZ1NjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcignd2luJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlKCkge1xyXG4gICAgICAgIGNvbnN0IHRleHQgPSB0aGlzLmFkZC50ZXh0KDUxMiwgMzg0LCAnQ29uZ3JhdHVsYXRpb25zIGZvciBlc2NhcGluZz8gVGhhbmsgeW91IGZvciBwbGF5aW5nIScsIHtcclxuICAgICAgICAgICAgZm9udFNpemU6ICcyMnB4JyxcclxuICAgICAgICAgICAgZm9udEZhbWlseTogJ1ZlcmRhbmEnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGV4dC5zZXRPcmlnaW4oMC41LCAwLjUpO1xyXG4gICAgfVxyXG5cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtlc2NhcGVfcm9vbVwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtlc2NhcGVfcm9vbVwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9yXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=