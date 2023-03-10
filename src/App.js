
import './App.css';
import { BrowserRouter,Route,Routes} from  'react-router-dom'
import EmpListing from './EmpListing';
import EmpCreate from './EmpCreate';
import EmpDetails from './EmpDetails';
import EmpEdit from './EmpEdit';

function App() {
  return (
    <div className="App">
      <h1> React js Crud Opearations</h1>
      <BrowserRouter>
  <Routes>
    <Route path="/" element={<EmpListing/>}/>
    <Route path="/employee/create" element={<EmpCreate/>}/>
    <Route path="/employee/detail/:empid" element={<EmpDetails/>}/>
    <Route path="/employee/edit/:empid" element={<EmpEdit/>}/>
  </Routes>

  </BrowserRouter>
    </div>
  );
  
}

export default App;
