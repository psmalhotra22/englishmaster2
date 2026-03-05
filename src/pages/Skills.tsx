"use client";
import { motion } from "framer-motion";
import {
  BookOpen,
  PenTool,
  Headphones,
  Mic,
  Calendar,
  TrendingUp,
  Rocket,
  Wrench,
  AlertTriangle,
  Target,
  CheckCircle,
  ArrowRight,
  Star,
  Trophy,
} from "lucide-react";

interface Skill {
  title: string;
  level: string;
  duration: string;
  gradient: string;
  overview: string;
  dailyRoutine: string[];
  weeklyStrategy: string[];
  masteryTips: string[];
  tools: string[];
  commonMistakes: string[];
  result: string;
}

const skills: Skill[] = [
  {
    title: "Reading Skill Mastery",
    level: "Beginner to Advanced",
    duration: "60 Days Plan",
    gradient: "from-blue-600 to-indigo-700",
    overview:
      "Reading enhances vocabulary acquisition, grammatical awareness, contextual understanding, and analytical thinking ability.",
    dailyRoutine: [
      "Read 20–30 minutes daily.",
      "Extract 5–10 new words.",
      "Practice reading aloud.",
      "Summarize key ideas.",
    ],
    weeklyStrategy: [
      "Increase text complexity.",
      "Measure reading speed.",
      "Review vocabulary.",
    ],
    masteryTips: [
      "Use skimming.",
      "Use scanning.",
      "Diversify sources.",
    ],
    tools: ["Oxford Learner’s Dictionary", "BBC News", "Medium Articles"],
    commonMistakes: [
      "Translating every word.",
      "Ignoring context.",
      "Reading without summarizing.",
    ],
    result:
      "Improved reading speed and comprehension within 60 days.",
  },
  {
    title: "Writing Skill Mastery",
    level: "Beginner to Professional",
    duration: "75 Days Plan",
    gradient: "from-green-600 to-emerald-700",
    overview:
      "Writing improves grammar accuracy and structured communication.",
    dailyRoutine: [
      "Write 10–15 sentences daily.",
      "Practice structured paragraphs.",
      "Focus on grammar.",
      "Rewrite mistakes.",
    ],
    weeklyStrategy: [
      "Write one essay weekly.",
      "Practice emails.",
      "Review mistakes.",
    ],
    masteryTips: [
      "Use linking words.",
      "Keep sentences clear.",
      "Read aloud.",
    ],
    tools: ["Grammarly", "Google Docs", "Hemingway Editor"],
    commonMistakes: [
      "Long unclear sentences.",
      "Ignoring corrections.",
      "Not proofreading.",
    ],
    result:
      "Improved writing clarity and confidence.",
  },
  {
    title: "Listening Skill Mastery",
    level: "Beginner to Fluent",
    duration: "60–90 Days Plan",
    gradient: "from-purple-600 to-pink-700",
    overview:
      "Listening builds accent familiarity and real-world communication ability.",
    dailyRoutine: [
      "Listen 20 minutes daily.",
      "Watch with subtitles.",
      "Repeat sentences.",
      "Note useful phrases.",
    ],
    weeklyStrategy: [
      "Practice without subtitles.",
      "Try different accents.",
      "Test comprehension.",
    ],
    masteryTips: [
      "Use shadowing.",
      "Focus on meaning.",
      "Replay difficult parts.",
    ],
    tools: ["YouTube", "Spotify Podcasts", "TED Talks"],
    commonMistakes: [
      "Too dependent on subtitles.",
      "Trying to understand every word.",
      "Not consistent.",
    ],
    result:
      "Faster comprehension and natural speaking ability.",
  },
  {
    title: "Speaking Skill Mastery",
    level: "Intermediate to Advanced",
    duration: "90 Days Plan",
    gradient: "from-orange-600 to-red-600",
    overview:
      "Speaking builds fluency and interview-ready confidence.",
    dailyRoutine: [
      "Speak 15 minutes daily.",
      "Practice introduction.",
      "Describe daily activities.",
      "Record yourself.",
    ],
    weeklyStrategy: [
      "Participate in discussions.",
      "Practice mock interviews.",
      "Speak on one topic.",
    ],
    masteryTips: [
      "Think in English.",
      "Don’t fear mistakes.",
      "Focus on clarity.",
    ],
    tools: ["Voice Recorder", "Zoom Practice", "Interview Questions"],
    commonMistakes: [
      "Fear of mistakes.",
      "Overthinking grammar.",
      "Not consistent.",
    ],
    result:
      "Improved fluency and speaking confidence.",
  },
];

const skillIcons = [BookOpen, PenTool, Headphones, Mic];

export default function Skills() {
  return (
    <section className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Complete English Skill Development Framework
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          A structured roadmap to master Reading, Writing, Listening, and Speaking.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {skills.map((skill, index) => {
          const SkillIcon = skillIcons[index];

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 overflow-hidden flex flex-col"
            >
              <div className={`bg-gradient-to-r ${skill.gradient} p-6 text-white`}>
                <div className="flex items-center gap-3">
                  <SkillIcon className="w-6 h-6" />
                  <h3 className="text-xl font-semibold">{skill.title}</h3>
                </div>
                <div className="flex justify-between text-xs mt-2 ">
                  <span>Level: {skill.level}</span>
                  <span>Duration: {skill.duration}</span>
                </div>
              </div>

              <div className="p-6 flex flex-col gap-6 text-sm text-gray-700">

                <p>{skill.overview}</p>

                {/* Daily */}
                <div>
                  <h4 className="flex items-center gap-2 font-semibold mb-2">
                    <Calendar className="w-4 h-4" />
                    Daily Routine
                  </h4>
                  <ul className="space-y-2">
                    {skill.dailyRoutine.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <CheckCircle className="w-4 h-4 mt-1 text-green-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Weekly */}
                <div>
                  <h4 className="flex items-center gap-2 font-semibold mb-2">
                    <TrendingUp className="w-4 h-4" />
                    Weekly Strategy
                  </h4>
                  <ul className="space-y-2">
                    {skill.weeklyStrategy.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <ArrowRight className="w-4 h-4 mt-1 text-blue-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tips */}
                <div>
                  <h4 className="flex items-center gap-2 font-semibold mb-2">
                    <Rocket className="w-4 h-4" />
                    Mastery Tips
                  </h4>
                  <ul className="space-y-2">
                    {skill.masteryTips.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <Star className="w-4 h-4 mt-1 text-yellow-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools */}
                <div>
                  <h4 className="flex items-center gap-2 font-semibold mb-2">
                    <Wrench className="w-4 h-4" />
                    Recommended Tools
                  </h4>
                  <ul className="space-y-1">
                    {skill.tools.map((tool, i) => (
                      <li key={i}>• {tool}</li>
                    ))}
                  </ul>
                </div>

                {/* Mistakes */}
                <div>
                  <h4 className="flex items-center gap-2 font-semibold mb-2">
                    <AlertTriangle className="w-4 h-4 text-red-500" />
                    Common Mistakes
                  </h4>
                  <ul className="space-y-1">
                    {skill.commonMistakes.map((mistake, i) => (
                      <li key={i} className="flex gap-2">
                        <AlertTriangle className="w-4 h-4 mt-1 text-red-500" />
                        {mistake}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Result */}
                <div className="bg-gray-100 p-4 rounded-lg flex gap-2 items-start">
                  <Target className="w-5 h-5 text-black mt-1" />
                  <div>
                    <strong>Expected Result:</strong> {skill.result}
                  </div>
                </div>

                <button className="mt-6 bg-gradient-to-r from-black to-gray-800 text-white py-3 rounded-xl font-semibold tracking-wide hover:scale-105 transition duration-300 shadow-lg">
                  Start Structured Practice
                </button>

              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="max-w-4xl mx-auto text-center mt-24 border-t pt-12">
        <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center justify-center gap-2">
          <Trophy className="w-6 h-6 text-yellow-500" />
          90-Day Professional Fluency Framework
        </h3>
        <p className="text-gray-600 text-lg leading-relaxed">
          Commit 45–60 minutes daily. Consistency over 90 days builds structured fluency and confidence.
        </p>
      </div>
    </section>
  );
}