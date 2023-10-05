import { gamesTitleData } from "@/data/GamesTitleData";
import { BabType, SubBabType } from "@/types/MateriType";
import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import Link from "next/link";
import { title } from "process";
import MateriDetail from "./detail";

export default function MateriPage({ searchParams }: {
  searchParams: {
    title: string
  }
}) {

  const materi: BabType = gamesTitleData.filter(bab => bab.title === searchParams.title)[0]

  return (
    <main>
      <div className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-20 max-w-6xl mt-6">
        <h1 className="font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-pink-500">
          {searchParams.title}
        </h1>

        <MateriDetail materi={materi} />

      </div>
    </main>
  );
}
