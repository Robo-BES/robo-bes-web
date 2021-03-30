// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Survey, User } = initSchema(schema);

export {
  Survey,
  User
};