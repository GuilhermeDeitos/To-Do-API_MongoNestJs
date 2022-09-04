import { User } from './shared/user';
import { UserService } from './shared/user.service';
export declare class UsersController {
    private userService;
    constructor(userService: UserService);
    getAll(): Promise<User[]>;
    getById(id: string): Promise<User>;
    create(user: User): Promise<User>;
    update(user: User, id: string): Promise<User>;
    delete(id: string): Promise<string>;
}
