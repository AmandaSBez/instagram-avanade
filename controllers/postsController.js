const { Post, sequelize } = require('../models'); //requeringo acesso a models para puder fazes as alterações

const postsController = {
    index: async (req, res) => {
        let posts = await Post.findAll();
        return res.json(posts);
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