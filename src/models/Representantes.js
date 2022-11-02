const { Model, DataTypes } = require('sequelize');


class Representantes extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
            telefone: DataTypes.STRING,
            ativo: DataTypes.BOOLEAN,
        }, {
            sequelize,

        })
    }
    static associate(models){
        this.hasMany(models.Representantes, {foreignKey: 'comunidade_id', as: 'comunidade'});
    }
}

module.exports = Representantes;