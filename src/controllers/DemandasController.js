const Demandas = require('../models/Demandas');
const Comunidade = require('../models/Comunidade');


module.exports = {

    async store(req, res) {
        try {
            const { comunidade_id } = req.params;
            const comunidade = await Comunidade.findByPk(comunidade_id);

            if (!comunidade) {
                return res.status(400).json({ error: 'Comunidade não cadastrada!' })
            }

            const { descricao } = req.body;
            const demanda = await Demandas.create({ descricao, comunidade_id });

            return res.status(200).json({ demanda });

        } catch (error) {
            res.status(400).json({ error })
        }
    }

}