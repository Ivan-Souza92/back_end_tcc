const AcoesExtensionistas = require('../models/AcoesExtensionistas');


module.exports = {

    async store(req, res) {
        const { descricao, status, data_criada, data_executada, aprovada_parceira, aprovada_fmg } = req.body;
        try {
            const acoesExtensionista = await AcoesExtensionistas.create({ descricao, status, data_criada, data_executada, aprovada_parceira, aprovada_fmg});
            return res.status(200).json({ acoesExtensionista });

        } catch (error) {
            res.status(400).json({ error })
        }
    }

}