import {HttpException, HttpStatus, injectable} from '@nestjs/common'

@injectable
export class UsersService {
    private users  =[
        {
            id:1,
            name: "giori1",
            age:22
        }
        {
            id:1,
            name: "giori3",
            age:23
        }
        {
            id:1,
            name: "giori2",
            age:24
        }
    ]

    getAllUsers(){
        return this.users
    }

    createUser(createUserDto: createUserDto){
        const {age,name} = createUserDto
        if(!age|!name) throw new HttpException('name and age is required', HttpStatus.BAD_REQUEST)

    }
}
