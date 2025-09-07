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
    })
})
export const {
    useGetAllTransactionQuery,
    useGetMyTransactionQuery
} = transactionApi