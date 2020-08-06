import { ConnectionOptions } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';


const {
    env: {
        DATABASE_HOST: host,
        DATABASE_PORT: port,
        DATABASE_NAME: database,
        DATABASE_USERNAME: username,
        DATABASE_PASSWORD: password,
    },
} = process;

export const DATABASE_CONFIG: ConnectionOptions = {
    database,
    host,
    password,
    port: parseInt(port, 10),
    synchronize: true,
    type: 'postgres',
    username,
    // autoLoadEntities: true
    // entities: [
    //     __dirname + '/../**/*.entity{.ts,.js}',
    // ],
};
