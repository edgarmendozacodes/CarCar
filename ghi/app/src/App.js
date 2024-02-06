import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import AutomobileList from './AutomobileList';
import AutomobileForm from './AutomobileForm';


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="automobiles/list/" element={<AutomobileList/>} />
          <Route path="automobiles/create/" element={<AutomobileForm/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
