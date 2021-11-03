import React from 'react';
import { Route } from 'react-router-dom';
import Unauthorized from './Unauthorized';
import { grantPermission } from '../utils/grantPermission';

const RoleBasedRouting = ({ component: Component, roles, ...rest }) => {
  return (
    <div>
      {grantPermission(roles) && (
        <Route
          {...rest}
          render={(props) => (
            <>
              <Component {...props} />
            </>
          )}
        />
      )}
      {!grantPermission(roles) && (
        <Route
          render={() => (
            <>
              <Unauthorized />
            </>
          )}
        />
      )}
    </div>
  );
};

export default RoleBasedRouting;
