import { Button } from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";
import SearchPage from "./components/SearchPage/SearchPage";

function App() {
  return (
    <div>
      <Navbar />
      <SearchPage />
      <Button variant="contained">HEALOVO</Button>
    </div>
  );
}

export default App;
