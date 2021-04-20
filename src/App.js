import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import PatientDashboard from "./pages/PatientDashboard";
import Admin from "./pages/Admin";
import DoctorDashboard from "./pages/DoctorDashboard";
import Search from "./pages/Search";
import DoctorProfile from "./pages/DoctorProfile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Book from "./pages/Book";
import Registeration from "./components/Registeration/Registeration";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Registeration} />
        <Route path="/search" component={Search} />
        <Route path="/doctors/:id" component={DoctorProfile} />
        <Route path="/book/:id" component={Book} />
        <Route path="/patient-dashboard" component={PatientDashboard} />
        <Route path="/doctor-dashboard" component={DoctorDashboard} />
        <Route path="/admin-dashboard" component={Admin} />
      </Switch>
    </Router>
  );
}

export default App;
