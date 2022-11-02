const { Model, DataTypes } = require('sequelize');

class Comunidade extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            qtd_pessoas_atendidas: DataTypes.INTEGER,
            email: DataTypes.STRING,

        }, {
            sequelize,
        })
    }
    static associate(models){
        this.belongsToMany(models.PublicoAlvo, {through:'publico_alvos_comunidades',foreignKey: 'comunidade_id', as: 'comunidades'});
    }
}

module.exports = Comunidade;