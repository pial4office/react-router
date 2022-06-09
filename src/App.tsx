import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Test from './component/Test';

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <h1>Routes</h1>
      <Routes>
        <Route path="/hello" element={<h1>Hello Page</h1>} />
        <Route path="/test" element={<Test />} />
      </Routes>
      <h1>Component</h1>
      <Link to="/hello">Hello Page</Link>
      <br />
      <Link to="/test">Test Page</Link>
      <Test />
    </div>
  );
}

export default App;
