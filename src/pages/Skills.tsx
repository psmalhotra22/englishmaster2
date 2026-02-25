"use client";
import { motion } from "framer-motion";

interface Skill {
  title: string;
  gradient: string;
  overview: string;
  dailyRoutine: string[];
  weeklyStrategy: string[];
  masteryTips: string[];
  result: string;
}

const skills: Skill[] = [
  {
    title: "📖 Reading Skill Mastery",
    gradient: "from-blue-600 to-indigo-700",
    overview:
      "Reading strengthens vocabulary, grammar understanding, sentence structure, and comprehension ability. Strong readers naturally improve in writing and speaking.",
    dailyRoutine: [
      "Read for 20 minutes daily (start with simple content).",
      "Highlight 5–10 new words and use them in sentences.",
      "Read aloud to improve pronunciation.",
      "Write a short summary after reading.",
    ],
    weeklyStrategy: [
      "Increase reading difficulty gradually.",
      "Track reading speed and comprehension.",
      "Review vocabulary weekly.",
    ],
    masteryTips: [
      "Practice skimming (main idea).",
      "Practice scanning (specific information).",
      "Read newspapers, blogs, and short stories.",
    ],
    result:
      "Within 60 days, reading speed increases, vocabulary improves, and comprehension becomes stronger.",
  },
  {
    title: "✍️ Writing Skill Mastery",
    gradient: "from-green-600 to-emerald-700",
    overview:
      "Writing improves grammar accuracy, clarity of thought, and professional communication skills. It is essential for exams, emails, and career growth.",
    dailyRoutine: [
      "Write a daily journal (10 sentences).",
      "Practice one paragraph writing daily.",
      "Focus on correct sentence structure.",
      "Correct and rewrite mistakes.",
    ],
    weeklyStrategy: [
      "Write one essay every week.",
      "Practice formal email writing.",
      "Review previous mistakes and improve.",
    ],
    masteryTips: [
      "Use linking words (however, therefore, moreover).",
      "Keep sentences clear and simple.",
      "Read your writing aloud to improve flow.",
    ],
    result:
      "After consistent practice, grammar accuracy and writing confidence improve significantly.",
  },
  {
    title: "🎧 Listening Skill Mastery",
    gradient: "from-purple-600 to-pink-700",
    overview:
      "Listening builds natural pronunciation, accent understanding, and real-world communication ability.",
    dailyRoutine: [
      "Listen to English audio for 20 minutes daily.",
      "Watch videos with subtitles first.",
      "Repeat sentences after the speaker.",
      "Note down useful phrases.",
    ],
    weeklyStrategy: [
      "Practice listening without subtitles.",
      "Try different accents (British/American).",
      "Test understanding with short quizzes.",
    ],
    masteryTips: [
      "Practice shadowing technique.",
      "Focus on meaning instead of every word.",
      "Replay difficult parts.",
    ],
    result:
      "You will understand English faster and speak more naturally within 2–3 months.",
  },
  {
    title: "🗣 Speaking Skill Mastery",
    gradient: "from-orange-600 to-red-600",
    overview:
      "Speaking builds fluency, confidence, and real-world communication skills. It is the key to interviews and professional success.",
    dailyRoutine: [
      "Speak for 10–15 minutes daily.",
      "Practice self-introduction.",
      "Describe your daily activities in English.",
      "Record yourself and review pronunciation.",
    ],
    weeklyStrategy: [
      "Participate in group discussions.",
      "Practice mock interviews.",
      "Speak on one topic for 2–3 minutes.",
    ],
    masteryTips: [
      "Think in English.",
      "Do not fear grammar mistakes.",
      "Focus on clarity over perfection.",
    ],
    result:
      "After 90 days of consistent practice, fluency and confidence improve dramatically.",
  },
];

export default function Skills() {
  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Complete English Skill Development
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Master Reading, Writing, Listening, and Speaking with a structured professional roadmap.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 overflow-hidden flex flex-col"
          >
            <div className={`bg-gradient-to-r ${skill.gradient} p-6 text-white`}>
              <h3 className="text-xl font-semibold">{skill.title}</h3>
            </div>

            <div className="p-6 flex flex-col gap-6 text-sm text-gray-700">
              <p>{skill.overview}</p>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">📅 Daily Routine</h4>
                <ul className="space-y-2">
                  {skill.dailyRoutine.map((item, i) => (
                    <li key={i}>✔ {item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">📈 Weekly Strategy</h4>
                <ul className="space-y-2">
                  {skill.weeklyStrategy.map((item, i) => (
                    <li key={i}>➜ {item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">🚀 Mastery Tips</h4>
                <ul className="space-y-2">
                  {skill.masteryTips.map((item, i) => (
                    <li key={i}>⭐ {item}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                🎯 <strong>Expected Result:</strong> {skill.result}
              </div>

              <button className="mt-4 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                Start Practicing
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center mt-20">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          🏆 Professional Success Formula
        </h3>
        <p className="text-gray-600 text-lg">
          Practice 45–60 minutes daily (15 minutes per skill). Stay consistent for 90 days
          to see major improvement in fluency, confidence, and communication.
        </p>
      </div>
    </section>
  );
}