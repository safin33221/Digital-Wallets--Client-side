

import { useState } from "react"

const faqs = [
    {
        question: "What is Payzo?",
        answer:
            "Payzo is a secure and user-friendly digital finance platform that helps you send, receive, and manage money with ease.",
    },
    {
        question: "Is my data safe with Payzo?",
        answer:
            "Yes. We use advanced encryption and security measures to protect your personal and financial information.",
    },
    {
        question: "How do I create an account?",
        answer:
            "Simply sign up with your email or phone number, verify your identity, and start using Payzo instantly.",
    },
    {
        question: "Are there any fees for transactions?",
        answer:
            "Most transactions are free. However, some specific services may include minimal processing fees, which will always be shown before confirmation.",
    },
    {
        question: "Can I use Payzo internationally?",
        answer:
            "Yes, Payzo supports international transfers in multiple currencies, making it easy to send and receive money across borders.",
    },
]

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="py-20 px-6 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
            <p className="mt-4 text-center text-muted-foreground">
                Here are some common questions our users ask.
                Can’t find your answer? Reach out to our support team.
            </p>

            <div className="mt-10 space-y-4">
                {faqs.map((faq, index) => (
                    <details
                        key={index}
                        className="group [&_summary::-webkit-details-marker]:hidden border rounded-md"
                        open={openIndex === index}
                    >
                        <summary
                            onClick={() => toggleFAQ(index)}
                            className="flex items-center justify-between gap-1.5 p-4 cursor-pointer"
                        >
                            <h3 className="text-lg font-medium">{faq.question}</h3>
                            <svg
                                className={`w-5 h-5 shrink-0 transition-transform duration-300 ${openIndex === index ? "-rotate-180" : "rotate-0"
                                    }`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </summary>
                        <p className="px-4 pb-4 text-muted-foreground">{faq.answer}</p>
                    </details>
                ))}
            </div>
        </section>
    )
}
