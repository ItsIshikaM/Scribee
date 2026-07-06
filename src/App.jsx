import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Notes from "./pages/Notes";
import Notebook from "./pages/Notebook";
import Subjects from "./pages/Subjects";
import Whiteboard from "./pages/Whiteboard";
import AI from "./pages/AI";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/notebook" element={<Notebook />} />
        <Route path="/subjects" element={<Subjects />} />
        <Route path="/whiteboard" element={<Whiteboard />} />
        <Route path="/ai" element={<AI />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;