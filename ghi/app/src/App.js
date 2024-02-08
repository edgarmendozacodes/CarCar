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
import TechniciansList from './TechnicianList';
import CreateTech from './CreateTechnician';
import CreateAppointment from './CreateAppointment';
import ListAppointments from './AppointmentList';
import SearchList from './ServiceHistory';


function App() {
  return (
      <BrowserRouter>
        <Nav />
            <div className="container">
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="automobiles/list/" element={<AutomobileList/>} />
                    <Route path="automobiles/create/" element={<AutomobileForm/>} />
                    <Route path="manufacturers">
                        <Route path="" element={<ListManufacturers />} />
                        <Route path="new" element={<CreateManufacturer />} />
                    </Route>
                    <Route path="models">
                        <Route path="" element={<ListModels />} />
                        <Route path="new" element={<CreateModel />} />
                    </Route>
                    <Route path ="service">
                      <Route path="history" element={<SearchList />} />
                      <Route path="technicians">
                          <Route path="" element={<TechniciansList />} />
                          <Route path="new" element={<CreateTech />} />
                      </Route>
                      <Route path="appointments">
                        <Route path="" element={<ListAppointments />} />
                        <Route path="new" element={<CreateAppointment />} />
                    </Route>
                    </Route>
                </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
