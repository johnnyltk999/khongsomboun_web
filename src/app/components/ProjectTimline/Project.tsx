import React from "react";
import { Timeline } from "../ui/timeline";
import { TimelineData } from "./ProjectData";

export default function TimelineDemo() {
  const data = TimelineData.map((yearData) => ({
    title: yearData.years,
    content: (
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto text-left text-neutral-800 dark:text-neutral-200">
          <thead>
            <tr>
              <th className="px-4 py-2">ລາຍຊື່ໂຄງການ</th>
              <th className="px-4 py-2">ເຈົ້າຂອງໂຄງການ</th>
              <th className="px-4 py-2">ສັນຍາ</th>
              <th className="px-4 py-2">ສະຖານະ</th>
            </tr>
          </thead>
          <tbody>
            {yearData.projects.map((project, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2">{project.title}</td>
                <td className="px-4 py-2">{project.owner}</td>
                <td className="px-4 py-2">{project.Signature ? "✅" : "❌"}</td>
                <td className="px-4 py-2">{project.status || "🔃"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  }));

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
