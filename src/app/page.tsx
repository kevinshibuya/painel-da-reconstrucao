import { redirect } from "next/navigation";

export default function Home() {
  redirect("/dados-gerais");
  return <main></main>;
}
