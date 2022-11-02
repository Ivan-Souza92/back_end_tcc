const Representantes = require('../models/Representantes')
const Comunidade = require('../models/Comunidade');


module.exports = {
    async store(req, res) {

        try {
            const { comunidade_id } = req.params;

            const { nome, email, telefone, ativo } = req.body;
            const comunidade = await Comunidade.findByPk(comunidade_id);

            if (!comunidade) {
                return res.status(400).json({ error: 'Comunidade não cadastrada!' })
            }

            const representante = await Representantes.create({ comunidade_id, nome, email, telefone, ativo })

            return res.status(200).json({ representante });

        } catch (error) {
            res.status(400).json({ error })
        }
    }
}