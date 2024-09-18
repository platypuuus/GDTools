"use client";
import { Button } from "@/components/ui/button";
import "../globals.css";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const routesSeparated: string[] = ["/connexions", "/roles-users", "/upload"];

  const routes = [
    {
      link: "/connexions",
      name: "Statistiques",
    },
    {
      link: "/admin",
      name: "Modération",
    },
    {
      link: "/roles-users",
      name: "Gestion d'utilisateurs iDisko",
    },
    {
      link: "/roles-backoffice",
      name: "Gestion d'utilisateurs Back Office",
    },
    {
      link: "/patch-note",
      name: "Notes de changements",
    },
    {
      link: "/upload",
      name: "Upload de musiques",
    },
  ];

  return (
    <div className="flex h-full w-[20%] ">
      <div className=" flex h-full w-full flex-col content-center items-center p-6 bg-red-300">
        <Button className="w-full mx-5">Pippin Generator</Button>
      </div>
    </div>
  );
}
