/**
 * This file contains every single card, organized into sets and rarity.
 * For most updates, this is the only file that will ever need to be edited.
 * 
 * @author Kage Longbotham
 * @year 2021
 * @todo I should consider minifying this file for distribution. It will get VERY large as more cards are added.
 */

export const getFullSetName = (set) => {
	if(set==="maid") {return "Maid"}
	else if(set==="neko") {return "Neko"}
	else if(set==="beach") {return "Beach"}
	else if(set==="elegant") {return "Elegant"}
	else if(set==="angelDemon") {return "Angel / Demon"}
	else if(set==="miku") {return "Miku"}
	else if(set==="wannabeSeiso") {return "Wannabe Seiso"}
};

export const sets = {
	maid: {rare: {}, sRare: {}, uRare: {}, legendary: {}},
	neko: {rare: {}, sRare: {}, uRare: {}, legendary: {}},
	beach: {rare: {}, sRare: {}, uRare: {}, legendary: {}},
	elegant: {rare: {}, sRare: {}, uRare: {}, legendary: {}},
	angelDemon: {rare: {}, sRare: {}, uRare: {}, legendary: {}},
	miku: {rare: {}, sRare: {}, uRare: {}, legendary: {}}
};

export const wannabeSeiso = {
	rare: {}, sRare: {}, uRare: {}, legendary: {}
};

export const cardList = {
	rare: {
		maidLeigh1: {
			name: "Pink Maid",
			image: "images/cards/rare/maidLeigh1.jpg",
			desc: "A bust-image of a girl with pink hair and a pink maid outfit. She is making small hearts with her fingers.",
			artist: "Leigh-chan",
			social: "https://twitter.com/itsleighchan",
			sets: [
				"maid"
			]
		},
		maidLeigh2: {
			name: "Purple Maid",
			image: "images/cards/rare/maidLeigh2.jpg",
			desc: "A bust-image of a girl with black hair and a purple maid outfit. She is making a heart with her hands.",
			artist: "Leigh-chan",
			social: "https://twitter.com/itsleighchan",
			sets: [
				"maid"
			]
		},
		maidRetro: {
			name: "Retro Maid",
			image: "images/cards/rare/maidRetro.jpg",
			desc: "A stylized image of a maid from the 90s, holding a platter that has sushi and a milkshake.",
			artist: "Uyyu",
			social: "https://twitter.com/UYYUMZ",
			sets: [
				"maid"
			]
		},
		elegantScathach: {
			name: "Fate/Go Scathach",
			image: "images/cards/rare/elegantScathach.jpg",
			desc: "Scatach from the game Fate Grand Order. She is wearing a long purple dress.",
			artist: "Ririko",
			social: "https://www.pixiv.net/en/users/1480420",
			sets: [
				"elegant"
			]
		},
		elegantHokuro: {
			name: "Hokuro",
			image: "images/cards/rare/elegantHokuro.jpg",
			desc: "An anime woman in a white dress, with a matching white hat and white hair.",
			artist: "Nijifeti",
			social: "https://tmblr.co/ZfHPWy2dsOh8m",
			sets: [
				"elegant"
			]
		},
		elegantAquarium: {
			name: "Aquarium Girl",
			image: "images/cards/rare/elegantAquarium.jpg",
			desc: "A cute girl in a frilly dress stands in front of many aquatic animals, such as dolphins, seals and penguins.",
			artist: "Ekuboon",
			social: "https://ekuboon.tumblr.com/post/170715918855",
			sets: [
				"elegant"
			]
		},
		nekoSweets: {
			name: "Catgirl on Sweets",
			image: "images/cards/rare/nekoSweets.jpg",
			desc: "A catgirl with a large fork stands on top of a bunch of desserts.",
			artist: "Biscuit Cake",
			social: "https://twitter.com/biscuit___cake",
			sets: [
				"neko"
			]
		},
		nekoSweets2: {
			name: "Maid Neko with Desserts",
			image: "images/cards/rare/nekoSweets2.jpg",
			desc: "A catgirl in a maid outfit is floating, surrounded by snacks and desserts.",
			artist: "Kerokozu",
			social: "https://twitter.com/kerokozu",
			sets: [
				"neko",
				"maid"
			]
		},
		nekoGura: {
			name: "Gawr Gura Neko",
			image: "images/cards/rare/nekoGura.png",
			desc: "The popular V-Tuber Gawr Gura dressed up as a catgirl.",
			artist: "Makkusuoko",
			social: "https://twitter.com/makkusuoko",
			sets: [
				"neko"
			]
		},
		seisoBrujitaBunnyGirl: {
			name: "Brujita",
			image: "images/cards/rare/seisoBrujitaBunnyGirl.jpg",
			desc: "",
			artist: "la_brujitaaaa",
			social: "https://twitter.com/la_brujitaaaa/status/1405314610605985793",
			sets: [
				"wannabeSeiso"
			]
		},
		seisoCalliopeMori: {
			name: "Calliope Mori",
			image: "images/cards/rare/seisoCalliopeMori.jpg",
			desc: "",
			artist: "Takahashii_Tice",
			social: "https://twitter.com/Takahashii_Tice",
			sets: [
				"wannabeSeiso"
			]
		},
		seisoLeatherZombieGirl: {
			name: "Zombie Nurse",
			image: "images/cards/rare/seisoLeatherZombieGirl.jpg",
			desc: "",
			artist: "luenfire",
			social: "https://twitter.com/luenfire",
			sets: [
				"wannabeSeiso"
			]
		},
		angelDemonCerberus: {
			name: "Helltaker Cerberus",
			image: "images/cards/rare/angelDemonCerberus.jpg",
			desc: "",
			artist: "RobotCat",
			social: "https://twitter.com/RobotCatArt",
			sets: [
				"angelDemon"
			]
		},
		angelDemonTaffy: {
			name: "Taffy",
			image: "images/cards/rare/angelDemonTaffy.jpg",
			desc: "",
			artist: "redevot",
			social: "https://twitter.com/redevot",
			sets: [
				"angelDemon"
			]
		},
		angelDemonPlumMostima: {
			name: "Plum + Mostima Costume Swap",
			image: "images/cards/rare/angelDemonPlumMostima.jpg",
			desc: "",
			artist: "Sasa Onigiri",
			social: "https://twitter.com/sasa_onigiri105",
			sets: [
				"angelDemon"
			]
		},
		beachMinnow: {
			name: "Swimsuit Minnow Candy",
			image: "images/cards/rare/beachMinnow.jpg",
			desc: "",
			artist: "Cyberpyunk",
			social: "https://twitter.com/cyberpyunk",
			sets: [
				"beach"
			]
		},
		beachShantae: {
			name: "Swimsuit Shantae",
			image: "images/cards/rare/beachShantae.jpg",
			desc: "",
			artist: "Squibble Ink",
			social: "https://twitter.com/Squibble_Ink",
			sets: [
				"beach"
			]
		},
		beachFamily: {
			name: "Family Beach Day",
			image: "images/cards/rare/beachFamily.jpg",
			desc: "",
			artist: "eunnieverse",
			social: "https://twitter.com/eunnieverse",
			sets: [
				"beach"
			]
		},
		mikuLefty: {
			name: "Lefty Miku",
			image: "images/cards/rare/mikuLefty.jpg",
			desc: "",
			artist: "Lyccaon",
			social: "https://twitter.com/lyccaon_",
			sets: [
				"miku"
			]
		},
		mikuGun: {
			name: "Miku with a Gun",
			image: "images/cards/rare/mikuGun.jpg",
			desc: "",
			artist: "Sidi Popsicle",
			social: "https://twitter.com/SidiPopsicle",
			sets: [
				"miku"
			]
		},
		mikuGoma: {
			name: "Little Hearts Miku",
			image: "images/cards/rare/mikuGoma.jpg",
			desc: "",
			artist: "goma",
			social: "https://twitter.com/sleepyribbits",
			sets: [
				"miku"
			]
		}
	}, 
	sRare: {
		maidEhri: {
			name: "Maid Girl Number 2",
			image: "images/cards/sRare/maidEhri.jpg",
			desc: "A pink line-art drawing of a maid girl, sitting on the floor, smiling.",
			artist: "Ehhri",
			social: "https://twitter.com/ehhhri",
			sets: [
				"maid"
			]
		},
		maidLucoa: {
			name: "Lucoa",
			image: "images/cards/sRare/maidLucoa.jpg",
			desc: "An anime dragon-girl with two different colored eyes. She has a smug expression.",
			artist: "Crunchyroll",
			social: "https://twitter.com/crunchyroll_es",
			sets: [
				"maid"
			]
		},
		maidNurse: {
			name: "Maid Nurse",
			image: "images/cards/sRare/maidNurse.jpg",
			desc: "A girl with a more nurse-like maid outfit is sitting on the ground with a somber expression.",
			artist: "KFR",
			social: "https://twitter.com/kfrworks",
			sets: [
				"maid"
			]
		},
		elegantPrinz: {
			name: "Azur Lane - Prinz Eugen",
			image: "images/cards/sRare/elegantPrinz.jpg",
			desc: "The character Prinz Eugen from the mobile game Azur Lane. She is wearing a nice black dress.",
			artist: "Calder",
			social: "https://www.pixiv.net/en/users/20764416",
			sets: [
				"elegant"
			]
		},
		elegantShopGirl: {
			name: "Volume 5 - Free Life: The Struggle to Find Anything in Another World",
			image: "images/cards/sRare/elegantShopGirl.jpg",
			desc: "The cover for the manga 'Free Life: The Struggle to Find Anything in Another World'.",
			artist: "Sakurapion",
			social: "https://twitter.com/sakurapion",
			sets: [
				"elegant",
				"angelDemon"
			]
		},
		elegantAkuma: {
			name: "Halloween Akuma-chan",
			image: "images/cards/sRare/elegantAkuma.jpg",
			desc: "A girl in a witch-like dress sits on a small cushion. She wears a small crown and has bat-like wings.",
			artist: "Kani",
			social: "https://twitter.com/kani_biimu",
			sets: [
				"elegant"
			]
		},
		nekoRimu: {
			name: "Rimu",
			image: "images/cards/sRare/nekoRimu.jpg",
			desc: "A catgirl with a finger on her chin, with a curious expression on her face.",
			artist: "Noyu",
			social: "https://twitter.com/NOYU23386566",
			sets: [
				"neko"
			]
		},
		nekoTim: {
			name: "Curled-up Catgirl",
			image: "images/cards/sRare/nekoTim.jpg",
			desc: "A catgirl curled in a ball, with her arms outstretched.",
			artist: "hks",
			social: "https://twitter.com/timbougami",
			sets: [
				"neko"
			]
		},
		nekoSuit: {
			name: "Business Catgirl",
			image: "images/cards/sRare/nekoSuit.jpg",
			desc: "A catgirl dressed in business attire. She holds a pair of glasses, and is wearing a dress shirt and pants, with a tie.",
			artist: "Ao USA",
			social: "https://twitter.com/AoUSA0328",
			sets: [
				"neko"
			]
		},
		seisoAstaroth: {
			name: "Freezing Astaroth",
			image: "images/cards/sRare/seisoAstaroth.jpg",
			desc: "",
			artist: "adamant369",
			social: "https://twitter.com/adamant369",
			sets: [
				"wannabeSeiso"
			]
		},
		seisoModeusJustice: {
			name: "Modeus & Justice",
			image: "images/cards/sRare/seisoModeusJustice.jpg",
			desc: "",
			artist: "noaharbre",
			social: "https://twitter.com/noaharbre",
			sets: [
				"wannabeSeiso"
			]
		},
		seisoNagatoroWet: {
			name: "Nagatoro Wet",
			image: "images/cards/sRare/seisoNagatoroWet.jpg",
			desc: "",
			artist: "hood_x_art",
			social: "https://twitter.com/hood_x_art",
			sets: [
				"wannabeSeiso"
			]
		},
		angelDemonBrujita: {
			name: "3D Brujita",
			image: "images/cards/sRare/angelDemonBrujita.jpg",
			desc: "",
			artist: "Brujita",
			social: "https://twitter.com/la_brujitaaaa",
			sets: [
				"angelDemon"
			]
		},
		angelDemonJustice: {
			name: "Maid Justice",
			image: "images/cards/sRare/angelDemonJustice.jpg",
			desc: "",
			artist: "Noaharbre",
			social: "https://twitter.com/noaharbre",
			sets: [
				"angelDemon",
				"maid"
			]
		},
		angelDemon2B: {
			name: "2B Oni",
			image: "images/cards/sRare/angelDemon2B.jpg",
			desc: "",
			artist: "B4d",
			social: "https://twitter.com/__B4d__",
			sets: [
				"angelDemon"
			]
		},
		beachMermaid: {
			name: "Mermaid Roller",
			image: "images/cards/sRare/beachMermaid.jpg",
			desc: "",
			artist: "Yupiteru",
			social: "https://twitter.com/_yupiteru_",
			sets: [
				"beach"
			]
		},
		beachVacation: {
			name: "Summer Vacation",
			image: "images/cards/sRare/beachVacation.jpg",
			desc: "",
			artist: "369 Teas",
			social: "https://twitter.com/369teas",
			sets: [
				"beach"
			]
		},
		beachBabe: {
			name: "After a Swim",
			image: "images/cards/sRare/beachBabe.jpg",
			desc: "",
			artist: "Myabit",
			social: "https://twitter.com/tokkihouse",
			sets: [
				"beach"
			]
		},
		mikuPeachi: {
			name: "Team Miku",
			image: "images/cards/sRare/mikuPeachi.jpg",
			desc: "",
			artist: "Eevee Peachi",
			social: "https://twitter.com/EeveePeachi",
			sets: [
				"miku"
			]
		},
		mikuWorld: {
			name: "Miku - World is Mine",
			image: "images/cards/sRare/mikuWorld.jpg",
			desc: "",
			artist: "Mikurin Art",
			social: "https://twitter.com/MikurinArt",
			sets: [
				"miku"
			]
		},
		mikuExpo: {
			name: "Miku Expo 2021",
			image: "images/cards/sRare/mikuExpo.jpg",
			desc: "",
			artist: "Osi Popz",
			social: "https://twitter.com/OsiPopz",
			sets: [
				"miku"
			]
		}
	}, 
	uRare: {
		maidAsh: {
			name: "Maid Ash Ketchum",
			image: "images/cards/uRare/maidAsh.png",
			desc: "Ash Ketchum, from the childrens anime ‘Pokemon’, is wearing a maid outfit with a bashful look on his face.",
			artist: "Pokemon",
			social: "https://www.pokemon.com/us/",
			sets: [
				"maid"
			]
		},
		maidTrinity: {
			name: "Maid Trinity Infinty",
			image: "images/cards/uRare/maidTrinity.jpg",
			desc: "A darker-skinned anime girl with long blue hair in a maid outfit. She is making a heart with her hands.",
			artist: "Trinity Infinity",
			social: "https://twitter.com/Trinityin4",
			sets: [
				"maid"
			]
		},
		maidLio: {
			name: "Maid Lio Fotia",
			image: "images/cards/uRare/maidLio.jpg",
			desc: "An image of Lio Fotia from the film Promare. He is in a maid outfit.",
			artist: "Leader of Burnish",
			social: "https://twitter.com/LEADEROFBURNISH",
			sets: [
				"maid"
			]
		},
		elegantIzumi: {
			name: "Royal Girl (OC)",
			image: "images/cards/uRare/elegantIzumi.jpg",
			desc: "A girl sits in a white void, accented with royal blues and purples. She wears a golden crown and a small bridal-like dress.",
			artist: "Izumi",
			social: "https://twitter.com/izumi516",
			sets: [
				"elegant"
			]
		},
		elegantCatgirl: {
			name: "Resting Catgirl",
			image: "images/cards/uRare/elegantCatgirl.jpg",
			desc: "A catgirl sits in a resting chair. Multiple cats surround her, sleeping. She holds a tablet and a pen, in a thinking pose.",
			artist: "Planet--Anime",
			social: "https://planet--anime.tumblr.com/post/178736513130/cats-galore-original",
			sets: [
				"elegant",
				"neko"
			]
		},
		elegantMiku: {
			name: "Snow Miku 2019",
			image: "images/cards/uRare/elegantMiku.jpg",
			desc: "An image of Hatsune Miku in her 'snow' outfit from 2019. She is joined by a small rabbit and is floating on some clouds.",
			artist: "ttnap",
			social: "https://www.pixiv.net/en/users/11397418",
			sets: [
				"elegant",
				"miku"
			]
		},
		nekoMaid: {
			name: "Seaside Neko Maid",
			image: "images/cards/uRare/nekoMaid.jpg",
			desc: "A catgirl stands on a pier in a maid outfit. Shes holding a platter with a drink and cake.",
			artist: "アミバミン",
			social: "https://www.pixiv.net/en/users/639688",
			sets: [
				"neko",
				"maid",
				"beach"
			]
		},
		nekoNatsuki: {
			name: "Neko Natsuki",
			image: "images/cards/uRare/nekoNatsuki.png",
			desc: "The character Natsuki from the game Doki Doki Literature Club. She has cat ears and a tail, and is turned to the side pouting.",
			artist: "Natsukitty",
			social: "http://natsukitty.tumblr.com/post/168992036333/nyatsuki",
			sets: [
				"neko"
			]
		},
		nekoCalico: {
			name: "Calico in a Yukata",
			image: "images/cards/uRare/nekoCalico.jpg",
			desc: "A catgirl is in a Yukata that is patterned with Calico cat colors. She is holding a paper lantern.",
			artist: "Nanataroo",
			social: "https://twitter.com/nanataroo_7",
			sets: [
				"neko"
			]
		},
		seisoBikini1: {
			name: "Bikini1",
			image: "images/cards/uRare/seisoBikini1.jpg",
			desc: "",
			artist: "OW33166620",
			social: "https://twitter.com/OW33166620",
			sets: [
				"wannabeSeiso"
			]
		},
		seisoBikini2: {
			name: "Bikini2",
			image: "images/cards/uRare/seisoBikini2.jpg",
			desc: "",
			artist: "OW33166620",
			social: "https://twitter.com/OW33166620",
			sets: [
				"wannabeSeiso"
			]
		},
		seisoBikini3: {
			name: "Bikini3",
			image: "images/cards/uRare/seisoBikini3.jpg",
			desc: "",
			artist: "Hinaki0102",
			social: "https://twitter.com/Hinaki0102",
			sets: [
				"wannabeSeiso"
			]
		},
		angelDemonGanyu: {
			name: "Ganyu",
			image: "images/cards/uRare/angelDemonGanyu.jpg",
			desc: "",
			artist: "z3 Cut",
			social: "https://twitter.com/z3_cut",
			sets: [
				"angelDemon"
			]
		},
		angelDemonModeus: {
			name: "Modeus",
			image: "images/cards/uRare/angelDemonModeus.jpg",
			desc: "",
			artist: "Alamander Arts",
			social: "https://twitter.com/AlamanderArts",
			sets: [
				"angelDemon"
			]
		},
		angelDemonArch: {
			name: "Fallen Archangel",
			image: "images/cards/uRare/angelDemonArch.jpg",
			desc: "",
			artist: "M_Artomic",
			social: "https://twitter.com/M_Artomic",
			sets: [
				"angelDemon",
				"elegant"
			]
		},
		beachCostumes: {
			name: "Beach Costumes",
			image: "images/cards/uRare/beachCostumes.jpg",
			desc: "",
			artist: "Hilic",
			social: "https://twitter.com/hilimuc",
			sets: [
				"beach"
			]
		},
		beachBikini: {
			name: "Bikini by the Rocks",
			image: "images/cards/uRare/beachBikini.jpg",
			desc: "",
			artist: "KFR",
			social: "https://twitter.com/kfrworks",
			sets: [
				"beach"
			]
		},
		beachSummerDay: {
			name: "Summer Day",
			image: "images/cards/uRare/beachSummerDay.jpg",
			desc: "",
			artist: "Moehime Union",
			social: "https://twitter.com/moehime_union",
			sets: [
				"beach",
				"wannabeSeiso"
			]
		},
		mikuFrogr: {
			name: "Fancy Miku",
			image: "images/cards/uRare/mikuFrogr.jpg",
			desc: "",
			artist: "Frogr",
			social: "https://twitter.com/Frogr__",
			sets: [
				"miku",
				"elegant"
			]
		},
		mikuBottle: {
			name: "Bottle Miku",
			image: "images/cards/uRare/mikuBottle.jpg",
			desc: "",
			artist: "Mantourei",
			social: "https://twitter.com/mantourei",
			sets: [
				"miku"
			]
		},
		mikuJuice: {
			name: "¥200 Miku",
			image: "images/cards/uRare/mikuJuice.jpg",
			desc: "",
			artist: "Rosetintedart",
			social: "https://twitter.com/rosetintedart_",
			sets: [
				"miku"
			]
		}
	}, 
	legendary: {
		maidKanna: {
			name: "Kanna Kamui",
			image: "images/cards/legendary/maidKanna.jpg",
			desc: "An anime dragon-girl is laying on a green mattress, sleeping with a happy expression.",
			artist: "Crunchyroll",
			social: "https://twitter.com/crunchyroll_es",
			sets: [
				"maid"
			]
		},
		maidMaika: {
			name: "Maika",
			image: "images/cards/legendary/maidMaika.jpg",
			desc: "A close-up of an anime maid with evil-looking eyes, over a pure-white background.",
			artist: "Crunchyroll",
			social: "https://twitter.com/crunchyroll_es",
			sets: [
				"maid"
			]
		},
		maidHideri: {
			name: "Hideri Kanzaki",
			image: "images/cards/legendary/maidHideri.jpg",
			desc: "A close-up of a maid with white hair and a pink outfit. They are making a cute pose.",
			artist: "Crunchyroll",
			social: "https://twitter.com/crunchyroll_es",
			sets: [
				"maid"
			]
		},
		elegantCardCaptor: {
			name: "Sakura x Pokemon",
			image: "images/cards/legendary/elegantCardCaptor.jpg",
			desc: "The character Card Captor Sakura is shown with numerous pink pokemon.",
			artist: "Kisumi-Rei",
			social: "https://kisumi-rei.tumblr.com/post/178880997712",
			sets: [
				"elegant"
			]
		},
		elegantYu: {
			name: "Yu",
			image: "images/cards/legendary/elegantYu.jpg",
			desc: "An elf-girl with a large plant accessory on her head is standing with her arms spread to her sides, as if presenting her outfit.",
			artist: "Bouzumi",
			social: "https://twitter.com/bouzumi_",
			sets: [
				"elegant"
			]
		},
		elegantSpace: {
			name: "Space Bride",
			image: "images/cards/legendary/elegantSpace.jpg",
			desc: "A girl in a fluffy bridal outfit is floating in space. She is holding a bouquet, and is surrounded by flowers.",
			artist: "Nijifeti",
			social: "https://tmblr.co/ZfHPWy2cpzG7N",
			sets: [
				"elegant"
			]
		},
		nekoCyan: {
			name: "Cyan",
			image: "images/cards/legendary/nekoCyan.jpg",
			desc: "The character Cyan from the anime Show by Rock.",
			artist: "Feint07",
			social: "https://feint07.tumblr.com/post/165637889567/cyan-from-show-by-rock-fan-art",
			sets: [
				"neko"
			]
		},
		nekoMaika: {
			name: "Neko Maika",
			image: "images/cards/legendary/nekoMaika.jpg",
			desc: "The character Maika from the anime Blend-S, with black cat ears and a tail. She is wearing her pink maid outfit, and is doing a cute pose.",
			artist: "Culti",
			social: "https://twitter.com/WaifuVibe",
			sets: [
				"neko",
				"maid"
			]
		},
		nekoChocola: {
			name: "Neko Maika",
			image: "images/cards/legendary/nekoChocola.jpg",
			desc: "The character Chocola from Neko Para.",
			artist: "asuuna",
			social: "http://asuuna.tumblr.com/post/125061723872",
			sets: [
				"neko",
				"maid"
			]
		},
		nekoVanilla: {
			name: "Neko Maika",
			image: "images/cards/legendary/nekoVanilla.jpg",
			desc: "The character Vanilla from Neko Para.",
			artist: "asuuna",
			social: "http://asuuna.tumblr.com/post/125061723872",
			sets: [
				"neko",
				"maid"
			]
		},
		seisoBra: {
			name: "Horny Bra Girl",
			image: "images/cards/legendary/seisoBra.jpg",
			desc: "",
			artist: "Sin_Salt",
			social: "https://twitter.com/Sin_Salt",
			sets: [
				"wannabeSeiso"
			]
		},
		seisoFishGirl: {
			name: "Fish girl",
			image: "images/cards/legendary/seisoFishGirl.jpg",
			desc: "",
			artist: "cometub",
			social: "https://twitter.com/cometub",
			sets: [
				"wannabeSeiso"
			]
		},
		seisoSaunaGirl: {
			name: "Sauna Girl",
			image: "images/cards/legendary/seisoSaunaGirl.jpg",
			desc: "",
			artist: "HanbenP",
			social: "https://twitter.com/HanbenP",
			sets: [
				"wannabeSeiso"
			]
		},
		angelDemonHaylau: {
			name: "Pink Angel",
			image: "images/cards/legendary/angelDemonHaylau.jpg",
			desc: "",
			artist: "Lee 1HP",
			social: "https://twitter.com/Lee_1hp",
			sets: [
				"angelDemon"
			]
		}	,
		angelDemonBlue: {
			name: "Blue Angel",
			image: "images/cards/legendary/angelDemonBlue.jpg",
			desc: "",
			artist: "Rumay Chian",
			social: "https://twitter.com/Rumay_Chian",
			sets: [
				"angelDemon"
			]
		},
		angelDemonGothic: {
			name: "Angel Commission (OC)",
			image: "images/cards/legendary/angelDemonGothic.jpg",
			desc: "",
			artist: "KilioKili",
			social: "https://twitter.com/KilioKili",
			sets: [
				"angelDemon"
			]
		},
		beachAsuka: {
			name: "Asuka",
			image: "images/cards/legendary/beachAsuka.jpg",
			desc: "",
			artist: "Muu Shiromiya",
			social: "https://twitter.com/muu_shiromiya",
			sets: [
				"beach"
			]
		},
		beachWet: {
			name: "Wet Sundress",
			image: "images/cards/legendary/beachWet.jpg",
			desc: "",
			artist: "Ranfptn",
			social: "https://twitter.com/ranfptn",
			sets: [
				"beach"
			]
		},
		beachFlap: {
			name: "Flap and Escape",
			image: "images/cards/legendary/beachFlap.jpg",
			desc: "",
			artist: "akmkmk3",
			social: "https://twitter.com/akmkmk3",
			sets: [
				"beach"
			]
		},
		mikuDay: {
			name: "Miku Expo 2021",
			image: "images/cards/legendary/mikuDay.jpg",
			desc: "",
			artist: "farevalee9s",
			social: "https://twitter.com/farevalee9s",
			sets: [
				"miku"
			]
		},
		mikuCute: {
			name: "Cute Miku Sketch",
			image: "images/cards/legendary/mikuCute.jpg",
			desc: "",
			artist: "Eli Cyan",
			social: "https://twitter.com/Eli_cyan",
			sets: [
				"miku"
			]
		},
		mikuPixel: {
			name: "Pixel Miku",
			image: "images/cards/legendary/mikuPixel.png",
			desc: "",
			artist: "tsunchuu",
			social: "https://twitter.com/tsunchuu",
			sets: [
				"miku"
			]
		}
	}
};
