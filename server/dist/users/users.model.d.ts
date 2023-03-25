import { Model } from 'sequelize-typescript';
import { Post } from 'src/posts/posts.model';
import { Role } from 'src/roles/roles.model';
interface UserCreationAttributes {
    email: string;
    password: string;
}
export declare class User extends Model<User, UserCreationAttributes> {
    id: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    banned: boolean;
    banReason: string;
    roles: Role[];
    posts: Post[];
}
export {};
