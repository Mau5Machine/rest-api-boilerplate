module.export = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'user',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: true,
      freezeTableName: true,
    }
  );

  User.associate = function (models) {
   // User.belongsToMany(models.company, { through: "userCompany" });
  };

  return User;
};

