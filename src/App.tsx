import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/appRoutes";

function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;