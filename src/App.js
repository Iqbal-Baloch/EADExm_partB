import './App.css';
import AppLayout from './AppLayout';
import Listing from './Listing';
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";
function App() {
  return (
    <div className="App">
     
      <h1>Recipe Management App</h1>
      <AppRoutes/>
    </div>
  );
}

function AppRoutes(){
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route element= {<AppLayout/>}>
          <Route index element={<Listing recepies={[{_id:1, title: "java", description: "dd"}]}/>} />
          {/* <Route path="info" element={<Info />} /> */}
        </Route>

      </Routes>

    </BrowserRouter>

  </>
  )
}

export default App;
