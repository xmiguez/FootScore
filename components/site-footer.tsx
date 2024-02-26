"use client";

import Link from "next/link";
import { VercelLogoIcon, DotFilledIcon } from "@radix-ui/react-icons";

import { ModeToggle } from "@/components/dark-mode";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import DatePicker from "./date-picker";

export default function SiteFooter() {
  const pathname = usePathname();

  const now = new Date();

  return (
    <>
      <header className="sticky bottom-0 z-50 w-full  border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-end space-x-4">
          <nav className="flex gap-4 items-center">
            <ModeToggle />
            <UserButton />
          </nav>
        </div>
      </header>
    </>
  );
}
