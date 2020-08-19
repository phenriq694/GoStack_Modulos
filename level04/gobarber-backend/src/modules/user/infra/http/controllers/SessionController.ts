import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';

import { container } from 'tsyringe';

import AuthenticateUsersService from '@modules/user/services/AuthenticateUsersService';

export default class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticateUser = container.resolve(AuthenticateUsersService);

    const { user, token } = await authenticateUser.execute({
      email,
      password,
    });

    return response.json({ user: classToClass(user), token });
  }
}
