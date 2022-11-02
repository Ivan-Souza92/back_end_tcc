'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    return await queryInterface.createTable('publico_alvos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  async down(queryInterface, Sequelize) {

    return await queryInterface.dropTable('publico_alvo');
  }
};