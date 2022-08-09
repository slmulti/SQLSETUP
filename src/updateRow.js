const db = require('../db')

// async function main () {
//     await db.query('UPDATE books SET title = "The Raven" WHERE isbn = 12345')
//     console.log("***row updated")
// }

// main()

async function main () {
    await db.query('UPDATE books SET author = "E.A. Poe" WHERE isbn = 12345')
    console.log("***row updated")
}

main()