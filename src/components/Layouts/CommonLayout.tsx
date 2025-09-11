// CommonLayout.tsx
import type { ReactNode } from "react";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import Joyride, { type Step } from "react-joyride";
import { useEffect, useState } from "react";

export default function CommonLayout({ children }: { children: ReactNode }) {
    const [runTour, setRunTour] = useState(false);


    const steps: Step[] = [
        {
            target: "#nav-menu",
            content: "This is the main navigation. Use it to switch between pages.",
        },
        {
            target: "#nav-home",
            content: "Go back to the homepage from anywhere.",
        },
        {
            target: "#theme-toggle-menu",
            content: "Switch between light and dark mode.",
        },
        {
            target: "#get-started",
            content: "Go to the login page.",
        },
        {
            target: "#back-to-home",
            content: "Navigate back to the homepage.",
        },
        {
            target: "#register-new-account",
            content: "Don’t have an account? You can register here.",
        },
        {
            target: "#chart-section",
            content: "Charts help you visualize trends and analytics.",
        },
        {
            target: "#table-search",
            content: "Use search and filters to quickly find records.",
        },
    ];

    // Run tour once for new users
    useEffect(() => {
        if (!localStorage.getItem("hasSeenTour")) {
            setRunTour(true);
            localStorage.setItem("hasSeenTour", "true");
        }
    }, []);

    const restartTour = () => setRunTour(true);

    return (
        <div className="min-h-screen flex flex-col max-w-[1420px] mx-auto">
            <Joyride
                steps={steps}
                run={runTour}
                continuous
                showSkipButton
                scrollToFirstStep
                styles={{ options: { zIndex: 10000 } }}
                callback={(data) => {
                    if (["finished", "skipped"].includes(data.status)) setRunTour(false);
                }}
            />

            <Navbar />

            <div className="grow-1 mx-auto">{children}</div>

            <Footer />

            {/* Restart option (you can move this to Settings page instead) */}
            <button
                onClick={restartTour}
                className="fixed bottom-4 right-4 bg-blue-600 text-white px-3 py-2 rounded"
            >
                Restart Tour
            </button>
        </div>
    );
}
