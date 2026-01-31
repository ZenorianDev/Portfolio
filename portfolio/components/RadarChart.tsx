"use client";

import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler);

interface RadarChartProps {
  data: { label: string; value: number }[];
}

export default function RadarChart({ data }: RadarChartProps) {
  const MIN = 60;
  const MAX = 100;

  const normalized = data.map(d => ({
    ...d,
    value: Math.max(MIN, Math.min(MAX, d.value)),
  }));

  const chartData = {
    labels: normalized.map(d => d.label),
    datasets: [
      {
        data: normalized.map(d => d.value),
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderColor: "rgba(255, 255, 255, 0.7)",
        borderWidth: 2,
        pointBackgroundColor: "white",
        pointBorderColor: "rgba(255, 255, 255, 0.7)",
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    scales: {
      r: {
        min: MIN,
        max: MAX,
        angleLines: { color: "rgba(255,255,255,0.15)" },
        grid: { color: "rgba(255,255,255,0.05)" },
        pointLabels: { color: "white", font: { size: 11 } },
        ticks: { display: false },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return <Radar data={chartData} options={options} />;
}
