import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { CreateUserDto } from "./dtos/create-user.dto";
import { UpdateUserDto } from "./dtos/update-user.dto";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {

    constructor(
        private readonly usersService: UsersService,
    ){}

    @Post()
    create( @Body() createUserDto: CreateUserDto ){
        return this.usersService.create(createUserDto);
    }

    @Get()
    findAll( @Query() query: Object ){
        return this.usersService.findAll(query);
    }

    @Get(":id")
    findOne( @Param("id") id:string ){
        return this.usersService.findOne(id);
    }

    @Patch(":id")
    update( @Param("id") id:String, @Body() updateUserDto: UpdateUserDto ){
        return this.update(id, updateUserDto)
    }

    @Delete(":id")
    remove( @Param("id") id:string ){
        return this.usersService.remove(id);
    }
}