import { baseApi } from "@/redux/baseApi";

const agentApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addMoneyToUser: builder.mutation({
            query: (data) => ({
                url: "/transaction/cash-in",
                method: "POST",
                data: data
            })
        })
    })
})


export const {
    useAddMoneyToUserMutation
} = agentApi