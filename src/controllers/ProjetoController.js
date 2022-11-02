const Projeto = require('../models/Projeto');
const GrupoExtensao = require('../models/GrupoExtensao');

module.exports = {

    async store(req, res) {
        const { grupo_extensao_id } = req.params;
        const { descricao } = req.body;

        const grupoExtensao = await GrupoExtensao.findByPk(grupo_extensao_id);

        if (!grupo_extensao_id) {
            return res.status(400).json({ error: 'Grupo de Extensão não encontrado!' })
        }


        try {
            const projeto = await Projeto.create({ descricao, grupo_extensao_id });
            return res.status(200).json({ projeto });

        } catch (error) {
            res.status(400).json({ error })
        }
    }

}