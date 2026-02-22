import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-50">

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 leading-tight">
          Master English With Confidence
        </h1>

        <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
          Build strong vocabulary, understand grammar, improve speaking, listening, 
          and writing skills. Take interactive quizzes and track your progress. 
          Your journey to fluent English starts here!
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <Link
            to="/vocabulary"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Start Learning
          </Link>

          <Link
            to="/quiz"
            className="bg-white border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition"
          >
            Take a Quiz
          </Link>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            Why Learn English With Us?
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-600">
                📘 Vocabulary Builder
              </h3>
              <p className="text-gray-600 mt-3">
                Learn new words daily with simple meanings and real-life examples.
              </p>
            </div>

            <div className="p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-600">
                ✍ Grammar Made Easy
              </h3>
              <p className="text-gray-600 mt-3">
                Understand grammar rules clearly with structured lessons and exercises.
              </p>
            </div>

            <div className="p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-600">
                🧠 Interactive Quizzes
              </h3>
              <p className="text-gray-600 mt-3">
                Test your knowledge and track your improvement instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO LEARN */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            What You Will Learn
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-6 rounded-xl bg-white shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-600">🗣 Speaking Skills</h3>
              <p className="text-gray-600 mt-3">
                Gain confidence to speak English fluently in everyday conversations.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-600">👂 Listening Skills</h3>
              <p className="text-gray-600 mt-3">
                Improve comprehension with audio lessons and real-life dialogues.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-600">✍ Writing Skills</h3>
              <p className="text-gray-600 mt-3">
                Learn to write clearly, structure sentences, and express ideas effectively.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-600">📚 Vocabulary & Grammar</h3>
              <p className="text-gray-600 mt-3">
                Build a strong foundation with essential words and grammar rules.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-600">📝 Quizzes & Exercises</h3>
              <p className="text-gray-600 mt-3">
                Reinforce learning with interactive quizzes and exercises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 text-center bg-blue-600 text-white">
        <h2 className="text-3xl font-bold">
          Start Improving Your English Today 🚀
        </h2>

        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Join thousands of learners building confidence every day. Take the first step now!
        </p>

        <Link
          to="/vocabulary"
          className="inline-block mt-6 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Get Started
        </Link>
      </section>

    </div>
  );
};

export default Home;