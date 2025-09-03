import { ShieldCheck, Zap, BarChart3, CreditCard, Globe2, BellRing  } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Secure Transactions",
    description: "End-to-end encryption keeps your money safe from fraud and unauthorized access.",
  },
  {
    icon: Zap,
    title: "Instant Transfers",
    description: "Send and receive money instantly with just a few taps anytime, anywhere.",
  },
  {
    icon: BarChart3,
    title: "Expense Tracking",
    description: "Track your spending habits and gain insights with smart analytics and reports.",
  },
  {
    icon: CreditCard,
    title: "Bill Payments",
    description: "Pay your utility bills, mobile recharge, and subscriptions in one place.",
  },
  {
    icon: Globe2,
    title: "Global Access",
    description: "Manage multiple currencies and make seamless cross-border transactions.",
  },
  {
    icon: BellRing,
    title: "Smart Notifications",
    description: "Stay updated with instant alerts for transactions, low balances, and payment reminders.",
  },
];
export default function Features() {
  return (
    <section className=" ">
      <div className="container text-center">
        <h2 className="text-3xl font-bold lg:text-4xl">Key Features</h2>
        <p className="mt-4 text-muted-foreground lg:text-lg max-w-2xl mx-auto">
          Everything you need to manage, send, and grow your money — securely and easily.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl border bg-background p-6 shadow-sm transition hover:shadow-md"
            >
              <feature.icon className="mx-auto size-12 text-primary" />
              <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
