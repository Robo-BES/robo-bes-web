// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Portfolio, User, Survey } = initSchema(schema);

export {
  Portfolio,
  User,
  Survey
};