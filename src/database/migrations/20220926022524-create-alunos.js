'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    return await queryInterface.createTable('alunos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      grupo_extensao_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'grupo_extensaos', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      curso: {
        type: Sequelize.STRING,
        allowNull: false
      },
      periodo: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      ano_entrada: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      semestre_entrada: {
        type: Sequelize.INTEGER,
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

    return await queryInterface.dropTable('alunos');
  }
};