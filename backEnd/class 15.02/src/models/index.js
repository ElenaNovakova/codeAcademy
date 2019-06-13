import Sequelize from 'sequelize';
import connection from '../db/sequelize';

const models = {
  Student: connection.import('../students/model'),
};

Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.connection = connection;
models.Sequelize = Sequelize;

export default models;
