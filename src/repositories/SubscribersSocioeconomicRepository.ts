// import { EntityRepository, Repository } from 'typeorm'; // DEV
import typeorm from 'typeorm';
const { EntityRepository, Repository } = typeorm;
import Socioeconomic from '../models/Socioeconomic';

@EntityRepository(Socioeconomic)
class SubscribersSocioeconomicRepository extends Repository<Socioeconomic> {}

export default SubscribersSocioeconomicRepository;
