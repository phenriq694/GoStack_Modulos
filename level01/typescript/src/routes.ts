import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'phenriq@gmail.com',
    password: '123456',
    techs: [
      'Node.js',
      'ReactJS',
      'React Native',
      { experience: 2, title: 'Junior'}
    ]
  });

  return response.json({ message: 'Hello World' });
}