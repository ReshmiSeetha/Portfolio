import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Project from "./components/Project";
import ProjectDetails from "./components/ProjectDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Project />
          </>
        } />

        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;