const ProfessorExtensionista = require('../models/ProfessorExtensionista');


module.exports = {

    async store(req, res) {
        const { nome, curso } = req.body;
        try {
            const professorExtensionista = await ProfessorExtensionista.create({ nome, curso });
            return res.status(200).json({ professorExtensionista });

        } catch (error) {
            res.status(400).json({ error })
        }
    },

    async findByID(req, res) {

        try {
            const { id } = req.params;
            const professor = await ProfessorExtensionista.findByPk(id);
            return res.status(200).json(professor);

        } catch (error) {
            res.status(400).json({ error })
        }
    },

    async update(req, res) {
        try {
            const { id } = req.params;
            const { nome, curso } = req.body;
            const professor = await ProfessorExtensionista.findByPk(id);

            if (!professor) {
                res.status(401).json({ message: 'Professor não encontrado' })
            } else {
                const professor = await ProfessorExtensionista.update({ nome, curso }, { where: { id } })

                res.status(200).json({ professor });
            }
        } catch (error) {
            res.status(400).json({ error })
        }

    },

    async index(req, res) {
        try {
            const professor = await ProfessorExtensionista.findAll();
            return res.status(200).json(professor);

        } catch (error) {
            res.status(400).json({ error })
        }
    },
    async delete(req, res) {
        try {
            const { id } = req.params;
            const professor = await ProfessorExtensionista.findByPk(id);

            if (!professor) {
                res.status(401).json({ message: 'Professor não encontrado' })
            } else {

                ProfessorExtensionista.destroy({ where: { id } })
                res.status(200).json({ ok: true })
            }

        } catch (error) {
            res.status(400).json({ error });
        }
    }

}