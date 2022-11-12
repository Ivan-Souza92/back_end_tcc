const Projeto = require('../models/Projeto');
const GrupoExtensao = require('../models/GrupoExtensao');

module.exports = {

    async store(req, res) {
        const { grupo_extensao_id } = req.params;
        const { descricao } = req.body;

        const grupoExtensao = await GrupoExtensao.findByPk(grupo_extensao_id);

        if (!grupoExtensao) {
            return res.status(400).json({ error: 'Grupo de Extensão não encontrado!' })
        }


        try {
            const projeto = await Projeto.create({ descricao, grupo_extensao_id });
            return res.status(200).json({ projeto });

        } catch (error) {
            res.status(400).json({ error })
        }
    },
    async index(req, res) {
        try {
            const projeto  = await Projeto.findAll({
                include:[{
                    association: "grupo_extensaos",
                    attributes: ['nome']
                }]
            });
            return res.status(200).json(projeto);

        } catch (error) {
            res.status(400).json({ error })
        }
    },
    async findByID(req, res) {

        try {
            const { id } = req.params;
            const projeto = await Projeto.findByPk(id);
            return res.status(200).json(projeto);

        } catch (error) {
            res.status(400).json({ error })
        }
    },
    async update(req, res) {
        try {
            const { id } = req.params;
            const { descricao , grupo_extensao_id } = req.body;
            const projeto = await Projeto.findByPk(id);

            if (!projeto) {
                res.status(401).json({ message: 'Projeto não Encontrado!' })
            } else {
                const projeto = await Projeto.update({ descricao, grupo_extensao_id }, { where: { id } })

                res.status(200).json({ projeto });
            }
        } catch (error) {
            res.status(400).json({ error })
        }

    },

    async delete(req, res) {
        try {
            const { id } = req.params;
            const projeto = await Projeto.findByPk(id);

            if (!projeto) {
                res.status(401).json({ message: 'Projeto não Econtrado!' })
            } else {

                Projeto.destroy({ where: { id } })
                res.status(200).json({ ok: true })
            }

        } catch (error) {
            res.status(400).json({ error });
        }
    },

}