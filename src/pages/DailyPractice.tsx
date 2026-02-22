import { useState ,useEffect } from "react";

interface Word {
  word: string;
  meaning: string;
  example: string;
}

interface Quiz {
  question: string;
  answer: string;
}

// 10 words for Word of the Day
const wordsOfTheDay: Word[] = [
  { word: "Confident", meaning: "Feeling sure about yourself and your abilities.", example: "She is confident about her English speaking skills." },
  { word: "Curious", meaning: "Eager to learn or know something.", example: "He is curious about new technologies." },
  { word: "Determined", meaning: "Having made a firm decision.", example: "She is determined to succeed." },
  { word: "Patient", meaning: "Able to wait calmly without frustration.", example: "He is patient with beginners." },
  { word: "Creative", meaning: "Using imagination to produce original ideas.", example: "She is very creative in her art." },
  { word: "Reliable", meaning: "Someone you can trust.", example: "He is reliable and always keeps his promises." },
  { word: "Motivated", meaning: "Eager to do something.", example: "She is motivated to learn English." },
  { word: "Polite", meaning: "Showing good manners.", example: "He is polite to everyone he meets." },
  { word: "Ambitious", meaning: "Having a strong desire to succeed.", example: "She is ambitious and wants to achieve a lot." },
  { word: "Friendly", meaning: "Kind and pleasant to others.", example: "He is friendly and easy to talk to." },
];

// 10 mini quiz questions
const dailyQuizzes: Quiz[] = [
  { question: "Fill in the blank: She ____ to school every day.", answer: "goes" },
  { question: "Fill in the blank: He ____ coffee every morning.", answer: "drinks" },
  { question: "Fill in the blank: They ____ football on weekends.", answer: "play" },
  { question: "Fill in the blank: I ____ English every day.", answer: "practice" },
  { question: "Fill in the blank: She ____ very hard for exams.", answer: "studies" },
  { question: "Fill in the blank: We ____ movies on Friday nights.", answer: "watch" },
  { question: "Fill in the blank: He ____ breakfast at 7 am.", answer: "eats" },
  { question: "Fill in the blank: They ____ books at the library.", answer: "read" },
  { question: "Fill in the blank: I ____ to the gym every morning.", answer: "go" },
  { question: "Fill in the blank: She ____ a new dress for the party.", answer: "buys" },
];

const DailyPractice: React.FC = () => {
  const [quizAnswer, setQuizAnswer] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [nextAvailable, setNextAvailable] = useState<number>(0); // timestamp of next quiz
const [countdown, setCountdown] = useState<string>(""); // for showing countdown

  // Pick today's word and quiz based on the current date
  const today = new Date();
  const wordIndex = today.getDate() % wordsOfTheDay.length;
  const quizIndex = today.getDate() % dailyQuizzes.length;
  const todayWord = wordsOfTheDay[wordIndex];
  const todayQuiz = dailyQuizzes[quizIndex];

  useEffect(() => {
  const saved = localStorage.getItem("nextQuizTime");
  if (saved) setNextAvailable(Number(saved));
}, []);

useEffect(() => {
  const interval = setInterval(() => {
    const now = Date.now();
    if (nextAvailable > now) {
      const diff = nextAvailable - now;
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setCountdown(`${hours}h ${minutes}m ${seconds}s`);
    } else {
      setCountdown("");
    }
  }, 1000);

  return () => clearInterval(interval);
}, [nextAvailable]);

  const checkAnswer = (): void => {
  if (Date.now() < nextAvailable) {
    alert(`⏳ Next quiz will be available in ${countdown}`);
    return; // prevent checking quiz
  }

  if (quizAnswer.trim().toLowerCase() === todayQuiz.answer.toLowerCase()) {
    setResult("✅ Correct! Well done.");
  } else {
    setResult(`❌ Wrong. Correct answer is '${todayQuiz.answer}'.`);
  }

  // Set next quiz available in 4 hours
  const nextTime = Date.now() + 4 * 60 * 60 * 1000; // 4 hours
  setNextAvailable(nextTime);
  localStorage.setItem("nextQuizTime", nextTime.toString());

  setQuizAnswer(""); // clear input
};
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-4xl mx-auto space-y-10">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-blue-600">
            Daily English Practice
          </h1>
          <p className="text-gray-600 mt-2">
            Improve your English step by step every day 🚀
          </p>
        </div>

        {/* Word of the Day */}
        <section className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-semibold text-yellow-500 mb-2">
            🌟 Word of the Day
          </h2>
          <p className="text-lg font-bold">{todayWord.word}</p>
          <p className="text-gray-600">{todayWord.meaning}</p>
          <p className="mt-2 italic">{todayWord.example}</p>
        </section>

        {/* Vocabulary */}
        <section className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">
            📘 5 Vocabulary Words
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li>Improve – To become better</li>
            <li>Practice – To do something repeatedly</li>
            <li>Fluent – Able to speak smoothly</li>
            <li>Effort – Hard work</li>
            <li>Success – Achievement</li>
          </ul>
        </section>

        {/* Grammar */}
        <section className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-semibold text-green-600 mb-2">
            ✏️ Grammar Rule
          </h2>
          <p className="font-medium">Simple Present Tense</p>
          <p className="text-gray-600 mt-2">
            We use Simple Present to talk about daily habits.
          </p>
          <p className="mt-2 italic">
            Example: She goes to school every day.
          </p>
        </section>

        {/* Practice Sentences */}
        <section className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-semibold text-purple-600 mb-4">
            🗣 Practice Sentences
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li>I practice English daily.</li>
            <li>He works very hard.</li>
            <li>They speak confidently.</li>
            <li>She studies every evening.</li>
          </ul>
        </section>

        {/* Mini Quiz */}
        <section className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-semibold text-red-500 mb-4">
            🧠 Mini Quiz
          </h2>
          <p className="mb-3">{todayQuiz.question}</p>

          <input
  type="text"
  value={quizAnswer}
  onChange={(e) => setQuizAnswer(e.target.value)}
  placeholder="Type your answer"
  disabled={nextAvailable > Date.now()} // disable if waiting
/>

<button
  onClick={checkAnswer}
  disabled={nextAvailable > Date.now()}
  className={`mt-3 px-4 py-2 rounded text-white transition ${
    nextAvailable > Date.now()
      ? "bg-gray-400 cursor-not-allowed"
      : "bg-blue-600 hover:bg-blue-700"
  }`}
>
  Check Answer
</button>

{nextAvailable > Date.now() && (
  <p className="text-green-600 font-medium mb-3">
    ⏳ Next quiz will be available in {countdown}
  </p>
)}

          {result && <p className="mt-3 font-medium">{result}</p>}
        </section>

        {/* Motivation */}
        <div className="text-center text-gray-600 font-medium">
          💪 Practice daily and you will become fluent!
        </div>

      </div>
    </div>
  );
};

export default DailyPractice;