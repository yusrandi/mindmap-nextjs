"use client";
import { gamesTitleData } from "@/data/GamesTitleData";
import { BabType } from "@/types/MateriType";
import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import Link from "next/link";

export default function MenuPage() {

  return (
    <main>
      <div className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-20 max-w-6xl mt-6">
        <h1 className="font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-pink-500">
          Materi & Games
        </h1>

        {
          gamesTitleData.map((materi: BabType) => (
            <Card
              key={materi.id}
              isFooterBlurred
              className="w-full h-[400px] col-span-12 sm:col-span-7 mt-8"
            >
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className="text-tiny text-white/60 uppercase font-bold">
                  {materi.bab}
                </p>
                <h4 className="text-white/90 font-medium text-3xl">
                  {materi.title}
                </h4>

              </CardHeader>
              <Image
                removeWrapper
                isBlurred
                src={materi.src}
                alt="Materi app background"
                className="z-0 w-full h-full object-cover"
              />
              <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">

                <div className="flex flex-grow gap-2 items-center">
                  <Link
                    className="text-purple-200 bg-purple-400 bg-opacity-30 px-6 py-2 rounded-full"
                    href={{
                      pathname: '/materi',
                      query: {
                        title: materi.title
                      }
                    }}
                  >
                    <span className="text-sm font-semibold ">
                      Edit Materi
                    </span>
                  </Link>
                </div>
                <Button
                  radius="full"
                  variant="flat"
                  className="text-teal-200 bg-teal-400 bg-opacity-30"
                  type="submit"
                >
                  <span className="text-sm font-semibold ">
                    Edit Games
                  </span>
                </Button>
              </CardFooter>
            </Card>
          ))
        }
      </div>
    </main>
  );
}
