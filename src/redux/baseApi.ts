import { envConfig } from '@/config/env.config'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({ baseUrl: envConfig.baseUrl }),
    endpoints: () => ({})
})