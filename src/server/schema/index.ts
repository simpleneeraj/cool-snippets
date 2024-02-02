import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge';
import unsplashTypeDefs from './typeDefs/unsplash';
import unsplashResolver from './resolvers/unsplash';

const schema = {
  typeDefs: mergeTypeDefs([unsplashTypeDefs]),
  resolvers: mergeResolvers([unsplashResolver]),
};

export default schema;
