import { useState } from "react";

type GrammarTopic = {
  title: string;
  definition: string;
  rules: string[];
  examples: string[];
  tips?: string[]; // optional extra tips for students
};

const grammarTopics: GrammarTopic[] = [
  {
    title: "Noun",
    definition:
      "A noun is a word that names a person, place, thing, or idea.",
    rules: [
      "Nouns can be singular or plural.",
      "Proper nouns always start with a capital letter.",
      "Nouns can act as subject or object in a sentence.",
    ],
    examples: [
      "Rahul is a student.",
      "Delhi is a big city.",
      "Honesty is important.",
    ],
    tips: [
      "Common nouns: general names like 'city', 'dog'.",
      "Proper nouns: specific names like 'Paris', 'Rohit'."
    ]
  },
  {
    title: "Verb",
    definition:
      "A verb is a word that shows action or state of being.",
    rules: [
      "Every sentence must contain at least one verb.",
      "Verbs change form based on tense (past, present, future).",
      "Helping verbs support the main verb.",
    ],
    examples: [
      "She runs every morning.",
      "They are playing cricket.",
      "He was tired yesterday.",
    ],
    tips: [
      "Action verbs: describe what someone does (run, eat, write).",
      "Linking verbs: connect subject to a description (is, seem, become)."
    ]
  },
  {
    title: "Adjective",
    definition:
      "An adjective is a word that describes or modifies a noun.",
    rules: [
      "Adjectives usually come before nouns.",
      "Comparative and superlative forms show comparison.",
      "Adjectives do not change based on number.",
    ],
    examples: [
      "She has a beautiful dress.",
      "This is a taller building.",
      "It was the happiest day of my life.",
    ],
    tips: [
      "Use adjectives to make sentences more descriptive.",
      "Comparatives: taller, faster. Superlatives: tallest, fastest."
    ]
  },
  {
    title: "Adverb",
    definition: "An adverb modifies a verb, adjective, or another adverb, often describing how, when, where, or to what extent.",
    rules: [
      "Adverbs can describe verbs, adjectives, or other adverbs.",
      "Many adverbs end in -ly (quickly, slowly).",
      "Some adverbs do not end in -ly (very, well, often)."
    ],
    examples: [
      "She sings beautifully.",
      "He runs very fast.",
      "They arrived early."
    ],
    tips: [
      "Ask: How? When? Where? To what extent? → helps find the adverb."
    ]
  },
  {
    title: "Pronoun",
    definition: "A pronoun replaces a noun in a sentence to avoid repetition.",
    rules: [
      "Common pronouns: he, she, it, they, we, I, you.",
      "Pronouns must agree with the noun in number and gender.",
      "Pronouns can be subject, object, or possessive."
    ],
    examples: [
      "Rahul is a student. He studies hard.",
      "This is my book. Can you give it to me?",
      "They are playing football in the park."
    ],
    tips: [
      "Use pronouns to make sentences shorter and smoother."
    ]
  },
  {
    title: "Preposition",
    definition: "A preposition shows the relationship between a noun (or pronoun) and another word in the sentence.",
    rules: [
      "Common prepositions: in, on, at, under, above, between, with.",
      "Prepositions usually come before a noun or pronoun.",
      "They indicate place, time, direction, cause, manner, etc."
    ],
    examples: [
      "The book is on the table.",
      "She arrived at 5 PM.",
      "He walked with his friend."
    ],
    tips: [
      "Remember: Prepositions are always followed by nouns or pronouns."
    ]
  },
  {
    title: "Conjunction",
    definition: "A conjunction connects words, phrases, or clauses.",
    rules: [
      "Common conjunctions: and, but, or, so, yet, for, nor.",
      "Use conjunctions to join similar parts of a sentence.",
      "Avoid overusing conjunctions in a single sentence."
    ],
    examples: [
      "I like tea and coffee.",
      "She is tired but happy.",
      "Do you want pizza or pasta?"
    ],
    tips: [
      "FANBOYS = For, And, Nor, But, Or, Yet, So (common conjunctions)."
    ]
  },
  {
    title: "Interjection",
    definition: "An interjection expresses emotion or exclamation, often standing alone.",
    rules: [
      "Interjections are often followed by an exclamation mark.",
      "They do not have a grammatical relationship with other words.",
      "Use sparingly in formal writing."
    ],
    examples: [
      "Wow! That was amazing.",
      "Ouch! That hurts.",
      "Hurray! We won the game."
    ],
    tips: [
      "Interjections express feelings: surprise, pain, joy, or anger."
    ]
  }
];

const Grammar = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-4">
          Grammar Basics
        </h2>

        {/* Definition of Grammar */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            What is Grammar?
          </h3>
          <p className="text-gray-700 mb-2">
            Grammar is the set of rules that explain how words are used to form sentences. 
            Learning grammar helps you communicate clearly and correctly in English.
          </p>
          <p className="text-gray-700">
            This section will help you understand key parts of speech, their rules, and examples to improve your writing and speaking skills.
          </p>
        </div>

        {/* Grammar Topics */}
        <div className="space-y-6">
          {grammarTopics.map((topic, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transition"
            >
              {/* Topic Title */}
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full text-left px-6 py-4 flex justify-between items-center bg-blue-600 text-white"
              >
                <span className="text-xl font-semibold">{topic.title}</span>
                <span className="text-2xl">{openIndex === index ? "−" : "+"}</span>
              </button>

              {/* Topic Content */}
              {openIndex === index && (
                <div className="p-6 space-y-4">
                  <p className="text-gray-700">
                    <span className="font-semibold">Definition:</span> {topic.definition}
                  </p>

                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Rules:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {topic.rules.map((rule, i) => (
                        <li key={i}>{rule}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Examples:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 italic">
                      {topic.examples.map((example, i) => (
                        <li key={i}>"{example}"</li>
                      ))}
                    </ul>
                  </div>

                  {topic.tips && (
                    <div>
                      <h4 className="font-semibold text-blue-600 mb-2">Tips:</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {topic.tips.map((tip, i) => (
                          <li key={i}>{tip}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Grammar;