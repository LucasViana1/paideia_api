// import { Connection, createConnection, getConnectionOptions } from 'typeorm'; // DEV
import typeorm, { Connection } from 'typeorm';
const {createConnection, getConnectionOptions} = typeorm;

export default async (): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions(); // ormconfig infos

  return createConnection(
    Object.assign(defaultOptions, {
      database:
        process.env.NODE_ENV === 'test'
          ? './src/database/database.test.sqlite'
          : defaultOptions.database,
    }),
  );
};
