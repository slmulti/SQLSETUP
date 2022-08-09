const db = require('../db')

async function main () {
    await db.query('DELETE FROM books WHERE isbn = 12345')
}

main()