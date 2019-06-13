export default (sequelize, DataType) => {
  const User = sequelize.define(
    'users', {
      id: {
        type: DataType.STRING,
        primaryKey: true,
      },
      email: {
        type: DataType.STRING,
        allowNull: false,
        validate: {
          isEmail: {
            args: true,
            msg: 'Invalid email'
          }
        }
      },
      name: {
        type: DataType.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [5, 50],
            msg: 'The name should be between 5 and 50 characers'
          }
        }
      }
    }
  )
};
