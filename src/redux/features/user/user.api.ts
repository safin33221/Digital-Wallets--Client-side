import { baseApi } from "@/redux/baseApi";

const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getMe: builder.query({
            query: () => ({
                url: "/user/me",
                method: "GET"
            })
        })
    })
})

export const {
    useGetMeQuery

} = userApi
