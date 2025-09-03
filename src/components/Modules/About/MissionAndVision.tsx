import { ShieldCheck, Globe2 } from "lucide-react";

export default function MissionVision() {
    return (

        <div className="container mx-auto px-4 text-center">

            <div className="mt-12 grid gap-12 sm:grid-cols-2">
                {/* Mission */}
                <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md">
                    <ShieldCheck className="size-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold">Our Mission</h3>
                    <p className="mt-2 text-muted-foreground">
                        To make digital finance simple, secure, and accessible to all. Empowering users to manage money with confidence.
                    </p>
                </div>

                {/* Vision */}
                <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md">
                    <Globe2 className="size-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold">Our Vision</h3>
                    <p className="mt-2 text-muted-foreground">
                        A world where everyone can control their finances easily, anytime, anywhere, with complete trust and security.
                    </p>
                </div>
            </div>
        </div>

    );
}
