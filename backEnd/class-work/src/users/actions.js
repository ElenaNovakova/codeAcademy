import axios from 'axios';
import urlsConfigs from '../../config/urls.json';

const baseUrl = urlsConfigs[process.env.NODE_ENV || 'dev'];
const { users } = baseUrl;

async function list(req, res, next) {
  const getUsers = await axios.get(users);
  
  const { data } = getUsers;
  res.status(200).send(data);

  await next;
}

const get = async(req, res, next) => {
  const { id }: { id: string } = req.params;
  
  const getUsers = await axios.get(users);
  const { data } = getUsers;
  
  const user: Object = data.filter(user => user.id.toString() === id);

  const usersIds = data.map(i => i.id.toString());
  const checkUser : boolean = usersIds.includes(id);

  if(checkUser) {
    res.status(200).send(user);
  } else {
    res.status(404).send({ message: `user id ${id} is not found`})
  }
 
//   // new section
//  const usersIds = data.map(i => i.id.toString()); // ['1', '2',]

//  // const ids = data.map((i) => {
//  //   return i.id;
//  // });


//  const checkUser: boolean = usersIds.includes(id); //false/true
//  if(checkUser){
//    res.status(200).send(user);
//  } else {
//    res.status(404).send({message: `user id ${id} is not found`});
//  }


 

 res.status(200).send(user);

  await next;
}

export default {
  list,
  get,
};
