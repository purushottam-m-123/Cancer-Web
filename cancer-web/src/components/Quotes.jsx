import { useEffect, useState } from "react";

export default function Quotes() {
  const [quote, setQuote] = useState("");

  const fetchQuote = async () => {
    const res = await fetch("https://api.quotable.io/random");
    const data = await res.json();
    setQuote(data.content);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div id="quotes" className="bg-pink-50 py-16 px-4 text-center">
      <h2 className="text-3xl font-bold text-pink-700">Inspirational Quote</h2>

      <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto italic">
        “{quote || "Loading..."}”
      </p>

      <button
        onClick={fetchQuote}
        className="mt-6 bg-pink-600 text-white px-5 py-2 rounded-lg hover:bg-pink-700"
      >
        New Quote
      </button>
    </div>
  );
}
