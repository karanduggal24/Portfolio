import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import BottomDock from "./components/BottomDock/BottomDock";
import { Pointer } from "./components/ui/pointer";
import Projects from "./components/Projects/Projects";

function App() {
  return (

    <>
    <Pointer/>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />}/>
      </Routes>
    <BottomDock />
    </>
    
  );
}

export default App;
