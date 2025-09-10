
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router"


export default function GlobalError() {
    const navigate = useNavigate()

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
            <h1 className="text-6xl font-bold text-red-600">404</h1>
            <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>
            <p className="text-gray-600 mt-2">
                Sorry, the page you’re looking for doesn’t exist or has been moved.
            </p>

            <Button onClick={() => navigate("/")} className="mt-6">
                Go Home
            </Button>
        </div>
    )
}

