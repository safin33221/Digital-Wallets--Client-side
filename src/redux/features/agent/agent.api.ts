import { baseApi } from "@/redux/baseApi";

const agentApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addMoneyToUser: builder.mutation({
            query: (data) => ({
                url: "/transaction/cash-in",
                method: "POST",
                data: data
            }),
            invalidatesTags: ["TRANSACTION"]
        }),
        addMoneyToMyAccount: builder.mutation({
            query: (data) => ({
                url: "/transaction/add-money",
                method: "POST",
                data: data
            }),
            invalidatesTags: ["TRANSACTION", "USER"]
        }),

    })
})


export const {
    useAddMoneyToUserMutation,
    useAddMoneyToMyAccountMutation
} = agentApi