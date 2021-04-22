const { Post, sequelize } = require('../models'); //requeringo acesso a models para puder fazes as alterações
const { request } = require('express');

const postsController = {
    index: async (req, res) => {
        let posts = await Post.findAll({
            include: ['usuario', 'comentarios', 'curtiu']
        });
        return res.render('index', { listaPosts: posts });
    },
    show: async(req, res) => {
        const { usuarios_id } = req.params;

        const postsUsuario = await Post.findAll({
        where: {
            usuarios_id
        }
        });
        return res.json(postsUsuario);
    },        
    create: async(req,res) => {
        let {texto, img, n_likes, usuarios_id} = req.body;
        let novoPost = await Post.create({
            texto, img, n_likes, usuarios_id
        });
        return res.json(novoPost);
    },
    update: async (req, res) => {
        let { id } = req.params;
        let { texto, img, n_likes} = req.body;
        let postAtualizado = await Post.update(
            {
                texto, img, n_likes
            }, {
            where: { id }
        });
        return res.json(postAtualizado);
    },
    delete: async(req,res) => {
        let {id} = req.params;
        let postDeletado = await Post.destroy({
            where: {id}
        });
        return res.json(postDeletado);
    }
}

module.exports = postsController;