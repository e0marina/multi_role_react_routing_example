import React from 'react';
import { grantPermission } from '../utils/grantPermission';

const UnlockAccess = ({ children, request }) => {
  const permission = grantPermission(request);
  return <div>{permission && children}</div>;
};

export default UnlockAccess;
