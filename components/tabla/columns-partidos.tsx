"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ChevronsUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";

import Image from "next/image";
import Link from "next/link";

export type User = {
  fixture: {
    date: string;
    timezone: string;
    status: {
      elapsed: string;
    };
  };
  league: {
    country: string;
    name: string;
    round: string;
    standings: {
      rank: string;
    };
  };
  team: {
    id: string;
    country: string;
    name: string;
    founded: string;
    logo: string;
  };
  venue: {
    name: string;
    city: string;
    capacity: string;
    image: string;
  };
  teams: {
    home: {
      name: string;
      logo: string;
      id: string;
    };
    away: {
      name: string;
      logo: string;
      id: string;
    };
  };
  goals: {
    home: string;
    away: string;
  };
};

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "teams.home.logo",
    header: "",
    cell: "",
  },

  {
    accessorKey: "fixture.date",
    header: ({ column }) => {
      return (
        <>
          <div className="text-center">
            <Button
              variant="ghost"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              Fecha / Hora
              <ChevronsUpDown className="ml-1 h-3 w-3" />
            </Button>
          </div>
        </>
      );
    },
    cell: ({ row }) => {
      const date = new Date(row.getValue("fixture_date"));
      const fecha = date.toLocaleDateString("es-CL");
      const hora = date.toLocaleTimeString("en-CL", {
        hour12: true, // false
        hour: "numeric", // 2-digit
        minute: "2-digit", // numeric
      });
      return (
        <>
          <div className="text-center">{fecha}</div>
          <div className="text-center">{hora}</div>
        </>
      );
    },
  },
  {
    accessorKey: "league.country",
    header: ({ column }) => {
      return (
        <>
          <div className="text-center">
            <Button
              variant="ghost"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              Pais
              <ChevronsUpDown className="ml-1 h-3 w-3" />
            </Button>
          </div>
        </>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="text-center truncate">
          {row.getValue("league_country")}
        </div>
      );
    },
  },

  {
    accessorKey: "league.name",
    header: ({ column }) => {
      return (
        <>
          <div className="text-center">
            <Button
              variant="ghost"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              Liga
              <ChevronsUpDown className="ml-1 h-3 w-3" />
            </Button>
          </div>
        </>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="truncate  text-center">
          {row.getValue("league_name")}
        </div>
      );
    },
  },

  {
    accessorKey: "league.round",
    header: ({ column }) => {
      return (
        <>
          <div className="text-center">
            <Button
              variant="ghost"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              Ronda
              <ChevronsUpDown className="ml-1 h-3 w-3" />
            </Button>
          </div>
        </>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="truncate text-center">
          {row.getValue("league_round")}
        </div>
      );
    },
  },

  {
    accessorKey: "fixture.status.elapsed",
    header: ({ column }) => {
      return (
        <>
          <div className="text-center">
            <Button
              variant="ghost"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              Minuto
              <ChevronsUpDown className="ml-1 h-3 w-3" />
            </Button>
          </div>
        </>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="truncate text-center">
          {row.getValue("fixture_status.elapsed")}
          {"'"}
        </div>
      );
    },
  },

  {
    accessorKey: "teams.home.name",
    header: ({ column }) => {
      return (
        <>
          <div className="text-center">
            <Button
              variant="ghost"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              Local
              <ChevronsUpDown className="ml-1 h-3 w-3" />
            </Button>
          </div>
        </>
      );
    },
    cell: ({ row }) => {
      return (
        <>
          <Link href={`/team/` + row.getValue("teams_home.id")}>
            <div className="max-w-[250px] truncate space-y-2 text-center">
              <div>
                <Image
                  alt=""
                  className="m-auto w-[40px] h-auto"
                  width={0}
                  height={0}
                  src={row.getValue("teams_home.logo")}
                />
              </div>

              <div>{row.getValue("teams_home.name")}</div>
            </div>
          </Link>
        </>
      );
    },
  },

  {
    accessorKey: "goals.home",
    header: "",
    cell: ({ row }) => {
      return <div></div>;
    },
  },
  {
    accessorKey: "goals.away",
    header: "",
    cell: ({ row }) => {
      return <div></div>;
    },
  },
  {
    accessorKey: "league.standings",
    header: "",
    cell: ({ row }) => {
      return (
        <>
          <div className="text-[30px] flex gap-2 text-center justify-center">
            <div>{row.getValue("goals_home")}</div>
            <p>-</p>
            <div>{row.getValue("goals_away")}</div>
          </div>
        </>
      );
    },
  },

  {
    accessorKey: "teams.away.logo",
    header: "",
    cell: "",
  },

  {
    accessorKey: "teams.away.name",
    header: ({ column }) => {
      return (
        <>
          <div className="text-center">
            <Button
              variant="ghost"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              Visita
              <ChevronsUpDown className="ml-1 h-3 w-3" />
            </Button>
          </div>
        </>
      );
    },
    cell: ({ row }) => {
      return (
        <>
          <Link href={`/team/` + row.getValue("teams_away.id")}>
            <div className="max-w-[200px] truncate space-y-2 text-center">
              <div>
                <Image
                  alt=""
                  className="m-auto w-[40px] h-auto "
                  width={0}
                  height={0}
                  src={row.getValue("teams_away.logo")}
                />
              </div>

              <div>{row.getValue("teams_away.name")}</div>
            </div>
          </Link>
        </>
      );
    },
  },

  {
    accessorKey: "teams.home.id",
    header: "",
    cell: "",
  },
  {
    accessorKey: "teams.away.id",
    header: "",
    cell: "",
  },
];
