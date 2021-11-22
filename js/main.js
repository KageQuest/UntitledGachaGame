/**
 * This file contains all the main logic for Untitled Gacha Game.
 * All other JavaScript files are supplementary to this for 
 * organization. 
 * 
 * @author Kage Longbotham
 * @year 2021
 */
import {getFullSetName,sets,wannabeSeiso,cardList} from "./cards.js";

/**
 * Expand localStorage + sessionStorage functionality
 * by allowing them to accept objects+arrays.
 * Small "hack" thanks to a @Sebastian on StackOverflow.
 * 
 * @param {string} key
 * @param {Array, Object} obj
 */
Storage.prototype.setObj = function(key, obj) {
	return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
	return JSON.parse(this.getItem(key))
}

// Custom Function to check if item is in an array
const isInArray = (entry,list) => {
	for(let i=0;i<list.length;i++) {
		if(list[i] === entry) {
			return true;
		}
	}
	return false;
}

// Define Elements + Variables
const gachaBtn = document.querySelector("#gacha")
const toggleDarkMode = document.querySelector("#toggleDark");
const settingsBtn = document.querySelector("#settings")
const toggleBtn = document.querySelector("#toggleWrapper");
const wrapper = document.querySelector(".wrapper");
const settingsMenu = document.querySelector("#settings-menu");
const settingsWipe = document.querySelector("#settings-wipe");
const seisoBtn = document.querySelector("#settings-seiso");
const cardCount = document.querySelector("#count");
const cardModal = document.querySelector("#cardModal");
const cardCollection = document.querySelector("#collection");

let viewingCollection = false;
let viewingSettings = false;
let hasWarnedAgainstWipe = false;
let inAMenu = false;

/**
 * Get Save Data
 * All data is stored locally via localStorage, aka just on this page.
 * This means the player _technically_ can cheat by opening inspector
 * and adding/removing/editing values, and is also rather insecure in
 * general.... but for the purposes of a for-fun, free gacha, its perfect.
 */
const save = window.localStorage;
const darkMode = save.getItem("darkMode");
let seisoMode = save.getItem("seiso");
let collectedCards = save.getObj("cards");
const hasReadModal = save.getItem("hasReadModal");

/**
 * Updates the screen to the current mode.
 * 
 * @param {string} screen The current "state" of the screen; Ie "light" or "dark"
 * @returns {void}
 */
 const setScreenMode = (screen) => {
	const styleSheet = document.querySelector("#darkModeStyle");
	if(screen === "light") {
		toggleDarkMode.textContent = "Light Mode";
		save.setItem("darkMode","dark");
		// Set items to dark mode colors
		styleSheet.removeAttribute("disabled");
	} else if(screen === "dark") {
		toggleDarkMode.textContent = "Dark Mode";
		save.setItem("darkMode","light");
		// Reset items
		styleSheet.setAttribute("disabled","disabled");
	}
};

/**
 * @param {none}
 * @returns {void}
 */
const closeModal = () => {
	document.querySelector("#modal").classList.add("hidden");
	inAMenu = false;
};

// If the user is new, enable seiso mode to hide more "lewd" cards
if(!seisoMode) {
	save.setItem("seiso","true");
	seisoMode = save.getItem("seiso");
} else if(seisoMode && seisoMode === "false"){
	sets.wannabeSeiso = wannabeSeiso;
	seisoBtn.textContent = "Seiso Mode: False";
};
// If the user has been here before & enabled dark mode, turn on dark mode
if(darkMode && darkMode === "dark") {
	setScreenMode("light");
} else {
	save.setItem("darkMode","light");
};
// If the user is new, set up the card save data
if(!collectedCards) {
	let cards = {
		rare: [],
		sRare: [],
		uRare: [],
		legendary: []
	};
	save.setObj("cards", cards);
}
// If the user is new, show them the modal. Otherwise, hide it automatically.
if(!hasReadModal) {
	save.setItem("hasReadModal","false");
	inAMenu = true;
	document.querySelector("#modal").classList.remove("hidden");
} else if(hasReadModal && hasReadModal === "true") {
	closeModal();
} else {
	document.querySelector("#modal").classList.remove("hidden");
}

/**
 * This function takes all the cards in cardList from cards.js
 * and populates them into all of their relavent sets.
 * In the event a set doesnt exist, it just prints an error
 * and then continues on. This lets us double-up the use of the
 * "sets" array inside each card, both as a way to organize the cards,
 * but also as a way to use them as "tags" of sorts to display to the user.
 * 
 * @param {none}
 * @returns {void}
 */
const populateSetsWithCards = () => {
	const arrayList = Object.entries(cardList);
	arrayList.forEach(list => {
		const cardRarity = list[0];
		const cardsInRarity = Object.entries(list[1]);
		cardsInRarity.forEach(c => {
			const cardName = c[0];
			c[1].sets.forEach(cardSet => {
				// Seiso mode is on, skip the card
				if(c[1].sets.find(set=>set==="wannabeSeiso") && seisoMode === "true") {return;}
				try {
					sets[cardSet][cardRarity][cardName] = c[1];
				} catch(err) {
					console.error(`Set "${cardSet}" doesnt exist! Card: ${c[0]}; `+err);
				}
			});
		});
	});
};
populateSetsWithCards();

/**
 * Empties all of the pools so they can be refreshed without a page refresh
 * 
 * @param {none}
 * @returns {void}
 */
const emptyAllSets = () => {
	const arrayList = Object.entries(sets);
	arrayList.forEach(set=>{
		const setName = set[0];
		const rarities = Object.entries(set[1]);
		rarities.forEach(tier=>{
			const tierName = tier[0];
			const cards = Object.entries(tier[1]);
			cards.forEach(card=>{
				delete sets[setName][tierName][card[0]];
			});
		});
	});
};

/**
 * Populate the collection with all the possible cards.
 * This includes adding divs for every set and rarity tier, and then adding
 * the correct cards to each section.
 * 
 * @param {none}
 * @returns {void}
 */
const populateCollectionWithCards = () => {
	cardCollection.innerHTML = "";
	const arrayList = Object.entries(sets);
	arrayList.forEach(set=>{
		cardCollection.insertAdjacentHTML("beforeend",`<div id="${set[0]}Cards"><h1>${getFullSetName(set[0])}</h1></div>`);
		const rarities = Object.entries(set[1]);
		rarities.forEach(tier=>{
			let fullRarityName = "Tier Name";
			if(tier[0]==="rare") {fullRarityName = "Rares"}
			else if(tier[0]==="sRare") {fullRarityName = "Super-Rares"}
			else if(tier[0]==="uRare") {fullRarityName = "Ultra-Rares"}
			else if(tier[0]==="legendary") {fullRarityName = "Legendaries"}
			document.querySelector(`#${set[0]}Cards`).insertAdjacentHTML("beforeend",`
			<div class="${tier[0]}">
				<h2>${fullRarityName}</h2>
				<hr>
				<div class="cardHolder"></div>
			</div>
			`);
			const cards = Object.entries(tier[1]);
			cards.forEach(card=>{
				document.querySelector(`#${set[0]}Cards div.${tier[0]} div.cardHolder`).insertAdjacentHTML("beforeend",`
				<div class="card ${card[0]}">
					<div class="blackout"></div>
					<img class="card-img" src="${card[1].image}" alt="A card named '${card[1].name}'. Description reads: '${card[1].desc}'" title="${card[1].name}, by ${card[1].artist}" tabindex="0"/>
				</div>
				`);
			});
		});
	});
};
populateCollectionWithCards();

/**
 * Updates the Collection to remove the "blackout" overlay if the user has collected the card
 * 
 * @param {none}
 * @returns {void}
 */
const showCollectedCards = () => {
	const collectedCards = save.getObj("cards");
	const arrayList = Object.entries(collectedCards);
	arrayList.forEach(tier=>{
		tier[1].forEach(card=>{
			const cards = document.querySelectorAll(`.${card}`);
			cards.forEach(found=>{
				if(found.firstElementChild.classList.contains("blackout")){
					found.firstElementChild.remove();
				}
			});
		});
	});
};
showCollectedCards();

/**
 * Gets the total count of all cards possible to get
 * 
 * @param {none}
 * @returns {string} The total amount of cards in every set+rarity
 */
const getTotalCount = () => {
	let total  = 0;
	let unique = [];
	const arrayList = Object.entries(sets);
	arrayList.forEach(set=>{
		const rarities = Object.entries(set[1]);
		rarities.forEach(tier=>{
			const cards = Object.entries(tier[1]);
			cards.forEach(card=>{
				if(!isInArray(card[1],unique)){
					unique.push(card[1]);
					total++;
				}
			});
		});
	});
	return total.toString();
};

/**
 * Gets the total number of cards the user has collected
 * 
 * @todo Make wannabeSeiso cards not count to the total if its not enabled?
 * @param {none}
 * @returns {string}
 */
const getCollectedCount = () => {
	let total = 0;
	collectedCards = save.getObj("cards");
	const arrayList = Object.entries(collectedCards);
	arrayList.forEach(rarity=>{
		total+=rarity[1].length;
	});
	if(total===69) {total="nice"};
	return total.toString();
};


/**
 * This function gets the current active set that will be used by
 * U-Rare/Legendary pulls. Uses SeedRandom by David Bau, and some
 * sneaky math shenanigans to sync RNG globally. This means every
 * user, no matter what device or location, will have the same
 * active daily sets, based on UTC time. Resets every UTC midnight.
 * 
 * @param {none}
 * @returns {Object.key} 
 */
const getDailySet = () => {
	const today = new Date();
	const date = today.getUTCFullYear().toString()+(today.getUTCMonth()+1).toString()+today.getUTCDate.toString();
	Math.seedrandom(date);
	const rng_int = (Math.round(Math.random() * Math.pow(2,32)));
	const selection =  Math.abs((rng_int^date)%Object.keys(sets).length);
	const set = Object.keys(sets)[selection];
	// We also want to set the banner background img while getting the set in the event it changes
	document.querySelector("#bannerBG").style.backgroundImage = `url("../images/banners/${set.toString()}.jpg")`;
	// Return the daily set
	return set;
};
// Call this function right away to set the banner image on load
getDailySet();

/**
 * This function returns a random set from the list of total sets.
 * Used to draw Rare/S-Rare cards.
 * 
 * @param {none}
 * @returns {Object.key}
 */
const getRandomSet = () => {
	Math.seedrandom();
	const randomSetNum = Math.floor(Math.random()*Object.keys(sets).length);
	const randomSet = Object.keys(sets)[randomSetNum];
	return randomSet;
}

/**
 * This function uses a randomly seeded Math.random() to determine
 * which rarity pool to draw a new card from. 
 * 
 * @param {none}
 * @returns {Object}
 */
const getRarity = () => {
	Math.seedrandom(); //We need to reset the RNG here to be truly random again
	const poolNum = Math.floor((Math.random()*100)+1);
	if(poolNum >= 1 && poolNum <= 95) { 	// 95% chance to draw from Rare/S-Rare pools
		Math.seedrandom();
		const pool = Math.floor((Math.random()*100)+1);
		if(pool >= 1 && pool <= 60) {		// 60% chance for rare (Real %: 57)
			return "rare";
		} else {							// 40% chance for s-rare (Real %: 38)
			return "sRare";
		}
	} else {								// 5% chance to draw from U-Rare/Legendary pools
		Math.seedrandom();
		const pool = Math.floor((Math.random()*100)+1);
		if(pool >= 1 && pool <= 90) {		// 90% chance for u-rare (Real %: 4.5)
			return "uRare";
		} else {							// 10% chance for legendary (Real %: 0.5)
			return "legendary";
		}
	}
};

/**
 * Save the generated card to the users localStorage
 * 
 * @param {String} rarity The rarity of the card 
 * @param {String} cardKey The object name of the card
 * @returns {void}
 */
const saveCardToCollection = (rarity,cardKey) => {
	if(!rarity || !cardKey) {return};
	collectedCards = save.getObj("cards");
	if(isInArray(cardKey,collectedCards[rarity])===false){
		collectedCards[rarity].push(cardKey);
		save.setObj("cards",collectedCards);
		updateCountText();
		showCollectedCards();
	}
};

/**
 * Updates the count text on the navigation bar
 * 
 * @returns {void}
 */
const updateCountText = () => {
	cardCount.textContent = getCollectedCount()+" / "+getTotalCount();
}

/**
 * This creates the actual "Card" that is shown on screen.
 * If the card is new, add some small flare text
 * 
 * @param {Object} card Receieved Card Object
 * @param {String} cardKey Recieved card object name
 * @param {String} rarity Received card rarity
 * @returns {void}
 */
const generateCard = (card,cardKey,rarity) => {
	let newDisplayCard;
	collectedCards = save.getObj("cards");
	console.log(isInArray(cardKey,collectedCards[rarity]))
	if(isInArray(cardKey,collectedCards[rarity])===false) {
		newDisplayCard =  `
			<div class="card">
				<h3>New!</h3>
				<img class="card-img" src="${card.image}" alt="A card named '${card.name}'. Description reads: '${card.desc}'" title="${card.name}, by ${card.artist}" tabindex="0"/>
			</div>
		`;
	} else {
		newDisplayCard =  `
			<div class="card">
				<img class="card-img" src="${card.image}" alt="A card named '${card.name}'. Description reads: '${card.desc}'" title="${card.name}, by ${card.artist}" tabindex="0"/>
			</div>
		`;
	}
	document.querySelector("#deck").insertAdjacentHTML("afterbegin",newDisplayCard);
	// @TODO: make these bitches clickable and show card modal
};

/**
 * This is where the actual card generation begins.
 * This will call getRarity() which in turn calls getSet(),
 * to randomly determine both the cards rarity and set. 
 * Start here when looking for bugs!
 * 
 * @param {none}
 * @returns {void}
 */
const pickNewCard = () => {
	// Get a rarity
	const rarity = getRarity();
	//Get a set
	let set;
	if(rarity === "rare" || rarity === "sRare") {
		set = sets[getRandomSet()];
	} else {
		//This also acts as a fail-safe in the event something goes wrong; it will always default to the daily set
		set = sets[getDailySet()];
	}
	//Randomly pick a card from the set + rarity tier
	Math.seedrandom();
	const randomCardNum = Math.floor(Math.random()*Object.keys(set[rarity]).length);
	const cardKey = Object.keys(set[rarity])[randomCardNum];
	const card = set[rarity][cardKey]
	// Create card
	generateCard(card,cardKey,rarity);
	
	saveCardToCollection(rarity,cardKey);
}

// Container Toggle Function
const toggleContainers = () => {
	cardCollection.classList.remove("hidden");
	setTimeout(()=>{	// We need the rest of this in a 1ms delay or else it toggles too quick and skips the animation
		wrapper.classList.toggle("is-anchored");
		if(wrapper.classList.contains("is-anchored")) {
			toggleBtn.textContent = "View Collection";
			viewingCollection = false;
			setTimeout(()=>{
				cardCollection.classList.add("hidden");
			},1000);
		} else {
			toggleBtn.textContent = "View Deck";
			viewingCollection = true;
		}
	},1);
};
toggleBtn.addEventListener("click",toggleContainers);

// Gacha button
gachaBtn.addEventListener("click",(e)=>{
	e.preventDefault();
	if(!inAMenu) {
		// Animate gacha machine
		gachaBtn.classList.remove("gelatine");
		gachaBtn.offsetWidth;
		gachaBtn.classList.add("gelatine");

		// Thanks to W3 for this code snippet; Scroll window to top of screen if Gacha is clicked/pressed and user is slightly scrolled
		if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
			document.body.scrollTop = 0; // For Safari
			document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
		}

		// Show deck if user clicks gacha while viewing collection
		if(viewingCollection) {
			toggleContainers();
		}

		// Call gacha function
		pickNewCard();
	}
});

// Close Modal
document.querySelector("#modal-agree").addEventListener("click",(e)=>{
	e.preventDefault();
	save.setItem("hasReadModal","true");
	closeModal();
});

// Dark Mode Button
toggleDarkMode.addEventListener("click",(e)=>{
	e.preventDefault();
	const mode = save.getItem("darkMode");
	setScreenMode(mode);
});

// Settings Button
settingsBtn.addEventListener("click",(e)=>{
	e.preventDefault();
	if(viewingSettings === false) {
		viewingSettings = true;
		inAMenu = true;
		settingsMenu.classList.remove("hidden");
	} else {
		viewingSettings = false;
		inAMenu = false;
		settingsMenu.classList.add("hidden");
	}
	// Reset Wipe button in the event they clicked it once
	hasWarnedAgainstWipe = false;
	settingsWipe.textContent = "Wipe Save Data";
});

// Seiso Button
seisoBtn.addEventListener("click",(e)=>{
	e.preventDefault();
	if(seisoMode === "true") {
		save.setItem("seiso","false");
		seisoMode = save.getItem("seiso");
		seisoBtn.textContent = "Seiso Mode: False";
		sets.wannabeSeiso = wannabeSeiso;
	} else if(seisoMode === "false") {
		save.setItem("seiso","true");
		seisoMode = save.getItem("seiso");
		seisoBtn.textContent = "Seiso Mode: True";
		delete sets.wannabeSeiso;
	}
	emptyAllSets();
	populateSetsWithCards();
	populateCollectionWithCards();
	showCollectedCards();
	updateCountText();
});

// Wipe Data Button
settingsWipe.addEventListener("click",(e)=>{
	e.preventDefault();
	if(hasWarnedAgainstWipe === false) {
		hasWarnedAgainstWipe = true;
		settingsWipe.textContent = "Are you sure?"
	} else {
		save.clear();
		window.location.reload();
		return false;
	}
});

window.onload = updateCountText();
