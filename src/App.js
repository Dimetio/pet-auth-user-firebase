import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Main, Login, Register } from "./pages/index";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/" element={<Main />}></Route>
      </Routes>
    </div>
  );
}

export default App;
