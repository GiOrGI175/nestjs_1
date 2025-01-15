import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { usersController } from './users.controller';

@Module
export class usersModule {
    constroller:[usersController]
    providers: [UsersService]
}
