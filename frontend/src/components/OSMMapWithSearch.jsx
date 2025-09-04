// src/components/OSMMapWithSearch.jsx
import React, { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import NominatimSearch from "./NominatimSearch";
import { DefaultIcon } from "../utils/leafletDefaultIcon";

// small helper to recenter map when center prop changes
function Recenter({ center }) {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.setView(center, 15, { animate: true });
    }
  }, [center, map]);
  return null;
}

export default function OSMMapWithSearch() {
  const defaultCenter = [28.6139, 77.2090]; // fallback (Delhi)
  const [userPos, setUserPos] = useState(null);
  const [pickup, setPickup] = useState(null);
  const [dropoff, setDropoff] = useState(null);
  const [activeCenter, setActiveCenter] = useState(defaultCenter);

  // attempt to get browser location
  useEffect(() => {
    if (!("geolocation" in navigator)) return;
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const p = [pos.coords.latitude, pos.coords.longitude];
        setUserPos(p);
        setActiveCenter(p);
      },
      (err) => {
        console.warn("Geolocation error", err);
      },
      { enableHighAccuracy: false, timeout: 10000 }
    );
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex gap-3">
        <div className="flex-1">
          <label className="block text-sm mb-1">Pickup</label>
          <NominatimSearch
            placeholder="Search pickup location..."
            onSelect={(place) => {
              setPickup([place.lat, place.lng]);
              setActiveCenter([place.lat, place.lng]);
            }}
          />
        </div>

        <div className="flex-1">
          <label className="block text-sm mb-1">Dropoff</label>
          <NominatimSearch
            placeholder="Search dropoff location..."
            onSelect={(place) => {
              setDropoff([place.lat, place.lng]);
              setActiveCenter([place.lat, place.lng]);
            }}
          />
        </div>
      </div>

      <div style={{ height: 500, width: "100%" }} className="rounded border overflow-hidden">
        <MapContainer center={activeCenter || defaultCenter} zoom={13} style={{ height: "100%", width: "100%" }}>
          <TileLayer
            attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Recenter center={activeCenter} />

          {userPos && (
            <Marker position={userPos} icon={DefaultIcon}>
              <Popup>Your current location</Popup>
            </Marker>
          )}

          {pickup && (
            <Marker position={pickup} icon={DefaultIcon}>
              <Popup>Pickup</Popup>
            </Marker>
          )}

          {dropoff && (
            <Marker position={dropoff} icon={DefaultIcon}>
              <Popup>Dropoff</Popup>
            </Marker>
          )}
        </MapContainer>
      </div>
    </div>
  );
}
