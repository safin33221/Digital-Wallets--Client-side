import { UserPlus, Wallet, Send, Smile } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Create Your Wallet",
    description: "Sign up in minutes and set up your secure digital wallet.",
  },
  {
    icon: Wallet,
    title: "Add Money or Link Bank",
    description: "Easily fund your wallet or connect your bank account for seamless transfers.",
  },
  {
    icon: Send,
    title: "Send, Spend & Track",
    description: "Transfer money, pay bills, and monitor expenses in real-time.",
  },
  {
    icon: Smile,
    title: "Enjoy Secure Digital Life",
    description: "Experience peace of mind with fast, safe, and reliable transactions.",
  },
];

export default function HowItWorks() {
  return (
    <section className="">
      <div className="container">
        <h2 className="text-3xl font-bold text-center lg:text-4xl">How It Works</h2>
        <p className="mt-4 text-muted-foreground text-center lg:text-lg max-w-2xl mx-auto">
          Getting started is simple — manage your money in just a few easy steps.
        </p>

        <div className="mt-12 relative">
          <div className="absolute left-8 top-0 h-full w-1 bg-primary/20 hidden sm:block" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative flex gap-6 sm:pl-20">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 shrink-0">
                  <step.icon className="size-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 text-muted-foreground">{step.description}</p>
                </div>
                {index !== steps.length - 1 && (
                  <div className="absolute left-[40px] top-16 h-12 w-1 bg-primary/20 hidden sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
