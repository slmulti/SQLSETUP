const db = require('../db')

async function main () {
    await db.query('CREATE TABLE books (isbn INTEGER PRIMARY KEY, title TEXT, author TEXT, pages INTEGER)')
    console.log("books table created")
}

main()