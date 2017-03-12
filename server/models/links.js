'use strict';
module.exports = function(sequelize, DataTypes) {
  var Links = sequelize.define('Links', {
    title: DataTypes.STRING,
    destination_url: DataTypes.STRING,
    user_id: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Links;
};