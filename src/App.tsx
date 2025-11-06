import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import BottomDock from "./components/BottomDock/BottomDock";
import { Pointer } from "./components/ui/pointer";
import Projects from "./components/Projects/Projects";
import ScrollToTop from "./components/ui/ScrollToTop";
import Footer from "./components/Footer/Footer";

function App() {
  return (

    <>
    <Pointer/>
    <ScrollToTop/>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />}/>
      </Routes>
      <Footer />
    <BottomDock />
    </>
    
  );
}

export default App;
