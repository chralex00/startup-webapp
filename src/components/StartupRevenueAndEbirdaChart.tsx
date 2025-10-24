"use client";

import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import { Box } from "@mui/material";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface StartupRevenueAndEbitdaChartProps {
    name: string;
    aidaRevenue2022: number;
    aidaRevenue2023: number;
    aidaRevenue2024: number;
    aidaEbitda2022: number;
    aidaEbitda2023: number;
    aidaEbitda2024: number;
}

export default function StartupRevenueAndEbitdaChart(props: StartupRevenueAndEbitdaChartProps) {
    const years = ["2022", "2023", "2024"];

    const chartData = {
        labels: years,
        datasets: [
            {
                label: "Revenue (in millions)",
                data: [Number(props.aidaRevenue2022.toFixed(2)), Number(props.aidaRevenue2023.toFixed(2)), Number(props.aidaRevenue2024.toFixed(2))],
                backgroundColor: "rgba(54, 162, 235, 0.7)", // Blue
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1,
            },
            {
                label: "EBITDA (in millions)",
                data: [Number(props.aidaEbitda2022.toFixed(2)), Number(props.aidaEbitda2023.toFixed(2)), Number(props.aidaEbitda2024.toFixed(2))],
                backgroundColor: "rgba(255, 99, 132, 0.7)", // Red
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top" as const,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: "Milioni di USD ($)",
                },
            },
        },
    };

    return (
        <Box sx={{ width: "100%", maxWidth: 700, mx: "auto", mt: 4 }}>
            <Bar data={chartData} options={options} />
        </Box>
    );
}
