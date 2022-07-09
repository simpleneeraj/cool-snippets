import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"


const baseUrl = `https://api.unsplash.com/`
const unsplashApi = createApi({
    reducerPath: 'Unsplash',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getUnsplash: builder.query({
            query: ({ client_id, page, per_page, count, query }) =>
                `photos/random/?client_id=${client_id}&page=${page}&perpage=${per_page}&count=${count}&query=${query}`
        })
    }),



})


export default unsplashApi;

// const secret = `YnAHf2SJAKJmUr3ykMdo3q08L_ksA9NA7SyMHU8gJ9Q`
// https://api.unsplash.com/photos/?client_id=YnAHf2SJAKJmUr3ykMdo3q08L_ksA9NA7SyMHU8gJ9Q

// page=1
// per_page=30
