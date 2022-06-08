import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1>Home page</h1>} />
        <Route path="/hello" element={<h1>Hello page</h1>} />
      </Routes>
      <NavLink to={''}>Home</NavLink> {/* 'or, /' */}
      <br />
      <NavLink to={'hello'}>Hello</NavLink> {/* or, /hello  */}
    </div>
  );
}

export default App;
