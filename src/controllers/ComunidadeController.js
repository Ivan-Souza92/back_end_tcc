const Comunidade = require('../models/Comunidade');

module.exports = {

    async store(req, res) {
        const { nome, qtd_pessoas_atendidas, email } = req.body;
        try {
            const comunidade = await Comunidade.create({ nome, qtd_pessoas_atendidas, email });
            return res.status(200).json({comunidade});

        } catch (error) {
            res.status(400).json({ error })
        }
    },
    async index(req, res) {
        try {
            const comunidade  = await Comunidade.findAll();
            return res.status(200).json(comunidade);

        } catch (error) {
            res.status(400).json({ error })
        }
    },
}