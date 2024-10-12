import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { UpdateUserDto } from "./dtos/update-user.dto";
import { CreateUserDto } from "./dtos/create-user.dto";
import { UserEntity } from "./entities/user.entity";

@Injectable()
export class UsersService {
    private users: UserEntity[] = [
        { id: "1", name: "maria", email: "maria@google.com", password: "123456", age: 20, gender: "female" },
        { id: "2", name: "alberto", email: "alberto@google.com", password: "123456", age: 20, gender: "male" },
        { id: "3", name: "jose", email: "jose@google.com", password: "123456", age: 20, gender: "male" },
        { id: "4", name: "carlos", email: "carlos@google.com", password: "123456", age: 20, gender: "male" },
    ];

    create( createUserDto: CreateUserDto ){
        return createUserDto;
    }

    async findAll( query: Object ): Promise<UserEntity[]>{
        try {
            if( this.users.length === 0 ){
                throw new NotFoundException("Users not found!");
            }
            return this.users
        } catch (error) {
            throw new InternalServerErrorException("No se que paso...")
        }
    }

    async findOne( id:string ): Promise<UserEntity>{
        try {
            const user =  this.users.find((user)=>user.id === id);
            if( !user ){
                throw new NotFoundException("User not found!")
            }

            return user
        } catch (error) {
            throw new InternalServerErrorException(error)
        }
    }

    update( id:String, updateUserDto: UpdateUserDto ){
        return {
            id, updateUserDto,
        };
    }

    remove( id:string ){
        return {id};
    }
}