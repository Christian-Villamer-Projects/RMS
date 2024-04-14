const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('assign_routes', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    roles_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'roles',
        key: 'id'
      }
    },
    routes_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'routes',
        key: 'id'
      }
    },
    isview: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    isinsert: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    isdelete: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    isupdate: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    isprocess: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'assign_routes',
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
        name: "roles_index",
        using: "BTREE",
        fields: [
          { name: "roles_id" },
        ]
      },
      {
        name: "routes_id",
        using: "BTREE",
        fields: [
          { name: "routes_id" },
        ]
      },
    ]
  });
};
