const { Model, DataTypes } = require('sequelize');

class GrupoExtensao extends Model{
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            ano_semestre: DataTypes.INTEGER,
        }, {
            sequelize,
        })
    }

    static associate(models){
        this.hasMany(models.GrupoExtensao, {foreignKey: 'professor_extensionista_id', as: 'professor_extensionista'});
    }
}

module.exports = GrupoExtensao;