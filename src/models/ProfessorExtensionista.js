const { Model, DataTypes } = require('sequelize');

class ProfessorExtensionista extends Model{
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            curso: DataTypes.STRING,
        }, {
            sequelize,
            
        })
    }
}

module.exports = ProfessorExtensionista;