const Aluno = require('../models/Aluno')
const GrupoExtensao = require('../models/GrupoExtensao')


module.exports = {
    async store(req,res){

        try {
            const { grupo_extensao_id } = req.params;
            
            const { nome, curso, periodo, ano_entrada, semestre_entrada } = req.body;
            const grupo_extensao = await GrupoExtensao.findByPk(grupo_extensao_id);
    
            if(!grupo_extensao){
                return res.status(400).json({ error:'Grupo Extensão não existe' })
            }
    
            const alunos = await Aluno.create({grupo_extensao_id, nome, curso, periodo, ano_entrada, semestre_entrada})
    
            return res.status(200).json({alunos});
            
        } catch (error) {
            res.status(400).json({error})
        }
    },

    async index(req, res) {
        try {
            const aluno  = await Aluno.findAll({
                include:[{
                    association: "grupo_extensaos",
                    attributes: ['nome']
                }]
            });
            return res.status(200).json(aluno);

        } catch (error) {
            res.status(400).json({ error })
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params;
            const aluno = await Aluno.findByPk(id);

            if (!aluno) {
                res.status(401).json({ message: 'Aluno não Econtrado!' })
            } else {

                Aluno.destroy({ where: { id } })
                res.status(200).json({ ok: true })
            }

        } catch (error) {
            res.status(400).json({ error });
        }
    },

    async findByID(req, res) {

        try {
            const { id } = req.params;
            const aluno = await Aluno.findByPk(id);
            return res.status(200).json(aluno);

        } catch (error) {
            res.status(400).json({ error })
        }
    },

    async update(req, res) {
        try {
            const { id } = req.params;
            const { nome, curso, periodo, ano_entrada, semestre_entrada, grupo_extensao_id } = req.body;
            const aluno = await Aluno.findByPk(id);

            if (!aluno) {
                res.status(401).json({ message: 'Projeto não Encontrado!' })
            } else {
                const aluno = await Aluno.update({  nome, curso, periodo, ano_entrada, semestre_entrada, grupo_extensao_id }, { where: { id } })

                res.status(200).json({ aluno });
            }
        } catch (error) {
            res.status(400).json({ error })
        }

    },

}