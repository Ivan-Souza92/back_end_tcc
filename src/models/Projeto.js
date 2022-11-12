const { Model, DataTypes } = require('sequelize');



class Projeto extends Model {
    static init(sequelize) {
        super.init({
            descricao: DataTypes.STRING
        }, {
            sequelize,

        })
    }
    static associate(models){
        this.belongsTo(models.GrupoExtensao, {foreignKey: 'grupo_extensao_id', as: 'grupo_extensaos'});
    }
}

module.exports = Projeto;