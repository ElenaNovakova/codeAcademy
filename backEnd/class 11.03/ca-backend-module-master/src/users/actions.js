import models from '../models/index';
import hat from 'hat';

const Users = models.Users;

const getModels = async (req, res, next) => {

  const results: Array = await Users.findAll({
    include: [
      {
        model: models.Posts,
        include: [{
          model: models.Comments,
          // include: [{
          //   model: models.Reactions
          // }]
        }]
      }
    ]
  });

  res.status(200).send(results);

  await next;
};

const create = async (req, res, next) => {
  const {
    name,
    username,
    email,
  }: {
    name: string,
    username: string,
    email: string,
  } = req.body;

  const userId = hat();

  // switch (type) {
  //   case 'photo':
  //   return type = A,
  //   break,
  //   case 'shared':
  //   return type = B 
  //   break,
  //   default: 
  //     type = C
  // }

  await Users.create({
    id: userId,
    name,
    username,
    email,
  });

  res.status(201).send({ info: 'User has been created' });

  await next;
}


export default {
  create,
  getModels
}