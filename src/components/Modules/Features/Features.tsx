
import { Shield, Smartphone, Globe, Zap, CreditCard, Users } from "lucide-react";

const features = [
    {
        id: 1,
        title: "Secure Transactions",
        description:
            "Advanced encryption ensures your payments are always safe and protected.",
        icon: Shield,
    },
    {
        id: 2,
        title: "Mobile First",
        description:
            "Seamless experience across all devices with our mobile-friendly platform.",
        icon: Smartphone,
    },
    {
        id: 3,
        title: "Global Access",
        description:
            "Send and receive payments worldwide without boundaries.",
        icon: Globe,
    },
    {
        id: 4,
        title: "Lightning Fast",
        description:
            "Instant transfers and real-time processing for your convenience.",
        icon: Zap,
    },
    {
        id: 5,
        title: "Flexible Payments",
        description:
            "Support for cards, wallets, and multiple payment options in one place.",
        icon: CreditCard,
    },
    {
        id: 6,
        title: "Community Support",
        description:
            "Dedicated support and resources to help you grow with Payzo.",
        icon: Users,
    },
];

export default function FeaturesItem() {
    return (
        <section className="mt-10">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                    Powerful Features of Payzo
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
                    Payzo brings you everything you need for smarter, faster, and safer
                    digital payments — all in one place.
                </p>

                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className="bg-card rounded-2xl shadow-md p-8 hover:shadow-lg transition duration-300"
                        >
                            <div className="flex justify-center items-center w-14 h-14 rounded-full bg-indigo-100 dark:bg-primary/10 mx-auto mb-6">
                                <feature.icon className="w-7 h-7 text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

