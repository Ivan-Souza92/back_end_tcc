const { Model, DataTypes } = require('sequelize');

class ComunidadeExtensao extends Model {
    static init(sequelize) {
        super.init({}, {
            sequelize,
        })
    }

    static associate(models) {
        this.belongsToMany(models.Comunidade, {foreignKey: 'grupo_extensao_id', through: 'comunidades_extensaos', otherKey: 'grupo_extensao_id', as: 'grupo_extensao' });
        this.belongsToMany(models.GrupoExtensao, { foreignKey: 'comunidade_id', through: 'comunidades_extensaos', otherKey: 'comunidade_id', as: 'comunidades' });
    }
}




module.exports = ComunidadeExtensao;