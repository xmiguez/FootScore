"use client";

import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";

import { DateTime } from "luxon";
import { useRouter } from "next/navigation";
import React, { useState, ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface Props {
  date: string;
}

export default function DatePicker({ date }: Props) {
  const [selectedDay, setSelectedDay] = useState<Date>();

  const router = useRouter();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "container max-w-[200px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {selectedDay ? format(selectedDay, "PP") : <span>Partidos</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={selectedDay}
          defaultMonth={selectedDay}
          onSelect={(selectedDate) => {
            if (!selectedDate) return;
            setSelectedDay(selectedDate);
            router.push(
              `/date/${DateTime.fromJSDate(selectedDate).toFormat("y-LL-dd")}`
            );
          }}
        />
      </PopoverContent>
    </Popover>
  );
}
