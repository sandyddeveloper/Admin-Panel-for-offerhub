import React from "react";
import { StatCards } from "./StatCards";
import { RecentProductUpdates } from "./RecentProductUpdates";

export const Grid = () => {
  return (
    <div className="px-4 grid gap-3 grid-cols-1 sm:grid-cols-12">
      <StatCards />
      <RecentProductUpdates />
    </div>
  );
};