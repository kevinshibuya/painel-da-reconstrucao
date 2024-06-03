import { redirect } from "next/navigation";

export default function Home() {
  redirect("/highlights");
  return <main></main>;
}
