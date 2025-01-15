import {injectable} from '@nestjs/common'

@injectable
export class UsersService {
    private users  =[
        {
            id:1,
            name: "giori1",
            age:22
        },
        {
            id:1,
            name: "giori3",
            age:23
        },
        {
            id:1,
            name: "giori2",
            age:24
        }
    ]

    getAllUsers(){
        return this.users
    }
}
