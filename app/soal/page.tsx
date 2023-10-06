import { gamesTitleData } from "@/data/GamesTitleData";
import { BabType, SubBabType } from "@/types/MateriType";
import SoalContent from "./content";

export default function SoalPage({ searchParams }: {
  searchParams: {
    title: string
  }
}) {

  const materi: BabType = gamesTitleData.filter(bab => bab.title === searchParams.title)[0]

  return (
    <main>
      <div className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-20 max-w-6xl mt-6">
        <h1 className="font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-pink-500 mb-5">
          Soal {searchParams.title}
        </h1>
        <SoalContent title={searchParams.title} />

      </div>
    </main>
  );
}
