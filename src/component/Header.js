import { auth } from "@/auth";
import Image from "next/image";
import React from "react";

async function Header() {
  const session = await auth();

  return (
    <header>
        {JSON.stringify(session)}
      <p>Welcome {session?.user?.name}</p>
    </header>
  );
}

export default Header;
