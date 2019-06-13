import hat from 'hat';

import models from '../models/index';

const Students = models.Student;

const list = async(req, res, next) => {
  await next;
};

const get = async(req, res, next) => {
  const { id }: { id: string } = req.params;
  await next;
};

const create = async(req, res, next) => {
  const createData: {
    // id: string,
    firstName: string,
    lastName: string,
    email: ?string,
    score: ?string,
    startedStudies: ?string,
  } = req.body;

  const studentId = hat();
  console.log(studentId);
  await next;
};

const update = async(req, res, next) => {
  const { id }: { id: string } = req.params;
  await next;
};

async function del(req, res, next) {
  const { id }: { id: string } = req.params;
  await next;
}

export default {
  get,
  list,
  create,
  del,
  update
}