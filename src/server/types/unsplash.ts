export interface UserLinks {
  self: string | null;
  html: string | null;
  download: string | null;
  download_location: string | null;
}

export interface PhotoUrls {
  raw: string | null;
  full: string | null;
  regular: string | null;
  small: string | null;
  thumb: string | null;
  small_s3: string | null;
}

export interface PhotoLinks {
  self: string | null;
  html: string | null;
  download: string | null;
  download_location: string | null;
}

export interface TopicSubmission {
  nature: (string | null)[];
  wallpapers: (string | null)[];
}

export interface User {
  id: string;
  name: string | null;
  links: UserLinks | null;
}

export interface Photo {
  id: string;
  width: number | null;
  height: number | null;
  color: string | null;
  blur_hash: string | null;
  description: string | null;
  urls: PhotoUrls | null;
  links: PhotoLinks | null;
  likes: number | null;
  user: User | null;
}

export interface Query {
  searchPhoto: (Photo | null)[] | null;
}

export type UnsplashSearchResponse = Photo;
