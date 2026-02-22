import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Vocabulary from "./pages/Vocabulary";
import Grammar from "./pages/Grammar";
import Quiz from "./pages/Quiz";
import Translator from "./pages/Translator";
import Footer from "./components/Footer";
import DailyPractice from "./pages/DailyPractice";
import Tenses from "./pages/Tenses";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/daily-practice" element={<DailyPractice />} />
        <Route path="/translator" element={<Translator />} />
        <Route path="/vocabulary" element={<Vocabulary />} />
        <Route path="/grammar" element={<Grammar />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/tenses" element={<Tenses />} />
        
      </Routes>
      <Footer/>
    </>
  );
}

export default App;