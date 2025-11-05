import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import BottomDock from "./components/BottomDock/BottomDock";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    <BottomDock />
    </>
    
  );
}

export default App;
