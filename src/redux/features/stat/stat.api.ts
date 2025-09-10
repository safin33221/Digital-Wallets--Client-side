import { baseApi } from "@/redux/baseApi";

export const statApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getUserStat: builder.query({
            query: () => ({
                url: "/stats/user",
                method: "GET"
            })
        }),
        getSingleUserStat: builder.query({
            query: () => ({
                url: "/stats/my-stat",
                method: "GET"
            })
        }),
    }),
})

export const {


    useGetUserStatQuery,
    useGetSingleUserStatQuery
} = statApi