import schema from '../schema';
import { NextRequest } from 'next/server';
import { ApolloServer } from '@apollo/server';
import connectToMongo from '../database/mongo';
import { startServerAndCreateNextHandler } from '@as-integrations/next';

// connectToMongo()
//   .then((value) => value)
//   .catch((err) => console.log(err));

const server = new ApolloServer({
  typeDefs: schema.typeDefs,
  resolvers: schema.resolvers,
});

const handler = startServerAndCreateNextHandler<NextRequest>(server as any, {
  context: async (req: NextRequest) => ({ req }),
});

export default handler;
