import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import PostForm from "./components/PostForm";
import UserForm from "./components/UserForm";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userform" element={<UserForm />} />
          <Route path="/postForm" element={<PostForm />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
