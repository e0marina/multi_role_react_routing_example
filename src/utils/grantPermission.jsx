export const grantPermission = (requestedRoles) => {
  const permittedRoles = localStorage.getItem('userRoles');
  // console.log(`Requested Roles: ${requestedRoles}`); //object
  // console.log(`Typeof Requested Roles: ${typeof requestedRoles}`);
  // console.log(`Permitted Roles: ${permittedRoles}`);
  // console.log(`Typeof Permitted Roles: ${typeof permittedRoles}`); //string
  for (const property in requestedRoles) {
    //console.log(`${property}: ${requestedRoles[property]}`);
    if (permittedRoles === requestedRoles[property]) {
      return true;
    } else {
      console.log(false);
    }
  }

  // in case of multiple roles, if one of the permittedRoles is present in requestedRoles, return true;
};
