Post.findAll().then((resultado) => {
    console.table(resultado.map(user => user.toJSON()));
});

// Post.create(
//     {
//         texto: 'Opa, PC crashou',
//         usuarios_id: 6
//     }
// ).then((resultado) => {
//     console.table(resultado.toJSON());
// });

// Posts.update({
//    texto: 'Tenho que ir agora',
// }, {
//     where: {
//         id: 6
//     }
// }).then((resultado) => {
//     console.table(resultado);
// })

// Posts.destroy({
//     where: {
//         id: 5
//     }
// }).then((resultado) => {
//     console.log(resultado);
// })