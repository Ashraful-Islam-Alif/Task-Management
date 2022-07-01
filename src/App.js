
import { Routes, Route, Link } from "react-router-dom";
import Calender from "./Components/Calender";
import CompletedTask from "./Components/CompletedTask";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import ToDo from "./Components/ToDo";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/todo" element={<ToDo></ToDo>}></Route>
        <Route path="/completedtask" element={<CompletedTask></CompletedTask>}></Route>
        <Route path="calender" element={<Calender></Calender>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
