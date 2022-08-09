const db = require('../db')

async function main () {
    await db.query('ALTER TABLE books ADD author TEXT ')
    console.log("***column added")
}

main()