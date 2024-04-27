const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hiring_detl', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    emp_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    date_hired: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    branch_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sss: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    pagibig: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    tin: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    hmo: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    mode_of_pay: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    monthly_salary: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    daily_salary: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    hourly_salary: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status_employee: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'hiring_detl',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "empdetl_INDEX",
        using: "BTREE",
        fields: [
          { name: "emp_id" },
        ]
      },
    ]
  });
};
