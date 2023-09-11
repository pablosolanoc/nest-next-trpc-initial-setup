import Image from "next/image";
import { trpcRouter } from "./trpc";
import { useEffect } from "react";
import { ClientSide } from "./ClientSide";

export default async function Home() {
  const response = await trpcRouter.hello.query({ name: "hola" });

  console.log(response);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {response}
      <ClientSide />
    </main>
  );
}
