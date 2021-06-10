// import { EntityRepository, Repository } from 'typeorm'; // DEV
import typeorm from 'typeorm';
const { EntityRepository, Repository } = typeorm;
import File from '../models/File';

@EntityRepository(File)
class FilesRepository extends Repository<File> {}

export default FilesRepository;
