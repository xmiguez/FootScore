import { DataTable } from "@/components/tabla/data-table";
import { columns } from "@/components/tabla/columns";
import DatePicker from "@/components/date-picker";
import { getMatches } from "@/api/football";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export const dynamic = "force-dynamic";

export default async function Home({
  params: { date },
}: {
  params: { date: string };
}) {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();
  if (!data.session) {
    return redirect("/");
  }

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
