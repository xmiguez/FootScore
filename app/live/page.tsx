import { DataTable } from "@/components/tabla/data-table";
import { columns } from "@/components/tabla/columns";
import { getLive } from "@/api/football";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export const dynamic = "force-dynamic";

export default async function Page() {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();
  if (!data.session) {
    return redirect("/");
  }

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
