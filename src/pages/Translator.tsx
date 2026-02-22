import { useState } from "react";

type Language = "auto" | "en" | "hi" | "pa";

const Translator = () => {
  const [text, setText] = useState("");
  const [fromLang, setFromLang] = useState<Language>("auto");
  const [toLang, setToLang] = useState<Language>("hi");

  const openGoogleTranslate = () => {
    if (!text.trim()) {
      alert("Please enter text");
      return;
    }

    const encodedText = encodeURIComponent(text);

    const url = `https://translate.google.com/?sl=${fromLang}&tl=${toLang}&text=${encodedText}&op=translate`;

    window.open(url, "_blank");
  };

  const swapLanguages = () => {
    if (fromLang === "auto") return; // auto detect shouldn't swap

    const temp = fromLang;
    setFromLang(toLang);
    setToLang(temp);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-3xl border">

        <h2 className="text-3xl font-bold text-center text-blue-700 mb-2">
          Smart Translator
        </h2>

        <p className="text-center text-gray-500 mb-6">
          Fast • Reliable • Auto Language Detection
        </p>

        {/* Language Selection */}
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          <select
            value={fromLang}
            onChange={(e) => setFromLang(e.target.value as Language)}
            className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
          >
            <option value="auto">From: Auto Detect</option>
            <option value="en">From: English</option>
            <option value="hi">From: Hindi</option>
            <option value="pa">From: Punjabi</option>
          </select>

          <button
            onClick={swapLanguages}
            className="bg-gray-200 rounded-lg hover:bg-gray-300 transition font-semibold"
          >
            ⇄ Swap
          </button>

          <select
            value={toLang}
            onChange={(e) => setToLang(e.target.value as Language)}
            className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
          >
            <option value="en">To: English</option>
            <option value="hi">To: Hindi</option>
            <option value="pa">To: Punjabi</option>
          </select>
        </div>

        {/* Input */}
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type your sentence here..."
          className="w-full h-32 p-4 border rounded-xl mb-6 focus:ring-2 focus:ring-blue-400 outline-none"
        />

        {/* Premium Button */}
        <button
          onClick={openGoogleTranslate}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl text-lg font-semibold shadow-md hover:scale-105 hover:shadow-lg transition transform duration-200"
        >
           Translate Instantly
        </button>

        {/* Badge */}
        <div className="mt-4 text-center text-sm text-gray-500">
          Translation powered by Google
        </div>

      </div>
    </div>
  );
};

export default Translator;