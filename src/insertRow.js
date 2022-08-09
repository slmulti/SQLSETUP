const db = require('../db')

async function main () {
    await db.query('INSERT INTO books VALUES(757181564, "Wuthering Heights", "Emily Bronte", 288)')
    await db.query('INSERT INTO books VALUES(8455457, "Brave New World", "Aldous huxley", 310)')
    await db.query('INSERT INTO books VALUES(0140009728, "Nineteen Eighty-four", "George Orwell", 314)')
    await db.query('INSERT INTO books VALUES(0684717603, "The GReat Gadsby", "F. Scott Fitzgerald", 193)')
    console.log("***row added")
}

main()