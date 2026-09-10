import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { time: "06:00", incidents: 2 },
  { time: "08:00", incidents: 5 },
  { time: "10:00", incidents: 8 },
  { time: "12:00", incidents: 6 },
  { time: "14:00", incidents: 9 },
];

export default function ActivityLineChart() {
  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-gray-200 dark:border-slate-800">
      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">
        Actividad en el Tiempo
      </h3>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="time" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="incidents"
              stroke="#06b6d4"
              strokeWidth={3}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}