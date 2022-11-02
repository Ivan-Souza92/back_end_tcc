const GrupoExtensao = require('../models/GrupoExtensao');
const Comunidade = require('../models/Comunidade');

module.exports = {

    async index(req, res) {
        try {
            const { comunidade_id } = req.params;
            const comunidade = await Comunidade.findOne({
                where: { comunidade_id: comunidade_id },
                include: [{ model: GrupoExtensao, as: 'grupo_extensao', through: { attributes: [] } }]
            })
            if (!comunidade) {
                return res.status(400).json({ error: 'Comunidade não encontrada' })
            }
            return res.status(200).json({comunidade});
        } catch (error) {
            res.status(400).json({ error })
        }
    }

}

