const db = require('./db');



async function viewAllHouses() {
    const house = await db.viewAllHouses();

}

async function addCharacter() {
    const characters = await db.addCharacter();
}