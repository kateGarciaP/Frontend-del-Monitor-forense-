import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Critical", value: 5 },
  { name: "High", value: 8 },
  { name: "Medium", value: 12 },
  { name: "Low", value: 20 },
];

const COLORS = ["#ef4444", "#f97316", "#eab308", "#22c55e"];

export default function SeverityPieChart() {
  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-gray-200 dark:border-slate-800">
      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">
        Distribución de Severidad
      </h3>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} dataKey="value" outerRadius={90}>
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}