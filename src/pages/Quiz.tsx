import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import { Trophy, RotateCcw, ArrowLeft, Target } from "lucide-react";

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
  const currentIdx = level ? levels.indexOf(level) : -1;
  const hasNext = currentIdx !== -1 && currentIdx + 1 < levels.length;
  const progress = ((currentIndex + 1) / (currentQuestions.length || 1)) * 100;

  const handleAnswer = (option: string) => {
    if (!level) return;

    setSelected(option);

    setTimeout(() => {
      const isCorrect = option === currentQuestions[currentIndex].answer;

      if (isCorrect) {
        setScore((prev) => prev + 1);
      }

      const next = currentIndex + 1;

      if (next < currentQuestions.length) {
        setCurrentIndex(next);
        setSelected("");
      } else {
        setFinished(true);
        if (score + (isCorrect ? 1 : 0) === currentQuestions.length) {
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
    const nextIdx = levels.indexOf(level) + 1;
    if (nextIdx < levels.length) {
      setLevel(levels[nextIdx]);
      restartLevel();
    } else {
      setLevel(null);
      alert("🎉 You completed all levels!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start px-4 pt-24 bg-gray-50">

      {/* Back Button */}
      <motion.button
        onClick={() => (level ? setLevel(null) : window.history.back())}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        className="fixed top-24 left-4 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition flex items-center justify-center"
      >
        <ArrowLeft size={22} />
      </motion.button>

      {!level ? (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 w-full">
          <h1 className="text-4xl font-bold mb-10 text-gray-800 flex items-center gap-2">
            📝 Choose Level
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
      ) : !finished ? (
        <>
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">
            Level: {level.charAt(0).toUpperCase() + level.slice(1)}
          </h2>

          <div className="w-full max-w-md h-3 bg-gray-300 rounded-full mb-6">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
              className="h-3 bg-gradient-to-r from-blue-500 to-green-400 rounded-full"
            />
          </div>

          <div className="w-full max-w-md flex justify-between mb-4">
            <p>Score: {score}</p>
            <p>
              Question: {currentIndex + 1} / {currentQuestions.length}
            </p>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-md bg-white p-6 rounded-xl shadow-md"
            >
              <p className="text-lg font-medium mb-4">
                {currentQuestions[currentIndex].question}
              </p>

              <div className="flex flex-col gap-3">
                {currentQuestions[currentIndex].options.map((option, i) => {
                  let bg = "bg-gray-100 hover:bg-blue-500 hover:text-white";

                  if (selected) {
                    if (option === currentQuestions[currentIndex].answer)
                      bg = "bg-green-500 text-white";
                    else if (option === selected)
                      bg = "bg-red-500 text-white";
                    else bg = "bg-gray-200";
                  }

                  return (
                    <motion.button
                      key={i}
                      disabled={!!selected}
                      onClick={() => handleAnswer(option)}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className={`${bg} py-2 rounded-lg font-medium`}
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
          {score === currentQuestions.length && (
            <Confetti recycle={false} numberOfPieces={300} />
          )}

          <div className="mt-16 flex flex-col items-center">
            <h2 className="text-4xl font-bold mb-4 flex items-center gap-2">
              <Trophy className="text-yellow-500" />
              Level Complete!
            </h2>

            <p className="text-xl mb-4">
              Your Score: {score} / {currentQuestions.length}
            </p>

            {showNextLevelAlert && hasNext && (
              <div className="bg-blue-100 px-6 py-3 rounded-lg shadow-md mb-6 flex items-center gap-2">
                <Target size={18} />
                Next level unlocked!
                <button
                  onClick={nextLevel}
                  className="ml-4 bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
                >
                  Go
                </button>
              </div>
            )}

            <div className="flex gap-4">
              <motion.button
                onClick={restartLevel}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-lg shadow-md flex items-center gap-2"
              >
                <RotateCcw size={18} />
                Retry Level
              </motion.button>

              {!showNextLevelAlert && (
                <motion.button
                  onClick={() => setLevel(null)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gray-200 text-gray-800 font-semibold px-6 py-3 rounded-lg shadow-md"
                >
                  Choose Level
                </motion.button>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;