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

   

}