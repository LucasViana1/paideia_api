// import { EntityRepository, Repository } from 'typeorm'; // DEV
import typeorm from 'typeorm';
const { EntityRepository, Repository } = typeorm;
import Candidate from '../models/Candidate';

@EntityRepository(Candidate)
class CandidatesRepository extends Repository<Candidate> {}

export default CandidatesRepository;
