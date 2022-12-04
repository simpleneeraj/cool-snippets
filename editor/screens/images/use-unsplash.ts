
import useSWR from 'swr';
import stringy from "utils/stringy"


interface UseUnsplashTypes {
    query?: string;
    count?: string | number;
    perpage?: string | number;
}
const client_id = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;
const fetcher = (url: RequestInfo | URL) => fetch(url).then((res) => res.json());


const useUnsplash = ({ count = '30', perpage, query }: UseUnsplashTypes) => {

    const url = stringy('https://api.unsplash.com/photos/random/', {
        query,
        client_id,
        count,
        perpage,
    })

    const { data, error } = useSWR(url, fetcher, {
        revalidateOnReconnect: true
    });

    // Return Values
    return {
        data,
        isLoading: !error && !data,
        isError: error
    }

}
export default useUnsplash;


    // const url = `https://api.unsplash.com/photos/random/?client_id=${client_id}&page=${count}&perpage=${perpage}&count=${count}&query=${query}`;
