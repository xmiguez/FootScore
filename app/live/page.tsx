import { DataTable } from "@/components/tabla/data-table";
import { columns } from "@/components/tabla/columns-live";
import { getLive } from "@/api/football";

export default async function Page() {
  const data = await getLive();

  return (
    <>
      <section className="container ">
        <div className="mt-6">
          <h2 className="text-2xl font-bold tracking-tight">En vivo</h2>
        </div>
        <div>
          <DataTable columns={columns} data={data} />
        </div>
      </section>
    </>
  );
}
