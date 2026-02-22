import { useState } from "react";

type TenseTopic = {
  title: string;
  definition: string;
  rules: string[];
  examples: string[];
  tips?: string[];
  notes?: string[];
};

const tenseTopics: TenseTopic[] = [
  {
    title: "Present Simple",
    definition: "Use Present Simple to talk about habits, facts, repeated actions, or things that are always true.",
    rules: [
      "Use the base form of the verb for I/you/we/they.",
      "Add 's' or 'es' for he/she/it (third person singular).",
      "Use time expressions like always, usually, sometimes, never, every day."
    ],
    examples: [
      "I drink milk every morning.",
      "She likes chocolate.",
      "The sun rises in the east."
    ],
    tips: [
      "Think: 'What happens regularly?' → use Present Simple.",
      "Do not confuse with Present Continuous (happening right now)."
    ],
    notes: [
      "Negative form: I do not (don't) play, He does not (doesn't) play.",
      "Question form: Do you play? Does he play?"
    ]
  },
  {
    title: "Present Continuous",
    definition: "Use Present Continuous to describe actions happening now, or temporary situations.",
    rules: [
      "Use 'am/is/are + verb-ing'.",
      "Use for actions happening at the moment of speaking.",
      "Do not use with stative verbs like know, love, want, belong."
    ],
    examples: [
      "I am reading a book now.",
      "They are playing football in the park.",
      "She is studying for her exams."
    ],
    tips: [
      "Look for 'now', 'at the moment', 'currently'.",
      "Shows action in progress."
    ],
    notes: [
      "Negative: I am not playing, He is not working.",
      "Question: Are you playing? Is she studying?"
    ]
  },
  {
    title: "Present Perfect",
    definition: "Use Present Perfect to talk about actions that happened at an unspecified time or have an effect on the present.",
    rules: [
      "Use 'have/has + past participle'.",
      "Use 'just', 'already', 'yet', 'ever', 'never'.",
      "Do not use exact time expressions like yesterday, in 2010."
    ],
    examples: [
      "I have finished my homework.",
      "She has visited London.",
      "They have just arrived."
    ],
    tips: [
      "Focus on the result or experience, not the exact time.",
      "Common signal words: ever, never, already, yet, so far."
    ],
    notes: [
      "Negative: I have not (haven't) seen it.",
      "Question: Have you seen it? Has she visited?"
    ]
  },
  {
    title: "Present Perfect Continuous",
    definition: "Use this tense to talk about actions that started in the past and are still continuing or were recently completed.",
    rules: [
      "Use 'have/has been + verb-ing'.",
      "Emphasizes duration of the activity.",
      "Often used with 'for' or 'since'."
    ],
    examples: [
      "I have been reading for two hours.",
      "She has been working here since 2015.",
      "They have been waiting for the bus."
    ],
    tips: [
      "Think: 'How long has this action been happening?'",
      "Focus on the duration, not just the action."
    ],
    notes: [
      "Negative: I have not been studying.",
      "Question: Have you been studying?"
    ]
  },
  {
    title: "Past Simple",
    definition: "Use Past Simple to describe actions completed in the past at a specific time.",
    rules: [
      "Use the past form of the verb (regular verbs: +ed, irregular verbs: changes form).",
      "Use time expressions like yesterday, last week, in 2010."
    ],
    examples: [
      "She visited Paris last year.",
      "I watched a movie yesterday.",
      "They played football last weekend."
    ],
    tips: [
      "Think: 'What happened and finished in the past?'"
    ],
    notes: [
      "Negative: I did not (didn't) go.",
      "Question: Did you go?"
    ]
  },
  {
    title: "Past Continuous",
    definition: "Use Past Continuous for actions that were ongoing at a specific moment in the past.",
    rules: [
      "Use 'was/were + verb-ing'.",
      "Use often with 'while' or 'when' to show interrupted actions."
    ],
    examples: [
      "I was reading when she called.",
      "They were playing cricket at 5 PM.",
      "She was studying all night."
    ],
    tips: [
      "Background action in the past."
    ],
    notes: [
      "Negative: I was not sleeping.",
      "Question: Were you sleeping?"
    ]
  },
  {
    title: "Past Perfect",
    definition: "Use Past Perfect for actions that were completed before another past action.",
    rules: [
      "Use 'had + past participle'.",
      "Use with 'before', 'after', 'by the time'."
    ],
    examples: [
      "I had finished my homework before dinner.",
      "She had left when I arrived.",
      "They had already eaten when we came."
    ],
    tips: [
      "Think: 'Which action happened first?'"
    ],
    notes: [
      "Negative: I had not (hadn't) seen it.",
      "Question: Had you seen it?"
    ]
  },
  {
    title: "Past Perfect Continuous",
    definition: "Use this tense to show an action that was ongoing before another past action.",
    rules: [
      "Use 'had been + verb-ing'.",
      "Emphasizes the duration of the past action."
    ],
    examples: [
      "I had been studying for two hours before he came.",
      "They had been playing football all afternoon.",
      "She had been waiting for an hour when the bus arrived."
    ],
    tips: [
      "Focus on how long the past action continued."
    ],
    notes: [
      "Negative: I had not been working.",
      "Question: Had you been working?"
    ]
  },
  {
    title: "Future Simple",
    definition: "Use Future Simple to talk about actions that will happen in the future.",
    rules: [
      "Use 'will + base verb'.",
      "Use 'shall' with I/we in formal English."
    ],
    examples: [
      "I will call you tomorrow.",
      "She will join the meeting later.",
      "They will travel next week."
    ],
    tips: [
      "Also used for promises, offers, predictions."
    ],
    notes: [
      "Negative: I will not (won't) go.",
      "Question: Will you go?"
    ]
  },
  {
    title: "Future Continuous",
    definition: "Use Future Continuous for actions that will be ongoing at a specific time in the future.",
    rules: [
      "Use 'will be + verb-ing'.",
      "Can describe planned future events or background activities."
    ],
    examples: [
      "I will be working at 10 AM tomorrow.",
      "They will be traveling during the holidays.",
      "She will be studying when you arrive."
    ],
    tips: [
      "Often used with 'at this time tomorrow', 'next week'."
    ],
    notes: [
      "Negative: I will not be going.",
      "Question: Will you be going?"
    ]
  },
  {
    title: "Future Perfect",
    definition: "Use Future Perfect for actions that will be completed before a certain future time.",
    rules: [
      "Use 'will have + past participle'.",
      "Shows that the action finishes before another future event."
    ],
    examples: [
      "I will have finished my work by 5 PM.",
      "She will have left by the time you arrive.",
      "They will have completed the project next week."
    ],
    tips: [
      "Focus on completion before a future point."
    ],
    notes: [
      "Negative: I will not have finished.",
      "Question: Will you have finished?"
    ]
  },
  {
    title: "Future Perfect Continuous",
    definition: "Use Future Perfect Continuous for actions that will continue up to a certain future point.",
    rules: [
      "Use 'will have been + verb-ing'.",
      "Emphasizes the duration before a future time."
    ],
    examples: [
      "By next year, I will have been teaching for 10 years.",
      "They will have been working for five hours by noon.",
      "She will have been studying all day before the exam."
    ],
    tips: [
      "Often used with 'for' and 'by' to show duration."
    ],
    notes: [
      "Negative: I will not have been working.",
      "Question: Will you have been working?"
    ]
  }
];

const Tenses = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-4">
          English Tenses – Easy Learning
        </h2>

        <div className="bg-white p-6 rounded-xl shadow-md mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">What are Tenses?</h3>
          <p className="text-gray-700 mb-2">
            Tenses show the time of an action: <strong>Present, Past, or Future</strong>. 
            Knowing tenses helps you write and speak clearly and correctly.
          </p>
          <p className="text-gray-700">
            In the below section explains all tenses with simple rules, examples, tips, and notes to avoid mistakes.
          </p>
        </div>

        <div className="space-y-6">
          {tenseTopics.map((topic, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden transition">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center bg-blue-600 text-white"
              >
                <span className="text-xl font-semibold">{topic.title}</span>
                <span className="text-2xl">{openIndex === index ? "−" : "+"}</span>
              </button>

              {openIndex === index && (
                <div className="p-6 space-y-4">
                  <p className="text-gray-700"><span className="font-semibold">Definition:</span> {topic.definition}</p>

                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Rules:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {topic.rules.map((rule, i) => <li key={i}>{rule}</li>)}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Examples:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 italic">
                      {topic.examples.map((ex, i) => <li key={i}>"{ex}"</li>)}
                    </ul>
                  </div>

                  {topic.tips && (
                    <div>
                      <h4 className="font-semibold text-blue-600 mb-2">Tips:</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {topic.tips.map((tip, i) => <li key={i}>{tip}</li>)}
                      </ul>
                    </div>
                  )}

                  {topic.notes && (
                    <div>
                      <h4 className="font-semibold text-blue-600 mb-2">Notes:</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {topic.notes.map((note, i) => <li key={i}>{note}</li>)}
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

export default Tenses;