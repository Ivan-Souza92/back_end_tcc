const GrupoExtensao = require('../models/GrupoExtensao')
const ProfessorExtensionista = require('../models/ProfessorExtensionista');


module.exports = {
    async store(req,res){

        try {
            const { professor_extensionista_id } = req.params;
            
            const { nome, ano_semestre } = req.body;
            const profExtensionista = await ProfessorExtensionista.findByPk(professor_extensionista_id);
    
            if(!profExtensionista){
                return res.status(400).json({ error:'Professor não cadastrado' })
            }
    
            const grupoExtensao = await GrupoExtensao.create({nome, ano_semestre, professor_extensionista_id})
    
            return res.status(200).json({grupoExtensao});
            
        } catch (error) {
            res.status(400).json({error})
        }
    },

    async index(req, res) {
        try {
            const grupoExtensao  = await GrupoExtensao.findAll({
                include:[{
                    association: "professor_extensionista",
                    attributes: ['nome']
                }]
            });
            return res.status(200).json(grupoExtensao);

        } catch (error) {
            res.status(400).json({ error })
        }
    },

    async findByID(req, res) {

        try {
            const { id } = req.params;
            const grupoExtensao = await GrupoExtensao.findByPk(id);
            return res.status(200).json(grupoExtensao);

        } catch (error) {
            res.status(400).json({ error })
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params;
            const grupoExtensao = await GrupoExtensao.findByPk(id);

            if (!grupoExtensao) {
                res.status(401).json({ message: 'Grupo de Extensão não Encontrado' })
            } else {

                GrupoExtensao.destroy({ where: { id } })
                res.status(200).json({ ok: true })
            }

        } catch (error) {
            res.status(400).json({ error });
        }
    },

    async update(req, res) {
        try {
            const { id } = req.params;
            const { nome, ano_semestre, professor_extensionista_id } = req.body;
            const grupoExtensao = await GrupoExtensao.findByPk(id);

            if (!grupoExtensao) {
                res.status(401).json({ message: 'Grupo de Extensão não Encontrado!' })
            } else {
                const grupoExtensao = await GrupoExtensao.update({ nome, ano_semestre, professor_extensionista_id }, { where: { id } })

                res.status(200).json({ grupoExtensao });
            }
        } catch (error) {
            res.status(400).json({ error })
        }

    },
}

