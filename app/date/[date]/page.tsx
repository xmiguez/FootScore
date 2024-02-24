import { DataTable } from "@/components/tabla/data-table";
import { columns } from "@/components/tabla/columns";
import DatePicker from "@/components/date-picker";
import { getMatches } from "@/api/football";

export default async function Home({
  params: { date },
}: {
  params: { date: string };
}) {
  const datas = await getMatches(date);

  return (
    <>
      <section className="container ">
        <div className="py-4">
          <DatePicker date={date} />
          <DataTable columns={columns} data={datas} />
        </div>
      </section>
    </>
  );
}
