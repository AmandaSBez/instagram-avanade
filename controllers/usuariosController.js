const { Usuario, sequelize } = require('../models');
//const { Op } = require("sequelize");

const usuariosController = {
    index: async (req, res) => {
        let usuarios = await Usuario.findAll();
        return res.json(usuarios);
    },
    create: async(req,res) => {
        let {nome, email, senha} = req.body;
        let novoUsuario = await Usuario.create({
            nome, email, senha
        });
        return res.json(novoUsuario);
    },
    // update: async(req,res) => {
    //     Usuario.update({
    //        let {i}
    // },
    delete: async(req,res) => {
        Usuario.destroy({
            where: {
                id: 5
            }
        }).then((resultado) => {
            console.log(resultado);
        })
    }
}

Usuario.findAll().then((resultado) => {
    console.table(resultado.map(user => user.toJSON()));
});

module.exports = usuariosController;