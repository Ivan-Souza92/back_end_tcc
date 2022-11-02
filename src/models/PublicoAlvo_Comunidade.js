const { Model, DataTypes } = require('sequelize');
const Comunidade = require('./Comunidade');

const PublicoAlvo = require('./PublicoAlvo');


class PublicoAlvo_Comunidade extends Model {
    static init(sequelize) {
        super.init({

        }, {
            sequelize,
        })
    }

    static associate(models) {
        this.belongsTo(models.PublicoAlvo, {foreignKey: 'publico_alvo_id', as: 'publico_alvo' });
        this.belongsTo( models.Comunidade , { foreignKey: 'comunidade_id', as: 'comunidades' });
    }
}




module.exports = PublicoAlvo_Comunidade;