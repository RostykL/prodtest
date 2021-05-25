import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";import AllProducts from "./pages/all/allProducts";
import Single from "./pages/single/Single";

function App() {
  return <Router>
	<Switch>
	  <Route exact path={'/'}>
		<AllProducts/>
	  </Route>
	  <Route path={'/single/:id'}>
		<Single/>
	  </Route>
	</Switch>
  </Router>

}

export default App;
