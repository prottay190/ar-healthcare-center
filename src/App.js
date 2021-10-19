import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import Home from './pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
import Login from './pages/Login/Login/Login';
import AuthProvider from './context/AuthProvider';
import ServiceDetails from './pages/ServiceDetails/ServiceId/ServiceDetails';
import Register from './pages/Register/Register';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import BookAppointment from './pages/BookAppointment/BookAppointment';


function App() {
  return (
    <div className="App">
     <AuthProvider>
     <Router>
      <Route>
        <Header></Header>
      </Route>
      <Switch>
         <Route exact path="/">
           <Home></Home>
         </Route>
         <Route path='/home'>
           <Home></Home>
         </Route>
         <Route path="/login">
            <Login></Login>
         </Route>
         <Route path="/register">
           <Register></Register>
         </Route>
         <Route>
         <PrivateRoute path="/serviceDetails/:serviceDescription">
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
          <Route path="/bookappointment">
           <BookAppointment></BookAppointment>
          </Route>
         </Route>
         <Route path="*">
           <NotFound></NotFound>
         </Route>
      </Switch>
      <Footer></Footer>
    </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
