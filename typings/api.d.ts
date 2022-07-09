export interface UnsplashImageType {
    id: string;
    blur_hash: string;
    description: string;
    alt_description: string;
    urls: {
        raw: string;
        full: string;
        regular: string;
        small: string;
        thumb: string;
        small_s3: string;
    };
    links: {
        self: string;
        html: string;
        download: string;
        download_location: string;
    };
    user: {
        id: string;
        username: string;
        name: string;
        first_name: string;
        last_name: string;
        twitter_username: string;
        portfolio_url: string;
        bio: string;
        location: null;
        links: {
            self: string;
        };
    };
}