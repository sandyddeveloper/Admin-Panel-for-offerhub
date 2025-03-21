"use client";
import React, { useState, useEffect } from "react";
import { FiMoon, FiSun, FiWifiOff, FiWifi } from "react-icons/fi";

export const TopBar = () => {
  const [greeting, setGreeting] = useState("Good morning");
  const [currentTime, setCurrentTime] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const now = new Date();
    const hours = now.getHours();

    if (hours < 12) {
      setGreeting("🌞 Good morning");
    } else if (hours < 18) {
      setGreeting("🌤 Good afternoon");
    } else {
      setGreeting("🌙 Good evening");
    }

    const interval = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    }, 1000);

    const updateOnlineStatus = () => setIsOnline(navigator.onLine);
    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);

    return () => {
      clearInterval(interval);
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
    };
  }, []);

  return (
    <div
      className={`border-b px-4 py-3 sm:px-6 sm:py-4 border-stone-200 shadow-sm rounded-lg flex items-center justify-between ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      {/* Left Side */}
      <div className="flex items-center gap-3">
        <img
          src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
          alt="Profile"
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-stone-300"
        />
        <div className="hidden sm:block">
          <span className="text-sm font-bold block">{greeting}, Admin!</span>
          <span className="text-xs block text-stone-500">{currentTime}</span>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Online Status */}
        <span
          className={`flex items-center gap-1 text-xs sm:text-sm px-2 py-1 rounded ${
            isOnline ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}
        >
          {isOnline ? <FiWifi /> : <FiWifiOff />}
          <span className="hidden sm:inline">{isOnline ? "Online" : "Offline"}</span>
        </span>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm bg-stone-100 transition-all hover:bg-gray-200 px-2 py-1 rounded"
        >
          {darkMode ? <FiSun /> : <FiMoon />}
          <span className="hidden sm:inline">{darkMode ? "Light Mode" : "Dark Mode"}</span>
        </button>
      </div>
    </div>
  );
};
