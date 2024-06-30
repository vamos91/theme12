// const mysql = require('mysql2')
const { faker } = require('@faker-js/faker')
const cnx = require('../connection')
// const museums = require('../../../request/data/museum')

//const artist = require('../../../request/data/artist.json')
const artwork = require('../../../request/data/artwork.json')
//const gallery = require('../../../request/data/gallery.json')

// for (let index = 0; index < artist.length; index++) {
//     console.log(artist[index])
//     cnx.query('insert into artist (name, style, nationality, period, created_at, updated_at) values (?, ?, ?, ?, ?, ?)'
//         , [artist[index].name, artist[index].style, artist[index].nationality, artist[index].period, faker.date.past(), faker.date.past()]
//         , (err, result) => {
//             if (err) {
//                 console.log(err)
//             }
//         })
// }

// for (let index = 0; index < gallery.length; index++) {
//     cnx.query('insert into gallery (name, address, city, type, created_at, updated_at) values (?, ?, ?, ?, ?, ?)'
//         , [gallery[index].name, gallery[index].address, gallery[index].city, gallery[index].type,faker.date.past(), faker.date.past()]
//         , (err, result) => {
//             if (err) {
//                 console.log(err)
//             }
//         })
// }

for (let index = 0; index < artwork.length; index++) {
    cnx.query('insert into artwork (title, description, theme, date_of_creation, artist_id, gallery_id, created_at, updated_at) values (?, ?, ?, ?, ?, ?, ?, ?)'
        , [artwork[index].title, artwork[index].description, artwork[index].theme, faker.date.past(), artwork[index].artist_id, artwork[index].gallery_id, faker.date.past(), faker.date.past()]
        , (err, result) => {
            if (err) {
                console.log(err)
            }
        })
}
    

