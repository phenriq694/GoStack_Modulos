import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Paulo Henrique',
    email: 'phenriq@gmail.com',
    password_hash: 'q32545234524',
  });

  res.json(user);
});

export default routes;
