
import About from './Views/AboutView';
import TwitterClientMainView from './Views/TwitterClientMainView';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  
  return (
    <div>
      <Router>
        <Routes>
            <Route path='/' element={<TwitterClientMainView />} />
            <Route path='/about' element={<About/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
