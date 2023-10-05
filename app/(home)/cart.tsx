'use client'
import { Card } from '@nextui-org/card';
import React from 'react'
import Chart from "react-apexcharts";

export default function HomeCart() {
    const state = {
        options: {
            chart: {
                id: "basic-bar",
            },
            xaxis: {
                categories: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023]
            },
            fill: {
                colors: ['#9C27B0']
            }
        },
        series: [
            {
                name: "series-1",
                data: [30, 40, 45, 50, 49, 60, 70, 91, 49, 60, 70, 91, 30, 40, 45, 50, 49, 60, 70, 91, 49, 60, 70, 91]
            }
        ]
    };
    return (
        <Card className="mixed-chart p-6">
            <Chart
                options={state.options}
                series={state.series}
                type="bar"
                height={500}
            />
        </Card>
    );
}
