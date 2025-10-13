import './App.css'
// import ReadMe from './pages/readme';
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div>


      <Routes>
        {/* <Route path="/test" element={<div>hey</div>}> </Route> */}

        {/* <Route path="/README.md" element={<ReadMe />}> </Route> */}

        <Route path="*" element={<Navigate to="/README.md" replace />} />
      </Routes>
    </div>

  );
}

export default App
