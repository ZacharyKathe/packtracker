// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Pack, Trips, Users } = initSchema(schema);

export {
  Pack,
  Trips,
  Users
};