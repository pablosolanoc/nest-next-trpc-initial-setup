"use client";

import { useEffect, useState } from "react";
import { trpcRouter } from "./trpc";

export const ClientSide = () => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    trpcRouter.hello.query({ name: "Holleo" }).then((response) => {
      setGreeting(response);
    });
  });

  return <div>Client Side: {greeting}</div>;
};
