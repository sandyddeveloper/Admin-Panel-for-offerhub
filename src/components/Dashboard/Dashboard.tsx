import React from "react";
import { TopBar } from "./TopBar";
import { Grid } from "./Grid";

export const Dashboard = () => {
  return (
    <div className="bg-white rounded-lg pb-4 shadow w-full max-w-7xl mx-auto">
      <TopBar />
      <Grid />
    </div>
  );
};