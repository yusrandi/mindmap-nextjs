import React from "react";
import dynamic from "next/dynamic";
import { CardBalance1 } from "./card-balance1";
import { CardBalance2 } from "./card-balance2";
import { CardBalance3 } from "./card-balance3";
import { CardAgents } from "./card-agents";
import { CardTransactions } from "./card-transactions";
import { Link } from "@nextui-org/react";
import NextLink from "next/link";
// import HomeCart from "./cart";

const HomeCart = dynamic(() => import('./cart'), { ssr: false })


export const HomePage = () => (
  <main>
    <div className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-20 max-w-6xl">
      <div className="flex justify-center gap-4 xl:gap-12 pt-3 px-4 lg:px-0  flex-wrap xl:flex-nowrap sm:pt-10 max-w-[90rem] mx-auto w-full">
        <div className="mt-6  gap-6 flex flex-col w-full">
          {/* Card Section Top */}
          <div className="flex flex-col gap-2">
            <div className="grid md:grid-cols-2 grid-cols-1 2xl:grid-cols-3 gap-3  justify-center w-full">
              <CardBalance2 />
              <CardBalance1 />
              <CardBalance3 />
              {/* <CardBalance2 /> */}
              {/* <CardBalance2 /> */}
              {/* <CardBalance1 /> */}
            </div>
          </div>

          {/* Chart */}
          <div className="h-full flex flex-col gap-2 w-full">
            <h3 className="text-xl font-semibold">Statistics</h3>
            <HomeCart />
          </div>
        </div>

      </div>
    </div>
  </main>
);
