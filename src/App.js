import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
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
import AdminLoginPage from './pages/AdminLoginPage';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './utils/PrivateRoute';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/search' component={Search} />
          <Route path='/doctors/:doctorID' component={DoctorProfile} />
          <Route path='/patients/:patientID' component={PatientProfile} />
          <Route path='/book/:doctorID' component={Book} />
          <Route path='/appointments/:appointmentID' component={Appointments} />
          <Route path='/contact' component={ContactUs} />
          <Route path='/about' component={About} />
          <Route path='/admin-login' component={AdminLoginPage} />
          <PrivateRoute
            path='/admin'
            redirectURL='/admin-login'
            component={Admin}
          />
          <PrivateRoute
            path='/dashboard'
            redirectURL='/signup'
            component={Dashboard}
          />
          <Route path='*' component={NotFound} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
