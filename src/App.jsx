import React, { useEffect, useState } from "react";
import DashboardCharts from "./components/DashboardCharts";

const mockIncidents = [
  {
    id: 1,
    service: "Authentication API",
    diagnosis: "Multiple failed login attempts detected",
    severity: "Critical",
    time: "10:42 AM",
  },
  {
    id: 2,
    service: "Database Cluster",
    diagnosis: "High memory usage spike",
    severity: "High",
    time: "09:15 AM",
  },
  {
    id: 3,
    service: "Payment Gateway",
    diagnosis: "Timeout errors increasing",
    severity: "Medium",
    time: "08:30 AM",
  },
  {
    id: 4,
    service: "File Storage",
    diagnosis: "Disk space at 78%",
    severity: "Low",
    time: "07:50 AM",
  },
];

const severityStyles = {
  Critical:
    "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400",
  High:
    "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-400",
  Medium:
    "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-400",
  Low:
    "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400",
};

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeView, setActiveView] = useState("dashboard");  

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen flex bg-slate-100 dark:bg-slate-950 transition-colors duration-300">
      
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-slate-900 border-r border-gray-200 dark:border-slate-800 p-6 hidden md:flex flex-col">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white mb-8">
          Forensic Lab
        </h1>

        <nav className="flex flex-col gap-4 text-sm">
          <SidebarItem 
              label="Laboratorio Principal"
              view="dashboard"
              active={activeView === "dashboard"}
              setActiveView={setActiveView}
            />

          <SidebarItem 
              label="Incidentes"
              view="incidents"
              active={activeView === "incidents"}
              setActiveView={setActiveView}
          />

          <SidebarItem 
              label="Alertas"
              view="alerts"
              active={activeView === "alerts"}
              setActiveView={setActiveView}
          />

          <SidebarItem 
              label="Logs"
              view="logs"
              active={activeView === "logs"}
              setActiveView={setActiveView}
          />

          <SidebarItem 
              label="Configuración"
              view="settings"
              active={activeView === "settings"}
              setActiveView={setActiveView}
          />
        </nav>

        <div className="mt-auto">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-full mt-6 text-sm px-4 py-2 rounded-lg bg-slate-200 dark:bg-slate-800 text-gray-700 dark:text-gray-200 hover:opacity-80 transition"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-8 space-y-8">

        {/* Topbar */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Laboratorio Principal
          </h2>

          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-sm font-medium text-green-600 dark:text-green-400">
              Live
            </span>
          </div>
        </div>
        
{activeView === "incidents" && (
  <>
    <DashboardCharts />

    <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-xl shadow-sm mt-8">
      <div className="px-6 py-4 border-b border-gray-200 dark:border-slate-800">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Incidentes Recientes
        </h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-50 dark:bg-slate-800 text-gray-600 dark:text-gray-300 uppercase text-xs tracking-wider">
            <tr>
              <th className="px-6 py-3">Servicio</th>
              <th className="px-6 py-3">Diagnóstico</th>
              <th className="px-6 py-3">Severidad</th>
              <th className="px-6 py-3">Hora</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-slate-800">
            {mockIncidents.map((incident) => (
              <tr key={incident.id}>
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  {incident.service}
                </td>
                <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                  {incident.diagnosis}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${severityStyles[incident.severity]}`}
                  >
                    {incident.severity}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-500 dark:text-gray-400">
                  {incident.time}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </>
)}

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MetricCard
            title="Total Incidentes"
            value="128"
            description="Últimas 24 horas"
          />
          <MetricCard
            title="Alertas Críticas"
            value="5"
            description="Requieren atención inmediata"
          />
          <MetricCard
            title="Salud del Sistema"
            value="98.2%"
            description="Operatividad general"
          />
        </div>

        {/* Table */}
        <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-xl shadow-sm">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-slate-800">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Incidentes Recientes
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 dark:bg-slate-800 text-gray-600 dark:text-gray-300 uppercase text-xs tracking-wider">
                <tr>
                  <th className="px-6 py-3">Servicio</th>
                  <th className="px-6 py-3">Diagnóstico</th>
                  <th className="px-6 py-3">Severidad</th>
                  <th className="px-6 py-3">Hora</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-slate-800">
                {mockIncidents.map((incident) => (
                  <tr
                    key={incident.id}
                    className="hover:bg-slate-50 dark:hover:bg-slate-800 transition"
                  >
                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                      {incident.service}
                    </td>
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                      {incident.diagnosis}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${severityStyles[incident.severity]}`}
                      >
                        {incident.severity}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-500 dark:text-gray-400">
                      {incident.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}

function SidebarItem({ label, active, view, setActiveView }) {
  return (
    <button
      onClick={() => setActiveView(view)}
      className={`text-left px-3 py-2 rounded-lg transition ${
        active
          ? "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-400"
          : "text-gray-600 dark:text-gray-400 hover:bg-slate-100 dark:hover:bg-slate-800"
      }`}
    >
      {label}
    </button>
  );
}

function MetricCard({ title, value, description }) {
  return (
    <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-xl p-6 shadow-sm hover:shadow-md transition">
      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
        {title}
      </h3>
      <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">
        {value}
      </p>
      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
}

export default App;