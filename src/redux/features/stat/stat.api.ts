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
            }),
            providesTags: ["TRANSACTION"]
        }),
        getSingleAgentTransStat: (builder.query)({
            query: () => ({
                url: "/stats/get-single-agent-transactionStat",
                method: "GET",

            }),
            providesTags: ["TRANSACTION"]

        }),
    }),
})

export const {


    useGetUserStatQuery,
    useGetSingleUserStatQuery,
    useGetSingleAgentTransStatQuery
} = statApi