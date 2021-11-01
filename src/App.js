// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Navigation from './pages/Navigation/Navigation';
import ServiceInfo from './pages/ServiceInfo/ServiceInfo';
import Login from './pages/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Registration from './pages/Login/Registration/Registration';
import Footer from './pages/Footer/Footer';
import Doctor from './pages/Doctor/Doctor';
import Services from './Services/Services';
import Service from './Service/Service';
import Departments from './pages/Departments/Departments';
import AddService from './pages/AddService/AddService';
import MyOrders from './pages/MyOrders/MyOrders';
import ManageAllOrders from './pages/ManageAllOrders/ManageAllOrders';
import AddANewService from './pages/AddANewService/AddANewService';
import TeamMembers from './pages/TeamMembers/TeamMembers';

function App() {
  return (
    <div >
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            {/* <Route path='/doctor'>
              <Doctor></Doctor>
            </Route> */}
            <Route path='/teammembers'>
              <TeamMembers></TeamMembers>
            </Route>
            {/* <Route path='/teammembers'>
              <TeamMembers></TeamMembers>
            </Route> */}
            <Route path='/services'>
              <Services></Services>
            </Route>
            <Route path='/service'>
              <Service></Service>
            </Route>
            <PrivateRoute path='/departments'>
              <Departments></Departments>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            {/* <Route path='/registration'>
              <Registration></Registration>
            </Route> */}
            <PrivateRoute path='/serviceInfo/:serviceId'>
              <ServiceInfo></ServiceInfo>
            </PrivateRoute>
            <PrivateRoute path='/myorders'>
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path='/manageallorders'>
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>
            <PrivateRoute path='/addanewservice'>
              <AddANewService></AddANewService>
            </PrivateRoute>
            <Route path="/addService">
              <AddService></AddService>
            </Route>
            <Route path='*'>
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
