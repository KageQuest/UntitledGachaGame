# Untitled Gacha Game
A demo of a browser-based card collection "gacha" game

This project was made as a proof of concept for a friend who wants to have their own "gacha" style game that uses their own art. I threw this demo together in 1-2 weeks using pure HTML5, CSS3 and JavaScript. 

### How it works

When a user clicks/taps the Gachapon machine, a new card will be randomly created. Its rarity and set are determined entirely by RNG, however in the case of "Ultra Rare" or "Legendary" cards, the set is instead determined by the current active daily set, which is determined via seeding math.random() with the current date, and then picking a specific set from an array.

There is also rudimentary save-data, which saves a users collected cards and other additional settings such as darkMode into the browsers localstorage. While this makes it very easy and quick to prototype, it does have a couple downsides such as being able to be accessed and modified by the users (Such as to add or remove cards, assuming they understand and know the syntax and card names to use), or being deleted entirely if the user deletes their browser data. In the future I would like to experiment with using PHP and MySQL or other similar languages to set up and create a proper client-server model, but for now this works perfectly.

### Additional

All images are not redistributed as most of them were grabbed randomly off of twitter, or in the case of the Gachapon machine, google, purely to be used as temporary placeholders for the demo. 

While this project does not look as good as some of my more current websites in terms of design, I am still quite proud of the outcome considering it was made 100% by myself, with the exception of David Bau's seedrandom.js.

You can play the demo live here:

http://ugg.kobadesu.moe/
