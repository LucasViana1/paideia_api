import { Request, Response } from 'express';
// import { getCustomRepository } from 'typeorm'; //DEV
import typeorm from 'typeorm';
const { getCustomRepository }=typeorm;
// import { hash } from 'bcryptjs'; //DEV
import bcryptjs  from 'bcryptjs';

import { resolve } from 'path';
import { AppError } from '../errors/AppError';
import UsersRepository from '../repositories/UsersRepository';
import MailService from '../services/MailService';

const { hash } = bcryptjs;
class UsersController {
  async store(request: Request, response: Response) {
    const { name, lastname, email, password } = request.body;

    const usersRepository = getCustomRepository(UsersRepository);

    const userAlreadyExists = await usersRepository.findOne({ email });

    if (userAlreadyExists) {
      throw new AppError('Já existe um usuário cadastrado com esse e-mail!');
    }

    const hashedPassword = await hash(password, 8);
    const code = Math.floor(Math.random() * 99999);

    const user = usersRepository.create({
      name,
      lastname,
      email,
      password: hashedPassword,
      code,
      status: 'common',
    });
    await usersRepository.save(user);

    const mailService = new MailService();

    const templatePath = resolve(
      __dirname,
      '..',
      'views',
      'emails',
      'userRegistration.hbs',
    );
    const variables = { name, code };

    await mailService.execute({
      to: email,
      subject: 'Confirmação de cadastro',
      variables,
      templatePath,
    });

    delete user.code;
    delete user.password;
    delete user.status;

    response.status(201).json(user);
  }

  async execute(request: Request, response: Response) {
    response.status(204).json({});
  }
}

export default UsersController;
