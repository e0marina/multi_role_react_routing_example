export const grantPermission = (requestedRoles) => {
  const permittedRoles = localStorage.getItem('userRoles');
  console.log(requestedRoles);
  if (permittedRoles === requestedRoles[0]) {
    return true;
  } else {
    return false;
  }

  // in case of multiple roles, if one of the permittedRoles is present in requestedRoles, return true;
};
