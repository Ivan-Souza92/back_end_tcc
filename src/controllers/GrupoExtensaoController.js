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
    }
}