import { redirect } from "next/navigation";
export const dynamic = "force-dynamic";

export default async function Fecha() {
  var x = new Date();
  var y = x.getFullYear().toString();
  var m = (x.getMonth() + 1).toString();
  var d = x.getDate().toString();
  d.length == 1 && (d = "0" + d);
  m.length == 1 && (m = "0" + m);

  redirect(`/date/${y}-${m}-${d}`);
}
