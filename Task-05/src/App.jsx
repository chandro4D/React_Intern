import TopBar from "./Components/Common/TopBar";
import About from "./Components/Common/About";
import NavBar from "./Components/Common/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Task_4 from "./Components/Pages/Task_4";
import Footer from "./Components/Common/Footer";

const App = () => {
  return (
    <div>
      <TopBar />
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/task-4" element={<Task_4 />} />
      </Routes>

      <Footer/>
    </div>
  );
};

export default App;
