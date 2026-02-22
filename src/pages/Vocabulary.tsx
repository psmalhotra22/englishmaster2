import { useState } from "react";
import { Speaker } from "lucide-react"; // Assuming lucide-react is installed

type Word = {
  word: string;
  meaning: string;
  partOfSpeech: string;
  example: string;
  pronunciation: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  synonyms?: string[];
  antonyms?: string[];
  extraExamples?: string[];
};

const words: Word[] = [
  {
    word: "Abundant",
    meaning: "More than enough; plentiful.",
    partOfSpeech: "Adjective",
    example: "The garden had abundant flowers in spring.",
    pronunciation: "uh-BUHN-duhnt",
    level: "Intermediate",
    synonyms: ["plentiful", "ample", "profuse"],
    antonyms: ["scarce", "limited"],
    extraExamples: [
      "Opportunities were abundant in the city for young professionals.",
      "She had an abundant supply of energy after a good night's sleep."
    ],
  },
  {
    word: "Brave",
    meaning: "Showing courage in difficult situations.",
    partOfSpeech: "Adjective",
    example: "The brave soldier protected his country.",
    pronunciation: "brayv",
    level: "Beginner",
    synonyms: ["courageous", "fearless"],
    antonyms: ["cowardly", "timid"],
    extraExamples: ["She was brave enough to speak in front of the large audience."],
  },
  {
    word: "Curious",
    meaning: "Eager to know or learn something.",
    partOfSpeech: "Adjective",
    example: "She was curious about how airplanes fly.",
    pronunciation: "KYOOR-ee-uhs",
    level: "Beginner",
    synonyms: ["inquisitive", "interested"],
    antonyms: ["indifferent", "uninterested"],
  },
  {
    word: "Diligent",
    meaning: "Showing careful and persistent effort.",
    partOfSpeech: "Adjective",
    example: "He is a diligent student who studies daily.",
    pronunciation: "DIL-i-juhnt",
    level: "Intermediate",
    synonyms: ["hardworking", "persistent"],
    antonyms: ["lazy", "negligent"],
  },
  {
    word: "Eloquent",
    meaning: "Fluent or persuasive in speaking or writing.",
    partOfSpeech: "Adjective",
    example: "The politician gave an eloquent speech.",
    pronunciation: "EL-uh-kwuhnt",
    level: "Advanced",
    synonyms: ["articulate", "expressive", "persuasive"],
    antonyms: ["inarticulate", "awkward"],
  },
  {
    word: "Frugal",
    meaning: "Careful with money or resources; economical.",
    partOfSpeech: "Adjective",
    example: "She leads a frugal lifestyle, saving most of her income.",
    pronunciation: "FROO-guhl",
    level: "Intermediate",
    synonyms: ["thrifty", "economical"],
    antonyms: ["extravagant", "wasteful"],
  },
  {
    word: "Generous",
    meaning: "Willing to give or share; kind-hearted.",
    partOfSpeech: "Adjective",
    example: "He was generous with his time and resources.",
    pronunciation: "JEN-er-uhs",
    level: "Beginner",
    synonyms: ["kind", "charitable", "benevolent"],
    antonyms: ["selfish", "stingy"],
  },
  {
    word: "Humble",
    meaning: "Having a modest view of one’s importance.",
    partOfSpeech: "Adjective",
    example: "Despite his success, he remained humble.",
    pronunciation: "HUHM-buhl",
    level: "Beginner",
    synonyms: ["modest", "unpretentious"],
    antonyms: ["arrogant", "proud"],
  },
  {
    word: "Innovative",
    meaning: "Introducing new ideas; creative in thinking.",
    partOfSpeech: "Adjective",
    example: "The company is known for its innovative technology.",
    pronunciation: "IN-uh-vey-tiv",
    level: "Advanced",
    synonyms: ["creative", "original", "inventive"],
    antonyms: ["conventional", "unimaginative"],
  },
  {
    word: "Joyful",
    meaning: "Feeling, expressing, or causing great pleasure and happiness.",
    partOfSpeech: "Adjective",
    example: "The children were joyful after receiving gifts.",
    pronunciation: "JOY-fuhl",
    level: "Beginner",
    synonyms: ["happy", "cheerful", "delighted"],
    antonyms: ["sad", "miserable"],
  },
];

const levelColors: Record<Word["level"], string> = {
  Beginner: "bg-green-100 text-green-700",
  Intermediate: "bg-yellow-100 text-yellow-800",
  Advanced: "bg-red-100 text-red-700",
};

const Vocabulary = () => {
  const [search, setSearch] = useState("");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const filteredWords = words.filter((item) =>
    item.word.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Page Heading */}
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-4">
          Vocabulary Builder
        </h2>

        {/* Vocabulary Definition Section */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-10">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">What is Vocabulary?</h3>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Vocabulary</span> is the collection of words that a person knows and uses. 
            It includes understanding the <span className="italic">meaning</span>, <span className="italic">pronunciation</span>, 
            <span className="italic"> spelling</span>, and how to <span className="italic">use words in sentences</span>.
          </p>
          <p className="text-gray-700 mb-2">
            Vocabulary is important for:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Improving communication skills.</li>
            <li>Enhancing reading and writing abilities.</li>
            <li>Understanding words in context.</li>
            <li>Learning new languages more effectively.</li>
          </ul>
          <p className="text-gray-700 mt-3">
            Expand your vocabulary gradually by learning new words daily, understanding their meanings, examples, synonyms, antonyms, and usage in sentences.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-10 flex justify-center">
          <input
            type="text"
            placeholder="Search a word..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Words Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredWords.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
            >
              {/* Word + Level */}
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold text-blue-600">{item.word}</h3>
                <span className={`text-xs px-3 py-1 rounded-full ${levelColors[item.level]}`}>
                  {item.level}
                </span>
              </div>

              {/* Pronunciation */}
              <div className="flex items-center mt-2 text-gray-500 italic text-sm">
                /{item.pronunciation}/
                <Speaker className="ml-2 cursor-pointer hover:text-blue-500" />
              </div>

              {/* Meaning */}
              <p className="mt-4 text-gray-700">
                <span className="font-semibold">Meaning:</span> {item.meaning}
              </p>

              {/* Part of Speech */}
              <p className="mt-2 text-gray-700">
                <span className="font-semibold">Part of Speech:</span> {item.partOfSpeech}
              </p>

              {/* Example */}
              <p className="mt-3 text-gray-600 italic border-l-4 border-blue-500 pl-3">
                "{item.example}"
              </p>

              {/* Expandable Extra Details */}
              <div className="mt-3">
                <button
                  className="text-blue-600 text-sm hover:underline"
                  onClick={() =>
                    setExpandedIndex(expandedIndex === index ? null : index)
                  }
                >
                  {expandedIndex === index ? "Hide Details" : "Learn More"}
                </button>

                {expandedIndex === index && (
                  <div className="mt-3 text-gray-700 text-sm space-y-1">
                    {item.synonyms && (
                      <p>
                        <span className="font-semibold">Synonyms:</span> {item.synonyms.join(", ")}
                      </p>
                    )}
                    {item.antonyms && (
                      <p>
                        <span className="font-semibold">Antonyms:</span> {item.antonyms.join(", ")}
                      </p>
                    )}
                    {item.extraExamples && item.extraExamples.length > 0 && (
                      <div>
                        <span className="font-semibold">Extra Examples:</span>
                        <ul className="list-disc list-inside">
                          {item.extraExamples.map((ex, i) => (
                            <li key={i}>"{ex}"</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredWords.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No words found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Vocabulary;