import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import { useEffect } from 'react';
import { getUserAuth } from './actions';
import { connect } from 'react-redux';
import Network from './components/network/Network';
import Job from './components/job/Job';
import Messaging from './components/messaging/Messaging';
import Notification from './components/notifications/Notifiction';

import ErrorPage from './components/ErrorPage';
function App(props) {
  useEffect(() => {
    props.getUserAuth();
  });
  return (
    <div className="App">
   <Router>


    <Routes>
    <Route path='/' element={<Login />} />
      <Route path='/home' element={<Home />} />
      <Route path='/network' element={<Network />} />
      <Route path='/jobs' element={<Job />} />
      <Route path='/messaging' element={<Messaging />} />
      <Route path='/notifications' element={<Notification />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
   </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
