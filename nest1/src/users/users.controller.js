import {Controller, Get, Param} from '@nestjs/common'
import { UsersService } from './users.service'

@Controller('users')
export class usersController{
    constructor(private usersService: UsersService){}

    @Get()
    @GetAllUsers(){
        return this.usersService.getAllUsers()
    }

    @Get(':id')
    getUserById(@Param('id') id){
        console.log(id,'id')
        return 'id'
    }
}