import { JwtService } from '@nestjs/jwt';
import { UserService } from '../../users/shared/user.service';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UserService, jwtService: JwtService);
    validateUser(userEmail: string, userPassword: string): Promise<{
        id: any;
        name: string;
        email: string;
    }>;
    login(user: any): Promise<{
        access_token: string;
    }>;
}
