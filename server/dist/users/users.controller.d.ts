import { AddRoleDto } from './dto/add-role.dto';
import { BanUserDto } from './dto/ban-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    createUser(userDto: CreateUserDto): Promise<import("./users.model").User>;
    getAllUsers(limits: {
        limit: number;
        page: number;
    }): Promise<{
        users: import("./users.model").User[];
        total: number;
    }>;
    addRole(dto: AddRoleDto): Promise<AddRoleDto>;
    ban(dto: BanUserDto): Promise<import("./users.model").User>;
}
