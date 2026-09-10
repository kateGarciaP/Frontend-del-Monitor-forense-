import IncidentsBarChart from "./charts/IncidentsBarChart";
import SeverityPieChart from "./charts/SeverityPieChart";
import ActivityLineChart from "./charts/ActivityLineChart";

export default function DashboardCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <IncidentsBarChart />
      <SeverityPieChart />
      <ActivityLineChart />
    </div>
  );
}