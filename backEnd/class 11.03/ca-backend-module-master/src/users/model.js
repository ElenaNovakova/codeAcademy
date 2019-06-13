export default (sequelize, DataType) => {
  const User = sequelize.define('users', {
    id: {
      type: DataType.STRING,
      primaryKey: true,
    },
    name: {
      type: DataType.STRING,
      allowNull: false,
      required: true
    },
    username: {
      type: DataType.STRING,
      required: true
    },
    email: {
      type: DataType.STRING,
      allowNull: false
    },
    // role: {
    //   type: DataType.ENUM,
    //   values: ['admin', 'user']
    // },
    // status: {
    //   type: DataType.ENUM,
    //   values: ['active', 'disabled'],
    //   defaultValue: 'active'
    // }
  });
  return User;
}