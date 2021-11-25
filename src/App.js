import "./styles/bootstrap.min.css";
import "./styles/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Details from "./pages/Details";
import Dashboard from "./pages/Dashboard";
import AuthProvider from "./contexts/AuthProvider";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import PrivateRoute from "./Routes/PrivateRoute";
import Error from "./pages/Error";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/explore" exact component={Explore} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/signin" exact component={SignIn} />

            <PrivateRoute path="/watches/:id" exact>
              <Details />
            </PrivateRoute>

            <PrivateRoute path="/dashboard" exact>
              <Dashboard />
            </PrivateRoute>

            <Route path="*" component={Error} />
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
