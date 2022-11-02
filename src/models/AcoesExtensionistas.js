const { Model, DataTypes } = require('sequelize');

class AcoesExtensionistas extends Model{
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            descricao: DataTypes.STRING,
            status: DataTypes.STRING,
            data_criada: DataTypes.DATE,
            data_executada: DataTypes.DATE,
            aprovada_parceira: DataTypes.BOOLEAN,
            aprovada_fmg: DataTypes.BOOLEAN
        }, {
            sequelize,
        })
    }
}

module.exports = AcoesExtensionistas;