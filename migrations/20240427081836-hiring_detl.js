'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('hiring_detl', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      emp_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      date_hired: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      company_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      branch_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      sss: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      pagibig: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      tin: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      hmo: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      mode_of_pay: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      monthly_salary: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      daily_salary: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      hourly_salary: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      status_employee: {
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
    await queryInterface.dropTable('hiring_detl');
  }
};
