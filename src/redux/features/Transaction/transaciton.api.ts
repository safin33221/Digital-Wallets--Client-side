import { baseApi } from "@/redux/baseApi";

const transactionApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllTransaction: (builder.query)({
            query: (params) => ({
                url: "/transaction/all-transaction",
                method: "GET",
                params: params
            })
        })
    })
})
export const {
    useGetAllTransactionQuery
} = transactionApi