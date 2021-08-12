import Index from "./views/Index";
import {Router} from "@reach/router";
import SpecificMovie from "./components/specificMovie/SpecificMovie";

function App() {
  return (
    <div className="App">
       <Router>
        <Index path="/" />
        <SpecificMovie path="/:id"/>
      </Router>
    </div>
  );
}
export default App;
