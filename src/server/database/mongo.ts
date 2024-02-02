import moize from 'moize';
import mongoose from 'mongoose';
import logger from '@/plugins/logger';
import { MongoClient, GridFSBucket } from 'mongodb';

const MONGODB_BUCKET_NAME = process.env.MONGODB_BUCKET_NAME;
const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env'
  );
}

// Wrap connectToMongo with moize to cache the result
const connectToMongo = moize.promise(
  async () => {
    const client = new MongoClient(MONGODB_URI!);
    const bucket = new GridFSBucket(client.db(), {
      bucketName: MONGODB_BUCKET_NAME,
    });
    const mongo = await mongoose.connect(MONGODB_URI!);

    if (mongo.ConnectionStates.connecting) {
      logger('blue', '~')('Connecting to MongoDB');
    }

    if (mongo.ConnectionStates.connected) {
      logger('green', '✓')('Connected to MongoDB');
    }
    mongo.connection.on('connected', () => {
      logger('green', '✓')('Connected to MongoDB');
    });
    mongo.connection.on('error', (err) => {
      logger('red', '✗')(err.message);
    });
    mongo.connection.on('disconnected', () => {
      logger('orange', '⚠')('Disconnected from MongoDB');
    });

    return { client, bucket };
  },
  {
    isPromise: true,
    maxSize: 1, // Cache only one result
  }
);
// Export the original connectToMongo function
export default connectToMongo;
