import { gql } from '@apollo/client';

const unsplashTypeDefs = gql`
  type User {
    id: ID!
    name: String
    links: UserLinks
  }

  type UserLinks {
    self: String
    html: String
    download: String
    download_location: String
  }

  type PhotoUrls {
    raw: String
    full: String
    regular: String
    small: String
    thumb: String
    small_s3: String
  }

  type PhotoLinks {
    self: String
    html: String
    download: String
    download_location: String
  }

  type TopicSubmission {
    nature: [String]
    wallpapers: [String]
  }

  type Photo {
    id: ID!
    width: Int
    height: Int
    color: String
    blur_hash: String
    description: String
    urls: PhotoUrls
    links: PhotoLinks
    likes: Int
    user: User
  }

  type Query {
    searchPhoto(query: String): [Photo] # Search for photos based on a query
  }
`;

export default unsplashTypeDefs;
