import Image from "next/image";
import { getTeamInfo, getTeamNextGame } from "@/api/football";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function page({
  params: { id },
}: {
  params: { id: string };
}) {
  const equipo = await getTeamInfo(id);
  const proximo = await getTeamNextGame(id);

  const date = new Date(proximo.fixture.date);
  const fecha = date.toLocaleDateString("es-CL");

  return (
    <>
      <div className="container flex py-8 text-center items-center justify-center">
        <div>
          <div className="flex gap-4">
            <Card className="grid items-center justify-center">
              <CardHeader>
                <CardTitle>{equipo.team.name}</CardTitle>
                <CardDescription>{equipo.team.country}</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  alt=""
                  className="m-auto "
                  src={equipo.team.logo}
                  width={150}
                  height={150}
                />
              </CardContent>
              <CardFooter className="flex text-[13px] justify-center">
                Fundacion: {equipo.team.founded}
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>{equipo.venue.name}</CardTitle>
                <CardDescription>Cuidad: {equipo.venue.city}</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  alt=""
                  className="m-auto border rounded-3xl"
                  src={equipo.venue.image}
                  width={300}
                  height={100}
                />
              </CardContent>
              <CardFooter className="flex text-[13px] justify-center">
                Capacidad: {equipo.venue.capacity} Personas
              </CardFooter>
            </Card>
          </div>
          <div className="pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Proximo Partido</CardTitle>
                <CardDescription>{fecha}</CardDescription>
              </CardHeader>
              <CardContent className="flex gap-8 justify-center">
                <div>
                  <Image
                    className="m-auto pb-2"
                    alt=""
                    src={proximo.teams.home.logo}
                    width={100}
                    height={100}
                  />
                  {proximo.teams.home.name}
                </div>
                <h1 className=" text-[30px] flex justify-center items-center text-center">
                  -
                </h1>
                <div>
                  <Image
                    className="m-auto pb-2"
                    alt=""
                    src={proximo.teams.away.logo}
                    width={100}
                    height={100}
                  />
                  {proximo.teams.away.name}
                </div>
              </CardContent>
              <CardFooter className="flex text-[13px] justify-center">
                {proximo.league.name} / {proximo.league.round}
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
