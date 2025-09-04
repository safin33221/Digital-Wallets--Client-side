import { useGetMeQuery } from "@/redux/features/user/user.api";
import type { TRole } from "@/types/index.type";
import type { ComponentType } from "react";
import { Navigate } from "react-router";

export const withAuth = (Component: ComponentType, requiredRole?: TRole) => {
    return function AuthWrapper() {
        const { data, isLoading } = useGetMeQuery(undefined)
        if (!isLoading && !data?.data?.email) {
            return <Navigate to={`/login`} />
        }

        if (requiredRole && !isLoading && requiredRole !== data?.data?.role) {
            return <Navigate to={`/un-authorized`} />
        }
        return <Component />
    }
}