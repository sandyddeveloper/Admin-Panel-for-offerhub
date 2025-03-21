import React from "react";
import { FiEdit, FiTrash2, FiArrowUpRight, FiPackage } from "react-icons/fi";

// Define status color mapping with proper TypeScript types
const statusColors: Record<"New" | "Updated" | "Discontinued", string> = {
  New: "bg-green-100 text-green-700",
  Updated: "bg-blue-100 text-blue-700",
  Discontinued: "bg-red-100 text-red-700",
};

// Props type for RecentProductUpdates component
interface RecentProductUpdatesProps {
  productId: string;
  slug: string;
  date: string;
  user: string;
  status: "New" | "Updated" | "Discontinued"; // Explicitly define allowed values
}

export const RecentProductUpdates: React.FC = () => {
  return (
    <div className="col-span-1 sm:col-span-12 p-4 rounded border border-stone-300 overflow-x-auto">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="flex items-center gap-1.5 font-medium">
          <FiPackage /> Recent Product Updates
        </h3>
        <button className="text-sm text-violet-500 hover:underline">See all</button>
      </div>
      <table className="w-full table-auto min-w-[600px]">
        <TableHead />
        <tbody>
          <TableRow productId="#P48149" slug="pro-1-month" date="Mar 20th" user="Alice" status="New" />
          <TableRow productId="#P1942s" slug="pro-3-month" date="Mar 19th" user="Bob" status="Updated" />
        </tbody>
      </table>
    </div>
  );
};

// Table Head Component
const TableHead: React.FC = () => {
  return (
    <thead>
      <tr className="text-sm font-normal text-stone-500">
        <th className="text-start p-1.5">Product ID</th>
        <th className="text-start p-1.5">Slug</th>
        <th className="text-start p-1.5">Updated Date</th>
        <th className="text-start p-1.5">User</th>
        <th className="text-start p-1.5">Status</th>
        <th className="w-16">Actions</th>
      </tr>
    </thead>
  );
};

// Table Row Component with Proper Type Definition
const TableRow: React.FC<RecentProductUpdatesProps> = ({ productId, slug, date, user, status }) => {
  return (
    <tr className="text-sm border-b border-stone-200">
      <td className="p-1.5">
        <a href="#" className="text-violet-600 underline flex items-center gap-1">
          {productId} <FiArrowUpRight />
        </a>
      </td>
      <td className="p-1.5">{slug}</td>
      <td className="p-1.5">{date}</td>
      <td className="p-1.5">{user}</td>
      <td className="p-1.5">
        <span className={`px-2 py-1 rounded text-xs font-medium ${statusColors[status]}`}>
          {status}
        </span>
      </td>
      <td className="w-16 flex gap-2">
        <button className="hover:bg-blue-200 transition-colors p-1 rounded">
          <FiEdit />
        </button>
        <button className="hover:bg-red-200 transition-colors p-1 rounded">
          <FiTrash2 />
        </button>
      </td>
    </tr>
  );
};
