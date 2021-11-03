import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import RoleBasedRouting from './components/RoleBasedRouting';
import AdminPage from './components/AdminPage';
import UserPage from './components/UserPage';
import ManagerPage from './components/ManagerPage';
import './App.css';

function App() {
  useEffect(() => {
    localStorage.setItem('userRoles', ['ROLE_ADMIN']);
  }, []);
  return (
    <div className='App'>
      <Router>
        <Switch>
          <RoleBasedRouting
            exact
            path='/admin'
            component={AdminPage}
            roles={['ROLE_ADMIN']}
          />
          <RoleBasedRouting
            exact
            path='/user'
            component={UserPage}
            roles={['ROLE_USER']}
          />
          <RoleBasedRouting
            exact
            path='/manager'
            component={ManagerPage}
            roles={['ROLE_Manager']}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
