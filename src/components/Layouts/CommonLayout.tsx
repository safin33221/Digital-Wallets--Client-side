import type { ReactNode } from "react";
import Navbar from "../Shared/Navbar";

export default function CommonLayout({ children }: { children: ReactNode }) {
    return (
        <div>
            <Navbar />
            <div>
                {
                    children
                }
            </div>


        </div>
    );
};
