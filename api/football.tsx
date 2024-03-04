"use server";

import { User } from "@/components/tabla/columns-partidos";

export async function getMatches(date: string): Promise<User[]> {
  const res = await fetch(
    `https://api-football-v1.p.rapidapi.com/v3/fixtures?date=${date}&timezone=America%2FSantiago`,
    {
      cache: "no-cache",
      method: "GET",
      headers: {
        "X-RapidAPI-Key": `${process.env.APIFOOTBALL_TOKEN}`,
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      },
    }
  );

  const prepa = await res.json();

  return prepa.response;
}

// export async function getLive(): Promise<User[]> {
//   const res = await fetch(
//     "https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all&timezone=America%2FSantiago",
//     {
//       cache: "no-cache",
//       method: "GET",
//       headers: {
//         "X-RapidAPI-Key": `${process.env.APIFOOTBALL_TOKEN}`,
//         "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
//       },
//     }
//   );

//   const prepa = await res.json();

//   return prepa.response;
// }

export async function getTeamInfo(id: string): Promise<User> {
  const response = await fetch(
    `https://api-football-v1.p.rapidapi.com/v3/teams?id=${id}`,
    {
      cache: "no-cache",
      method: "GET",
      headers: {
        "X-RapidAPI-Key": `${process.env.APIFOOTBALL_TOKEN}`,
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      },
    }
  );
  const prepa = await response.json();

  return prepa.response[0];
}

export async function getTeamNextGame(id: string): Promise<User> {
  const response = await fetch(
    `https://api-football-v1.p.rapidapi.com/v3/fixtures?season=2023&team=${id}&next=1&timezone=America%2FSantiago`,
    {
      cache: "no-cache",
      method: "GET",
      headers: {
        "X-RapidAPI-Key": `${process.env.APIFOOTBALL_TOKEN}`,
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      },
    }
  );
  const prepa = await response.json();

  return prepa.response[0];
}
