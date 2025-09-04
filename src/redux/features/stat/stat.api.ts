import { baseApi } from "@/redux/baseApi";

export const statApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getUserStat: builder.query({
            query: () => ({
                url: "/stats/user",
                method: "GET"
            })
        })
    })
})

export const {

    useGetUserStatQuery
} = statApi