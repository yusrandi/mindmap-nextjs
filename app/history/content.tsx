'use client'
import { database, historiesDatabaseRef } from '@/lib/firebase'
import { HistoryType } from '@/types/HistoryType'
import { Button } from '@nextui-org/button'
import { Link } from '@nextui-org/react'
import { onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts'
import HistoryCart from './cart'
interface props {
    histories: HistoryType[]
}
export default function HistoryContent({ histories }: props) {

    const chartData = [
        { label: 'BAB I', value: histories[0]?.score ?? 0 },
        { label: 'BAB II', value: histories[1]?.score ?? 0 },
        { label: 'BAB III', value: histories[2]?.score ?? 0 },
        { label: 'BAB IV', value: histories[3]?.score ?? 0 },
        { label: 'BAB V', value: histories[4]?.score ?? 0 },
        { label: 'BAB VI', value: histories[5]?.score ?? 0 },
        // Add more data points as needed
    ];
    const options: ApexCharts.ApexOptions = {
        chart: {
            id: "basic-bar",
            type: 'line',
            zoom: {
                enabled: false,
            },
        },
        stroke: {
            curve: 'stepline',
            colors: ['#9C27B0']
        },
        xaxis: {
            categories: chartData.map((item) => item.label),
        },
    };

    const series = [
        {
            name: 'Nilai',
            data: chartData.map((item) => item.value),
        },
    ];

    // return (
    //     <div className="mixed-chart">
    //         <ReactApexChart options={options} series={series} type="line" height={200} />
    //     </div>
    // )

    return (
        <div>
            {
                histories.map((history, index) => (
                    <div className="flex flex-wrap space-x-4 justify-center mb-2" key={index}>
                        <div className='flex flex-grow '>
                            <p className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-500 pr-2">
                                {history.idGame}
                            </p>
                        </div>
                        <Button
                            size='sm'
                            className="font-medium bg-gradient-to-r from-pink-500 to-yellow-600 text-white shadow-lg"
                            onClick={() =>
                            // window.open("https://github.com/yaseenmustapha/nextjs13-app")
                            { }
                            }
                        >
                            {history.score}
                        </Button>
                    </div>
                ))
            }
        </div>
    )
}
