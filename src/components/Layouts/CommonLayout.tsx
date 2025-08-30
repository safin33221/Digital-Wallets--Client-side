import type { ReactNode } from "react";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

export default function CommonLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col max-w-7xl mx-auto">
            <Navbar />
            <div className="grow-1">
                {
                    children
                }
            </div>
            <Footer />

        </div>
    );
};
