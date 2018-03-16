import * as express from 'express';
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as cors from 'cors';
import * as mongoose from 'mongoose'
import { DB, DB2 } from './config/DB';

import RouterGroup from './routers/Router-Group';

const app = express();
app.use(
   cors({
      origin: true
   })
)

mongoose.connect(DB);
mongoose.Promise = global.Promise;

admin.initializeApp({
   credential: admin.credential.applicationDefault(),
   databaseURL: DB2
});

app.use('/group', RouterGroup);

exports.api = functions.https.onRequest(app)