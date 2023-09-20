import logo from "./logo.svg"
import "./App.css"
import Home from "./components/HomePage/home"
import Login from "./components/LoginPage/login"
import { BrowserRouter, Route, Routes } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="Home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
