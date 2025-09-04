// src/components/NominatimSearch.jsx
import React, { useEffect, useState } from "react";

export default function NominatimSearch({ placeholder = "Search place...", onSelect }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // debounce search (500ms)
  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }
    const t = setTimeout(() => doSearch(query), 500);
    return () => clearTimeout(t);
  }, [query]);

  async function doSearch(q) {
    setLoading(true);
    try {
      // Add an email param (replace with your email) to identify your app to Nominatim:
      const email = "your-khushi4608@gmail.com";
      const url = `https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&limit=6&q=${encodeURIComponent(
        q
      )}&email=${encodeURIComponent(email)}`;
      const res = await fetch(url, {
        headers: {
          "Accept": "application/json"
        }
      });
      const data = await res.json();
      setResults(data);
    } catch (err) {
      console.error("Nominatim search error", err);
      setResults([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative w-full max-w-md">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="w-full px-3 py-2 border rounded"
      />
      {loading && <div className="absolute right-2 top-2 text-sm">…</div>}

      {results.length > 0 && (
        <ul className="absolute z-50 mt-1 w-full bg-white border rounded shadow max-h-60 overflow-auto">
          {results.map((r) => (
            <li
              key={r.place_id}
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setQuery(r.display_name);
                setResults([]);
                onSelect({
                  lat: parseFloat(r.lat),
                  lng: parseFloat(r.lon),
                  display_name: r.display_name,
                  raw: r
                });
              }}
            >
              {r.display_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
