"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default async function Home() {
  return (
    <>
      <section className="space-y-6 pt-32 lg:pt-40">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <Link
            href="https://twitter.com/vargnassonn"
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
            target="_blank"
          >
            @vargassonn
          </Link>
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            FootScore.
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            <a
              href="https://nextjs.org/"
              target="_blank"
              className="font-bold underline"
            >
              Nextjs
            </a>{" "}
            +{" "}
            <a
              href="https://ui.shadcn.com/"
              target="_blank"
              className="font-bold underline"
            >
              Shadcn
            </a>{" "}
            +{" "}
            <a
              href="https://clerk.com/"
              target="_blank"
              className="font-bold underline"
            >
              Clerk
            </a>{" "}
            +{" "}
            <a
              href="https://www.api-football.com/"
              target="_blank"
              className="font-bold underline"
            >
              Api-Football
            </a>
            .
          </p>
          <div className="space-x-4">
            <Link
              href="https://github.com/xmiguez/FootScore"
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              GitHub
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
