const { Model, DataTypes } = require('sequelize');

class PublicoAlvo extends Model{
    static init(sequelize) {
        super.init({
            descricao: DataTypes.STRING
        }, {
            sequelize,
            
        })
    }

    static associate(models){
        this.belongsToMany(models.Comunidade, {through:'publico_alvos_comunidades',foreignKey: 'publico_alvo_id', as: 'publico_alvo'});
    }

}

module.exports = PublicoAlvo;