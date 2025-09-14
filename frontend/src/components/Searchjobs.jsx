import { useState, useEffect } from "react";
import { FaSearch, FaMicrophone } from "react-icons/fa";
import useSpeechRecognition from "../utils/useSpeechRecognition";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const { listening, transcript, startListening } = useSpeechRecognition();

  useEffect(() => {
    if (transcript) {
      setQuery(transcript); // auto-fill input with voice result
    }
  }, [transcript]);

  const handleSearch = () => {
    console.log("Searching for:", query);
    // Here you can navigate to a results page or API call
  };

  return (
    <div className="w-full flex justify-center mt-6 px-4 py-10">
      <div className="flex items-center bg-white rounded-full shadow-lg p-2 w-full max-w-2xl">
        {/* Input */}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by role (e.g. plumber, carpenter, driver)"
          className="flex-grow px-4 py-2 rounded-l-full focus:outline-none text-gray-700"
        />

        {/* Mic Button */}
        <button
          onClick={startListening}
          className={`p-3 rounded-full mr-2 ${
            listening ? "bg-red-100" : "bg-gray-100"
          }`}
        >
          <FaMicrophone
            className={`text-xl ${
              listening ? "text-red-500 animate-pulse" : "text-gray-600"
            }`}
          />
        </button>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="bg-indigo-500 text-white px-5 py-2 rounded-full hover:bg-indigo-700 flex items-center"
        >
          <FaSearch className="mr-2" /> Search
        </button>
      </div>
    </div>
  );
}
