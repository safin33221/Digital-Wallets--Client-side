import { Button } from "@/components/ui/button";
import about from "../../../assets/images/about.jpg";

export default function AboutHero() {
    return (
        <section className="bg-background mt-10">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* Text Section */}
                <div className="text-center lg:text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold lg:text-5xl">
                        About Us
                    </h2>

                    <p className="mt-6 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0">
                        Empowering you to manage money securely and effortlessly. Our mission
                        is to make digital finance simple, safe, and accessible for everyone.
                    </p>

                    <div className="mt-8 sm:mt-10">
                        <Button variant={`outline`} className="text-blue-500">
                            Learn more
                        </Button>
                    </div>
                </div>

                {/* Image Section */}
                <div className="flex justify-center lg:justify-end">
                    <img
                        src={about}
                        alt="About Payzo"
                        className="rounded-2xl shadow-lg w-full max-w-md sm:max-w-lg lg:max-w-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
}

