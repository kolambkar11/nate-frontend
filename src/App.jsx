
import Navbar from './components/navbar/Navbar'; // Change to default import
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PIIDataComponent from './components/PIIData/PIIDataComponent';
import Notfound from './components/notfound/Notfound';
import Dashboard from './components/dashboard/Dashboard';
import Slack from './components/slack/Slack';
import Globalsettings from './components/globalsettings/Globalsettings';
import Filepreview from './components/filepreview/Filepreview';



function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
        <Route activeClassName="active_class" exact path="/nate-frontend/" element={<Dashboard />}></Route>
          
          <Route activeClassName="active_class" exact path="/nate-frontend/slack/" element={<Slack />}>
            <Route path="/nate-frontend/slack/files" element={<Filepreview />}></Route>
            <Route path="/nate-frontend/slack/tables" element={<PIIDataComponent />}></Route>
          </Route>

          <Route activeClassName="active_class" exact path="/nate-frontend/global-settings" element={<Globalsettings />}></Route>
          <Route path="*" element={<Notfound />}></Route>

        </Routes>
      </Router>
    </>
  );
}

export default App;
