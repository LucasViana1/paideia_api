// import { getCustomRepository } from 'typeorm'; //DEV
import typeorm from 'typeorm';
const { getCustomRepository }=typeorm;
// import { compare } from 'bcryptjs'; //DEV
import bcryptjs from 'bcryptjs'; //DEV
// import { sign } from 'jsonwebtoken'; // DEV
import jsonwebtoken from 'jsonwebtoken';
import { AppError } from '../errors/AppError';

import User from '../models/User';
import UsersRepository from '../repositories/UsersRepository';

const { compare } = bcryptjs;
const { sign } = jsonwebtoken;
interface IRequest {
  userId: string;
}

interface IResponse {
  token: string;
}

class PasswordRecoveryService {
  private secret = process.env.TOKEN_SECRET_RECOVERY;

  private expiresIn = process.env.TOKEN_EXPIRES_RECOVERY;

  public async execute({ userId }: IRequest): Promise<IResponse> {
    const token = sign({}, this.secret, {
      subject: userId,
      expiresIn: this.expiresIn,
    });

    return { token };
  }
}

export default PasswordRecoveryService;
