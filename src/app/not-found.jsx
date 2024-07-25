"use client";

import { usePathname } from "next/navigation";

export default function Custom404() {
  const pathName = usePathname();

  return <h1>404 - {pathName} Page Not Found.</h1>;
}
