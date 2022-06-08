import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1>Home page</h1>} />
        <Route path="/hello" element={<h1>Hello page</h1>} />
      </Routes>
    </div>
  );
}

export default App;
