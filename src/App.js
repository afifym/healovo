import SearchPage from "./components/SearchPage/SearchPage";
import ViewProfilePage from "./components/viewProfilePage/ViewProfilePage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const doctor = {
    id: 8,
    name: { first: "lubna", last: "asem" },
    degree: "Masters in medicine",
    image: "doctorAvtar.png",

    specialty: "Neurology",
    rate: "2",
    location: "Kafr El Sheikh Egypt",
    communicationMethods: { clinic: true, home: false, video: false },
    reservationDates: [
      { day: "Mon", period: "1:00 pm - 6:00 pm" },
      { day: "Tue", period: "1:00 pm - 6:00 pm" },
      { day: "Wed", period: "5:00 pm - 12:00 pm" },
    ],
    email: "lubna.asem@gmail.com",
    password: "mohnad",
    gender: "female",
    phone: ["01288040837", "040350017"],
    price: "200",
    overview: `I am an ophthalmologist and a graduate of Mid-career Masters
     of Public Administration at the Harvard Kennedy School (HKS), Harvard
    University, USA (2019). I graduated from MSc of public healthfor eye 
    care at LSHTM, University of London (2020). My coursework at the Harvard
    Kennedy School wasfocused on health policy, leadership, management, health
    system reform, and communication. My coursework at LSHTM was focused on global
      health, epidemiology, health microeconomics, statistics, proposal writing, and
    global disability.`,
    type: "doctor",
    joinDate: "13-05-1997",
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Searchresult">searchPage</Link>
            </li>
          </ul>
        </nav>
        <div>
          <Switch>
            <Route exact path="/">
              <h1>welcome to home</h1>
            </Route>
            <Route path="/Searchresult" component={SearchPage}></Route>
            <Route path="/viewprofile">
              <ViewProfilePage doctor={doctor} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
