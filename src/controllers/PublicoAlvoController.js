const PublicoAlvo = require('../models/PublicoAlvo');


module.exports = {

    async store(req, res) {
        const { descricao } = req.body;
        try {
            const publicoAlvo = await PublicoAlvo.create({ descricao });
            return res.status(200).json({publicoAlvo});

        } catch (error) {
            res.status(400).json({ error })
        }
    }

}