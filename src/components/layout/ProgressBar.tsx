"use client"

import React from "react";
import useScrollProgress from "@/hooks/useScrollProgress";

const ProgressBar: React.FC = () => {
  const scrollProgress = useScrollProgress();

  return (
    // Progress bar between header and breadcrumb
    // <div className="sticky w-full z-50 top-[47px] md:top-[59px] h-1 bg-neutral-200"> 
    <div className="sticky w-full z-50 top-[89px] md:top-[100px] h-1 bg-neutral-200"> 
    <div
        className="h-full bg-blue-20/50 transition-width duration-250 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
