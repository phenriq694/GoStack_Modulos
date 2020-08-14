import { Router } from 'express';

import AuthenticateUsersService from '@modules/user/services/AuthenticateUsersService';
import UsersRepository from '../../typeorm/repositories/UsersRepository';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const usersRepository = new UsersRepository();
  const authenticateUser = new AuthenticateUsersService(usersRepository);

  const { user, token } = await authenticateUser.execute({
    email,
    password,
  });

  delete user.password;

  return response.json({ user, token });
});

export default sessionsRouter;
