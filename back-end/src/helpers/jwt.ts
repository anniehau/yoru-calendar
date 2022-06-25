import 'dotenv/config';
import jwt from 'jsonwebtoken';
import fs from 'fs';
import { IUser } from '../interfaces/user';

const jwtSecret = fs.readFileSync('jwt.key', 'utf-8');
const jwtConfig = { expiresIn: '7d' };

const verify = (token: string) => jwt.verify(token, jwtSecret);

const generate = (user: IUser) => jwt.sign(user, jwtSecret, jwtConfig);

const token = { verify, generate };

export default token;
