import { baseApi } from "@/redux/baseApi";

const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getMe: builder.query({
            query: () => ({
                url: "/user/me",
                method: "GET"
            })
        }),
        getAllUsers: builder.query({
            query: (params) => ({
                url: "/user",
                method: "GET",
                params: params
            })
        })
    })
})

export const {
    useGetMeQuery,
    useGetAllUsersQuery

} = userApi
