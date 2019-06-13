import hat from 'hat';

import models from '../models/index';

const Students = models.Student;

const list = async(req, res, next) => {
  const result: Array = await Students.findAll();
  res.status(200).send(result);
  await next;
};

const get = async(req, res, next) => {
  const { id }: { id: string } = req.params;

  const result: Object = await Students.find({ where: { id }});
  res.status(200).send(result);

  await next;
};

const create = async(req, res, next) => {
  const {
    firstName,
    lastName, 
    email, 
    score, 
    startedStudies,
  }: {
    firstName: string,
    lastName: string,
    email: ?string,
    score: ?string,
    startedStudies: ?string,
  } = req.body;

  const studentId = hat();

  await Students.create({
    id: studentId,
    firstName,
    lastName,
    email,
    score,
    startedStudies
  });
  res.status(201).send({ info: 'Student has been created!'});

  await next;
};

const update = async(req, res, next) => {
  const { id }: { id: string } = req.params;
  
  const updateData: {
    firstName: ?string,
    lastName: ?string,
    email: ?string,
    score: ?string,
    startedStudies: ?string
  } = Object.assign({}, req.body);

  await Students.update(updateData, { where: { id }})
  res.status(204);

  await next;
};

async function del(req, res, next) {
  const { id }: { id: string } = req.params;

  await Students.destroy({ where: { id }});
  res.status(202).send({ info: `Student ${id} has been removed!`});

  await next;
}

export default {
  get,
  list,
  create,
  del,
  update
}