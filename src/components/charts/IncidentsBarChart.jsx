import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Auth API", incidents: 12 },
  { name: "DB Cluster", incidents: 8 },
  { name: "Gateway", incidents: 5 },
  { name: "Storage", incidents: 3 },
];

export default function IncidentsBarChart() {
  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-gray-200 dark:border-slate-800">
      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">
        Incidentes por Servicio
      </h3>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip />
            <Bar dataKey="incidents" fill="#06b6d4" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}