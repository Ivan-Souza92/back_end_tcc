const { Model, DataTypes } = require('sequelize');

class Demandas extends Model{
    static init(sequelize) {
        super.init({
            descricao: DataTypes.STRING
        }, {
            sequelize,
            
        })
    }
    static associate(models){
        this.hasMany(Demandas, {foreignKey: 'comunidade_id', as: 'comunidade'});
    }
}

module.exports = Demandas;