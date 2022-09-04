import { User } from './user';
import { Model } from 'mongoose';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    getAll(): Promise<(User & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getById(id: string): Promise<User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getByEmail(email: string): Promise<User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    create(user: User): Promise<User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, user: User): Promise<User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    delete(id: string): Promise<import("mongodb").DeleteResult>;
}
