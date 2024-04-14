var DataTypes = require("sequelize").DataTypes;
var _assign_routes = require("./assign_routes");
var _branch = require("./branch");
var _company = require("./company");
var _customer = require("./customer");
var _employee = require("./employee");
var _gender = require("./gender");
var _hiring_detl = require("./hiring_detl");
var _roles = require("./roles");
var _routes = require("./routes");
var _time_card = require("./time_card");
var _users = require("./users");

function initModels(sequelize) {
  var assign_routes = _assign_routes(sequelize, DataTypes);
  var branch = _branch(sequelize, DataTypes);
  var company = _company(sequelize, DataTypes);
  var customer = _customer(sequelize, DataTypes);
  var employee = _employee(sequelize, DataTypes);
  var gender = _gender(sequelize, DataTypes);
  var hiring_detl = _hiring_detl(sequelize, DataTypes);
  var roles = _roles(sequelize, DataTypes);
  var routes = _routes(sequelize, DataTypes);
  var time_card = _time_card(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  branch.belongsTo(company, { as: "company", foreignKey: "company_id"});
  company.hasMany(branch, { as: "branches", foreignKey: "company_id"});
  company.belongsTo(employee, { as: "id_employee", foreignKey: "id"});
  employee.hasOne(company, { as: "company", foreignKey: "id"});
  gender.belongsTo(employee, { as: "id_employee", foreignKey: "id"});
  employee.hasOne(gender, { as: "gender", foreignKey: "id"});
  time_card.belongsTo(employee, { as: "employee", foreignKey: "employee_id"});
  employee.hasMany(time_card, { as: "time_cards", foreignKey: "employee_id"});
  assign_routes.belongsTo(roles, { as: "role", foreignKey: "roles_id"});
  roles.hasMany(assign_routes, { as: "assign_routes", foreignKey: "roles_id"});
  assign_routes.belongsTo(routes, { as: "route", foreignKey: "routes_id"});
  routes.hasMany(assign_routes, { as: "assign_routes", foreignKey: "routes_id"});
  branch.belongsTo(users, { as: "id_user", foreignKey: "id"});
  users.hasOne(branch, { as: "branch", foreignKey: "id"});
  roles.belongsTo(users, { as: "id_user", foreignKey: "id"});
  users.hasOne(roles, { as: "role", foreignKey: "id"});

  return {
    assign_routes,
    branch,
    company,
    customer,
    employee,
    gender,
    hiring_detl,
    roles,
    routes,
    time_card,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
