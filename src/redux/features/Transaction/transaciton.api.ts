import { baseApi } from "@/redux/baseApi";

const transactionApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllTransaction: (builder.query)({
            query: (params) => ({
                url: "/transaction/all-transaction",
                method: "GET",
                params: params
            })
        }),
        getMyTransaction: (builder.query)({
            query: () => ({
                url: "/transaction/my-transaction",
                method: "GET",

            })
        }),
        sendMoney: (builder.mutation)({
            query: (data) => ({
                url: "/transaction/send-money",
                method: "POST",
                data: data

            })
        }),
    })
})
export const {
    useGetAllTransactionQuery,
    useGetMyTransactionQuery,
    useSendMoneyMutation
} = transactionApi