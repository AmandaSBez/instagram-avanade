const { Usuario } = require('../models')

module.exports = async (req, res, next) => {
    const { email, nome, senha } = req.body

    const user = await Usuario.findAll({ where: { email } })
    if (user.length) {
        res.status(400).json({ erro: "Email já cadastrado" });
        return;
    } else {
        if(!email.length) {
            res.status(400).json({ erro: "Email não preenchido" });
            return;
        }
        if (!nome.length) {
            res.status(400).json({ erro: "Nome não preenchido" });
            return;
        }
        if(!senha.length){
            res.status(400).json({ erro: "Senha não preenchido" });
            return;
        }
        if (senha.length < 6 || senha.length > 12) {
            res.status(400).json({ erro: "A senha precisa ter entre 6 e 12 caracteres" });
            return;
        }
        next();
    }
}