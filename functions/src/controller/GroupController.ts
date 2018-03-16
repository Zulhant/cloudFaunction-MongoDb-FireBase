import * as express from 'express';
import { GROUP_ID } from '../helpers/params';
import { Request } from 'firebase-functions';
import { Response } from 'express-serve-static-core';
import groupShema from '../models/group';
import responGenerator from '../helpers/response';

class GroupController {

   insertGroup = async (req: Request, res: Response) => {
      try {
         await groupShema.create(req.body);
         res.jsonp(
            responGenerator.created()
         );
      } catch (error) {
         responGenerator.bad_request(error)
      }
   }

   getAllGroup = async (req: Request, res: Response) => {
      try {
         const groups = await groupShema.find();
         if (groups) {
            res.jsonp(
               responGenerator.success(groups)
            )
         }
      } catch (error) {
         responGenerator.bad_request(error)
      }
   }

}

export default new GroupController;