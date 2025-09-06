import { baseApi } from "@/redux/baseApi";

const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getMe: builder.query({
            query: () => ({
                url: "/user/me",
                method: "GET"
            }),
            providesTags: ["USER"]
        }),
        getAllUsers: builder.query({
            query: (params) => ({
                url: "/user",
                method: "GET",
                params: params
            }),
            providesTags: ["USER"]
        }),
        updateUser: builder.mutation({
            query: ({ updateData, id }) => ({
                url: `/user/${id}`,
                method: "PATCH",
                data: updateData
            }),
            invalidatesTags: ["USER"]
        }),
    })
})

export const {
    useGetMeQuery,
    useGetAllUsersQuery,
    useUpdateUserMutation

} = userApi
