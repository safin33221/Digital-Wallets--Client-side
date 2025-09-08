import AboutHero from "@/components/Modules/About/AboutHero";
import MissionAndVision from "@/components/Modules/About/MissionAndVision";
import TeamInfo from "@/components/Modules/About/TeamInfo";

export default function About() {
    return (
        <div className="space-y-20 max-md:mx-3 mx-auto">
            <AboutHero />
            <MissionAndVision />
            <TeamInfo />

        </div>
    );
};
