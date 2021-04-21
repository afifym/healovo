import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import PatientDashboard from './pages/PatientDashboard';
import Admin from './pages/Admin';
import DoctorDashboard from './pages/DoctorDashboard';
import Search from './pages/Search';
import DoctorProfile from './pages/DoctorProfile';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Book from './pages/Book';
import NotFound from './pages/NotFound';
import Appointments from './pages/Appointments';
import PatientProfile from './pages/PatientProfile';
import ContactUs from './pages/ContactUs';
import About from './pages/About';
import Vision from './components/Vision/Vision';

function App() {
  return (
    <Router>
      <Vision />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/search' component={Search} />
        <Route path='/doctors/:doctorID' component={DoctorProfile} />
        <Route path='/patients/:patientID' component={PatientProfile} />
        <Route path='/book/:doctorID' component={Book} />
        <Route path='/patient-dashboard' component={PatientDashboard} />
        <Route path='/doctor-dashboard' component={DoctorDashboard} />
        <Route path='/admin' component={Admin} />
        <Route path='/appointments/:appointmentID' component={Appointments} />
        <Route path='/contact' component={ContactUs} />
        <Route path='/about' component={About} />
        <Route path='*' component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
