

type TeamMember = {
    id: number;
    name: string;
    role: string;
    image: string;
};

const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: "Safayet Hossan Safin",
        role: "Founder & CEO",
        image: "https://i.pravatar.cc/300?img=1",
    },
    {
        id: 2,
        name: "Ayesha Akter",
        role: "Head of Design",
        image: "https://i.pravatar.cc/300?img=2",
    },
    {
        id: 3,
        name: "Tanvir Rahman",
        role: "Lead Developer",
        image: "https://i.pravatar.cc/300?img=3",
    },
    {
        id: 4,
        name: "Mehedi Hasan",
        role: "Marketing Manager",
        image: "https://i.pravatar.cc/300?img=4",
    },
];

export default function TeamInfo() {
    return (
        <section className=" py-20 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                    Meet Our Team
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
                    At Payzo, our passionate team of innovators, designers, and developers
                    work together to build secure and seamless digital payment solutions
                    for everyone.
                </p>

                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {teamMembers.map((member) => (
                        <div
                            key={member.id}
                            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300"
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
                            />
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                                {member.name}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                {member.role}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

