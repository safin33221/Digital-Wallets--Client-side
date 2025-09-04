import { baseApi } from "@/redux/baseApi";

const transactionApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllTransaction: (builder.query)({
            query: () => ({
                url: "/transaction/all-transaction",
                method: "GET"
            })
        })
    })
})
export const {
    useGetAllTransactionQuery
} = transactionApi