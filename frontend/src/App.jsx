import "./App.css";
import { Routes, Route } from "react-router-dom";
import Side from "./components/sidebar/Side";
import SignUpPage from "./components/SignUp";
import LoginPage from "./components/SignIn";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="flex-grow overflow-auto">
        <Routes>
          <Route path="/" element={<Side />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<LoginPage />} />
        </Routes>
      </div>
      {/* Sticky Footer */}
      <Footer />
    </div>
  );
}

export default App;
