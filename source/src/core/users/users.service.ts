import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entities';

// export type User = { userId: number, username: string, password: string };

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(UserEntity)
        private readonly usersRepository: Repository<UserEntity>,
    ) {

    }

    async findOne(employeeId: string): Promise<UserEntity | undefined> {
        return await this.usersRepository.findOne({ where: { employeeId } });
    }
}
