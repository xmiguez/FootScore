"use client";

import Link from "next/link";
import { VercelLogoIcon, DotFilledIcon } from "@radix-ui/react-icons";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import DatePicker from "./date-picker";
import { ModeToggle } from "@/components/dark-mode";
import { UserButton } from "@clerk/nextjs";

export default function SiteHeader() {
  const pathname = usePathname();

  const now = new Date();

  return (
    <>
      <header className="sticky top-0 z-50 w-full  border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between space-x-4">
          <Link
            href="/"
            className="mr-2 flex items-center md:mr-6 md:space-x-2"
          >
            <VercelLogoIcon className="size-4" aria-hidden="true" />
            <span className="hidden sm:visible font-bold md:inline-block">
              FootScore
            </span>
          </Link>

          <nav className="flex gap-4 items-center">
            <div className="flex gap-4">
              <DatePicker date={now.toString()} />
              <div className="flex items-center">
                <DotFilledIcon />
                <Link
                  href="/live"
                  className={cn(
                    "flex gap-1 items-center transition-colors text-[13px] hover:text-foreground/80",
                    pathname?.startsWith("/live")
                      ? "text-foreground"
                      : "text-foreground/60"
                  )}
                >
                  Live
                </Link>
              </div>
              <ModeToggle />
              <UserButton />
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
