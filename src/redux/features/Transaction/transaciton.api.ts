import { baseApi } from "@/redux/baseApi";

const transactionApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        sendMoney: (builder.mutation)({
            query: (data) => ({
                url: "/transaction/send-money",
                method: "POST",
                data: data

            }),
            invalidatesTags: ["TRANSACTION"]
        }),
        getAllTransaction: (builder.query)({
            query: (params) => ({
                url: "/transaction/all-transaction",
                method: "GET",
                params: params
            }),
            providesTags: ["TRANSACTION"]
        }),
        getMyTransaction: (builder.query)({
            query: () => ({
                url: "/transaction/my-transaction",
                method: "GET",

            }),
            providesTags: ["TRANSACTION"]

        }),
        cashOut: (builder.mutation)({
            query: (data) => ({
                url: "/transaction/withdraw-money",
                method: "post",
                data: data

            }),
            invalidatesTags: ["TRANSACTION"]

        }),
       


    })
})
export const {
    useGetAllTransactionQuery,
    useGetMyTransactionQuery,
    useSendMoneyMutation,
    useCashOutMutation
} = transactionApi