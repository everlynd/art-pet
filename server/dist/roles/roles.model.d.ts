import { Model } from 'sequelize-typescript';
import { User } from 'src/users/users.model';
interface RoleCreationAttributes {
    value: string;
    description: string;
}
export declare class Role extends Model<Role, RoleCreationAttributes> {
    id: number;
    value: string;
    descrition: string;
    users: User[];
}
export {};
