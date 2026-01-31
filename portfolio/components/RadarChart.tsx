import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

interface RadarChartProps {
  data: { label: string; value: number }[];
}

export default function RadarChart({ data }: RadarChartProps) {
  const chartData = {
    labels: data.map((d) => d.label),
    datasets: [
      {
        label: "Core Attributes",
        data: data.map((d) => d.value),
        backgroundColor: "rgba(255,255,255,0.15)", // semi-transparent fill
        borderColor: "rgba(255,255,255,0.7)",       // border line
        borderWidth: 2,
        pointBackgroundColor: "white",
        pointBorderColor: "rgba(255,255,255,0.7)",
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: { color: "rgba(255,255,255,0.1)" },
        grid: { color: "rgba(255,255,255,0.1)" },
        pointLabels: { color: "white", font: { size: 12 } },
        ticks: { color: "white", beginAtZero: true, max: 100, stepSize: 20 },
      },
    },
    plugins: {
      legend: { labels: { color: "white", font: { size: 12 } } },
      tooltip: { enabled: true, backgroundColor: "rgba(0,0,0,0.7)", titleColor: "white", bodyColor: "white" },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return <Radar data={chartData} options={options} />;
}