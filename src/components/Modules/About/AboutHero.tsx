
export default function AboutHero() {
    return (
        <section className="bg-background px-20 mt-10">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl font-extrabold lg:text-6xl">
                    About Us
                </h1>
                <p className="mt-6 text-lg lg:text-xl max-w-2xl mx-auto">
                    Empowering you to manage money securely and effortlessly.
                    Our mission is to make digital finance simple, safe, and accessible for everyone.
                </p>
                <div className="mt-10">
                    <a
                        href="#mission"
                        className="inline-block rounded-lg bg-white text-blue-600 font-semibold px-6 py-3 transition hover:bg-gray-100"
                    >
                        Learn More
                    </a>
                </div>
            </div>
        </section>
    );
}
