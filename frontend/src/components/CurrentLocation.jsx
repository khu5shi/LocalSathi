// src/components/CurrentLocation.jsx
import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function CurrentLocation({ className = "" }) {
  const [locationText, setLocationText] = useState("Detecting...");

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const { latitude, longitude } = pos.coords;

          try {
            const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
            const res = await fetch(url, {
              headers: { Accept: "application/json" },
            });
            const data = await res.json();

            // Build a more detailed address
            const address = data.address;
            const display =
              (address.road ? address.road + ", " : "") +
              (address.suburb ? address.suburb + ", " : "") +
              (address.city || address.town || address.village || "");

            setLocationText(display || data.display_name);
          } catch (err) {
            console.error("Reverse geocoding failed:", err);
            setLocationText("Location not found");
          }
        },
        (err) => {
          console.error("Geolocation error:", err);
          setLocationText("Location blocked");
        }
      );
    } else {
      setLocationText("Geolocation not supported");
    }
  }, []);

  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <FaMapMarkerAlt
        className={`text-2xl ${
          className.includes("dark") ? "text-indigo-400" : "text-red-500"
        }`}
      />
      <span className={`truncate ${className}`}>{locationText}</span>
    </div>
  );
}
