import { DataTable } from "@/components/tabla/data-table";
import { columns } from "@/components/tabla/columns";
import { getLive } from "@/api/football";

export default async function Page() {
  const datas = await getLive();

  return (
    <>
      <section className="container ">
        <div className="py-4">
          <DataTable columns={columns} data={datas} />
        </div>
      </section>
    </>
  );
}
