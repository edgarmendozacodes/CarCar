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
import CustomerList from './CustomerList';
import CustomerForm from './CustomerForm';
import ListAllSales from './ListAllSales';
import FormAllSales from './FormAllSales';
import ListSaleHistory from './ListSalesHistory';

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
          <Route path="customer/list/" element={<CustomerList/>} />
          <Route path="customer/create/" element={<CustomerForm/>} />
          <Route path="sales">
            <Route path="list" element={<ListAllSales />} />
            <Route path="create" element={<FormAllSales />} />
            <Route path="history" element={<ListSaleHistory />} />
          </Route>


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
