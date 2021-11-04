const allRoles = {
  Child: [],
  Parent: ["getUsers", "manageUsers", "hi"],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
