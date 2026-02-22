import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";

interface Question {
  question: string;
  options: string[];
  answer: string;
}

const questionBank: Record<string, Question[]> = {
  easy: [
    { question: "Synonym of Brave?", options: ["Coward", "Courageous", "Lazy"], answer: "Courageous" },
    { question: "Plural of Child?", options: ["Childs", "Children", "Childes"], answer: "Children" },
    { question: "Opposite of Hot?", options: ["Cold", "Warm", "Boiling"], answer: "Cold" },
    { question: "Synonym of Big?", options: ["Large", "Small", "Tiny"], answer: "Large" },
    { question: "Noun is?", options: ["Action word", "Naming word", "Describing word"], answer: "Naming word" },
  ],
  medium: [
    { question: "Antonym of Happy?", options: ["Sad", "Joyful", "Excited"], answer: "Sad" },
    { question: "Which one is a verb?", options: ["Run", "Chair", "Red"], answer: "Run" },
    { question: "Synonym of Fast?", options: ["Quick", "Slow", "Lazy"], answer: "Quick" },
    { question: "Antonym of Empty?", options: ["Full", "Open", "Blank"], answer: "Full" },
    { question: "Which is an adverb?", options: ["Quickly", "Dog", "Red"], answer: "Quickly" },
  ],
  hard: [
    { question: "Identify the adjective: 'The quick brown fox'", options: ["quick", "fox", "brown"], answer: "quick" },
    { question: "Synonym of 'Exquisite'?", options: ["Beautiful", "Ugly", "Common"], answer: "Beautiful" },
    { question: "Choose the correct past tense: 'Go'", options: ["Goed", "Went", "Gone"], answer: "Went" },
    { question: "Which is a preposition?", options: ["Under", "Apple", "Run"], answer: "Under" },
    { question: "Find the antonym of 'Generous'", options: ["Kind", "Stingy", "Nice"], answer: "Stingy" },
  ],
};

const levels = ["easy", "medium", "hard"];

const Quiz = () => {
  const [level, setLevel] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [selected, setSelected] = useState<string>("");
  const [finished, setFinished] = useState<boolean>(false);
  const [showNextLevelAlert, setShowNextLevelAlert] = useState(false);

  const currentQuestions = level ? questionBank[level] : [];

  const handleAnswer = (option: string) => {
    if (!level) return;
    setSelected(option);

    setTimeout(() => {
      if (option === currentQuestions[currentIndex].answer) setScore(score + 1);

      const next = currentIndex + 1;
      if (next < currentQuestions.length) {
        setCurrentIndex(next);
        setSelected("");
      } else {
        setFinished(true);
        if (score + 1 === currentQuestions.length) {
          setShowNextLevelAlert(true);
        }
      }
    }, 400);
  };

  const restartLevel = () => {
    setScore(0);
    setCurrentIndex(0);
    setSelected("");
    setFinished(false);
    setShowNextLevelAlert(false);
  };

  const nextLevel = () => {
    if (!level) return;
    const currentIdx = levels.indexOf(level);
    const nextIdx = currentIdx + 1;
    if (nextIdx < levels.length) {
      setLevel(levels[nextIdx]);
      restartLevel();
    } else {
      setLevel(null);
      alert("🎉 You completed all levels!");
    }
  };

  // Safe handling of index and next level
  const currentIdx = level ? levels.indexOf(level) : -1;
  const hasNext = currentIdx !== -1 && currentIdx + 1 < levels.length;
  const progress = ((currentIndex + 1) / (currentQuestions.length || 1)) * 100;

  return (
    <div className="min-h-screen flex flex-col items-center justify-start px-4 pt-24 bg-gray-50 ">

      {/* Back Arrow */}
      {/* <motion.button
        onClick={() => {
          if (!level) {
            window.history.back();
          } else {
            setLevel(null);
          }
        }}
        whileHover={{ scale: 1.15, rotate: -10 }}
        whileTap={{ scale: 0.95, rotate: 0 }}
        className="fixed top-24 left-4 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition flex items-center justify-center"
        title="Back"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </motion.button> */}

      {/* Level Selection */}
      {!level ? (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 w-full">
          <h1 className="text-4xl font-bold mb-10 text-gray-800 flex items-center gap-2">
            <span>📝</span> Choose Level
          </h1>
          <div className="flex flex-col gap-4">
            {levels.map((lvl) => (
              <motion.button
                key={lvl}
                onClick={() => setLevel(lvl)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
              >
                {lvl.charAt(0).toUpperCase() + lvl.slice(1)}
              </motion.button>
            ))}
          </div>
        </div>
      ) : (
        <>
          {!finished ? (
            <>
              <h2 className="text-3xl font-semibold mb-6 text-gray-800">
                Level: {level ? level.charAt(0).toUpperCase() + level.slice(1) : ""}
              </h2>

              {/* Progress Bar */}
              <div className="w-full max-w-md h-3 bg-gray-300 rounded-full mb-6">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5 }}
                  className="h-3 bg-gradient-to-r from-blue-500 to-green-400 rounded-full"
                />
              </div>

              {/* Score & Question Count */}
              <div className="w-full max-w-md flex justify-between mb-4">
                <p className="font-medium text-gray-700">Score: {score}</p>
                <p className="font-medium text-gray-700">
                  Question: {currentIndex + 1} / {currentQuestions.length}
                </p>
              </div>

              {/* Question Card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full max-w-md bg-white p-6 rounded-xl shadow-md mb-4"
                >
                  <p className="text-lg font-medium text-gray-800 mb-4">{currentQuestions[currentIndex].question}</p>
                  <div className="flex flex-col gap-3">
                    {currentQuestions[currentIndex].options.map((option, i) => {
                      let bg = "bg-gray-100 hover:bg-blue-500 hover:text-white text-gray-800";
                      if (selected) {
                        if (option === currentQuestions[currentIndex].answer) bg = "bg-green-500 text-white";
                        else if (option === selected) bg = "bg-red-500 text-white";
                        else bg = "bg-gray-200 text-gray-800";
                      }
                      return (
                        <motion.button
                          key={i}
                          disabled={!!selected}
                          onClick={() => handleAnswer(option)}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          className={`${bg} py-2 rounded-lg font-medium transition-shadow shadow-sm`}
                        >
                          {option}
                        </motion.button>
                      );
                    })}
                  </div>
                </motion.div>
              </AnimatePresence>
            </>
          ) : (
            <>
              {score === currentQuestions.length && <Confetti recycle={false} numberOfPieces={300} />}
              <div className="mt-16 flex flex-col items-center justify-center">
                <h2 className="text-4xl font-bold mb-4 text-gray-800">🎉 Level Complete!</h2>
                <motion.p
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 150 }}
                  className="text-xl mb-4 text-gray-700 font-semibold"
                >
                  Your Score: {score} / {currentQuestions.length}
                </motion.p>
                <p className="mb-6 text-gray-600">
                  {score === currentQuestions.length ? "Perfect Score! 🏆" : "Good job! Keep practicing!"}
                </p>

                {showNextLevelAlert && hasNext && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-blue-100 px-6 py-3 rounded-lg shadow-md mb-6 text-gray-800 font-semibold flex items-center gap-4"
                  >
                    🎯 Next level unlocked!{" "}
                    <button
                      onClick={() => {
                        setShowNextLevelAlert(false);
                        nextLevel();
                      }}
                      className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition"
                    >
                      Go
                    </button>
                  </motion.div>
                )}

                <div className="flex gap-4">
                  <motion.button
                    onClick={restartLevel}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-yellow-500 transition"
                  >
                    Retry Level
                  </motion.button>

                  {!showNextLevelAlert && (
                    <motion.button
                      onClick={() => setLevel(null)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gray-200 text-gray-800 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-300 transition"
                    >
                      Choose Level
                    </motion.button>
                  )}
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Quiz;