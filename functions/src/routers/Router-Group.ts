import * as express from 'express';
import GroupController from '../controller/GroupController';
import { GROUP_ID } from '../helpers/params';

const RouterGroup = express.Router();

RouterGroup.route('/')
   .post(GroupController.insertGroup)
   .get(GroupController.getAllGroup)

export default RouterGroup;
