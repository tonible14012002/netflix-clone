import {Routes, Route, Router} from 'react-router-dom'
import LoginPage from './components/Login'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LoginPage/>} />
      </Routes>
    </div>
  );
}

export default App;
