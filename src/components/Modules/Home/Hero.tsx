import { Star } from "lucide-react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="mt-20">
      <div className="container text-center">
        <div className="mx-auto flex max-w-5xl flex-col gap-6">
          <h1 className="text-3xl font-extrabold lg:text-6xl">
            Your Money. Your Control.
          </h1>
          <p className="text-muted-foreground text-balance lg:text-lg">
            Manage, send, and spend securely — all in one smart digital wallet.
          </p>
        </div>
        <div className="mt-10 flex justify-center gap-4">
          <Button size="lg" asChild>
            <a href="#get-started">Get Started</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#download">Download App</a>
          </Button>
        </div>
        <div className="mx-auto mt-10 flex w-fit flex-col items-center gap-4 sm:flex-row">
          <span className="mx-4 inline-flex items-center -space-x-4">
            {[
              {
                src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
                alt: "Avatar 1",
              },
              {
                src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
                alt: "Avatar 2",
              },
              {
                src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
                alt: "Avatar 3",
              },
              {
                src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
                alt: "Avatar 4",
              },
              {
                src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
                alt: "Avatar 5",
              },
            ].map((avatar, index) => (
              <Avatar key={index} className="size-14 border">
                <AvatarImage src={avatar.src} alt={avatar.alt} />
              </Avatar>
            ))}
          </span>
          <div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className="size-5 fill-yellow-400 text-yellow-400"
                />
              ))}
              <span className="mr-1 font-semibold">5.0</span>
            </div>
            <p className="text-muted-foreground text-left font-medium">
              from 200+ reviews
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero };
