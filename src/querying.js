const db = require('../db')

// async function main () {
//     const [data, meta] = await db.query('SELECT author FROM books')
//     console.log(data)
// }

// main()

// async function main () {
//     const [data, meta] = await db.query('SELECT title FROM books WHERE pages > 300')
//     console.log(data)
// }

// main()

// async function main () {
//     const [data, meta] = await db.query('SELECT * FROM books WHERE pages > 300')
//     console.log(data)
// }

// main()

// async function main () {
//     const [data, meta] = await db.query('SELECT * FROM books')
//     console.log(data)
// }

// main()

async function main () {
    const [data, meta] = await db.query('SELECT pages FROM books WHERE author="George Orwell"')
    console.log(data)
}

main()