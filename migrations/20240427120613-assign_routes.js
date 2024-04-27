'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('assign_routes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      roles_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'roles',
          key: 'id'
        }
      },
      routes_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'routes',
          key: 'id'
        }
      },
      isview: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      isinsert: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      isdelete: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      isupdate: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      isprocess: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('assign_routes');
  }
};
