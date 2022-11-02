const { Model, DataTypes } = require('sequelize');

class Aluno extends Model{
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            curso: DataTypes.STRING,
            periodo: DataTypes.STRING,
            ano_entrada: DataTypes.INTEGER,
            semestre_entrada: DataTypes.INTEGER
        }, {
            sequelize,
        })
    }

    static associate(models){
        this.hasMany(Aluno, {foreignKey: 'grupo_extensao_id', as: 'grupo_extensao'});
    }
}

module.exports = Aluno;