import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Vocabulary from "../pages/Vocabulary";
import Grammar from "../pages/Grammar";
import Quiz from "../pages/Quiz";
import Translator from "../pages/Translator";
import DailyPractice from "../pages/DailyPractice";
import Tenses from "../pages/Tenses";
import Skills from "../pages/Skills";
import OtherProjects from "../pages/OtherProjects";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/daily-practice" element={<DailyPractice />} />
      <Route path="/translator" element={<Translator />} />
      <Route path="/vocabulary" element={<Vocabulary />} />
      <Route path="/grammar" element={<Grammar />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/tenses" element={<Tenses />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/other-projects" element={<OtherProjects />} />
    </Routes>
  );
};

export default AppRoutes;