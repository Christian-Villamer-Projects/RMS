'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('employee', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      emp_no: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true // Assuming emp_no is unique
      },
      first_name: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      middle_name: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      ext_name: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      password: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      image: {
        type: Sequelize.BLOB,
        allowNull: false
      },
      gender: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      company_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'company', key: 'id' }
      },
      branch_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      PIN: {
        type: Sequelize.INTEGER,
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
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('employee');
  }
};
