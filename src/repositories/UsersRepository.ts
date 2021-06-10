// import { EntityRepository, Repository } from 'typeorm'; // DEV
import typeorm from 'typeorm';
const { EntityRepository, Repository } = typeorm;
import User from '../models/User';

@EntityRepository(User)
class UsersRepository extends Repository<User> {}

export default UsersRepository;
