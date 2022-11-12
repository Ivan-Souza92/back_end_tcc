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
    async findByID(req, res) {

        try {
            const { id } = req.params;
            const comunidade = await Comunidade.findByPk(id);
            return res.status(200).json(comunidade);

        } catch (error) {
            res.status(400).json({ error })
        }
    },

    async update(req, res) {
        try {
            const { id } = req.params;
            const { nome, qtd_pessoas_atendidas, email } = req.body;
            const comunidade = await Comunidade.findByPk(id);

            if (!comunidade) {
                res.status(401).json({ message: 'Professor não encontrado' })
            } else {
                const comunidade = await Comunidade.update({ nome, qtd_pessoas_atendidas, email }, { where: { id } })

                res.status(200).json({ comunidade });
            }
        } catch (error) {
            res.status(400).json({ error })
        }

    },
    async delete(req, res) {
        try {
            const { id } = req.params;
            const comunidade = await Comunidade.findByPk(id);

            if (!comunidade) {
                res.status(401).json({ message: 'Comunidade não encontrada!' })
            } else {

                Comunidade.destroy({ where: { id } })
                res.status(200).json({ ok: true })
            }

        } catch (error) {
            res.status(400).json({ error });
        }
    }
}