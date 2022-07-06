import sinon from 'sinon';
import { expect } from 'chai';
import UserModel from '../models/user';
import UserService from '../services/user';
import UserController from '../controllers/user';

const userModel = new UserModel();
const userService = new UserService();
const userController = new UserController();
