import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import AutomobileList from './AutomobileList';
import AutomobileForm from './AutomobileForm';
import SalesPersonForm from './SalesPersonForm';
import SalesPersonList from './SalesPersonList';
import ListManufacturers from './ManufacturerList';
import CreateManufacturer from './CreateManufacturer';
import ListModels from './ModelList';
import CreateModel from './CreateModel';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="automobiles/list/" element={<AutomobileList/>} />
          <Route path="automobiles/create/" element={<AutomobileForm/>} />
          <Route path="salesperson/list/" element={<SalesPersonList/>} />
          <Route path="salesperson/create/" element={<SalesPersonForm/>} />
          <Route path="manufacturers">
            <Route path="" element={<ListManufacturers />} />
            <Route path="new" element={<CreateManufacturer />} />
          </Route>
          <Route path="models">
            <Route path="" element={<ListModels />} />
            <Route path="new" element={<CreateModel />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
