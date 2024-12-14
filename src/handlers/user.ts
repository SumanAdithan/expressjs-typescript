import { Request, Response } from 'express-serve-static-core';
import { CreateUserDto } from '../dtos/CreateUser.dto';
import { CreateUserQueryParams } from '../types/query-params';
import { User } from '../types/response';

export const getUsers = (req: Request, res: Response) => {
    res.send([]);
};

export const getUserById = (req: Request, res: Response) => {
    res.send({});
};

export const createUser = (req: Request<{}, {}, CreateUserDto, CreateUserQueryParams>, res: Response<User>) => {
    res.status(201).send({
        id: '1',
        username: 'john',
        email: 'john@email.com',
    });
};
