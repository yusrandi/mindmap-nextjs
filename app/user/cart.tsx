import { HistoryType } from '@/types/HistoryType'
import React from 'react'
import ReactApexChart from 'react-apexcharts';
interface props {
    items: HistoryType[]
}
export default function UserCart({ items }: props) {
    const chartData = [
        { label: 'BAB I', value: items[0]?.score ?? 0 },
        { label: 'BAB II', value: items[1]?.score ?? 0 },
        { label: 'BAB III', value: items[2]?.score ?? 0 },
        { label: 'BAB IV', value: items[3]?.score ?? 0 },
        { label: 'BAB V', value: items[4]?.score ?? 0 },
        { label: 'BAB VI', value: items[5]?.score ?? 0 },
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

    return (
        <div className="mixed-chart">
            <ReactApexChart options={options} series={series} type="line" height={200} />
        </div>
    )
}
