//store user in seesion
export const storeInSession = (key, value) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};
//check for user in session
export const lookInSession = (key) => {
  const item = sessionStorage.getItem(key);

  return item ? JSON.parse(item) : null;
};

//remove user from session
export const removeSession = (key) => {
  sessionStorage.removeItem(key);
};

//logout function accesses the removerSession function
export const logOut = (navigate, setUserAuth) => {
  removeSession("user");
  setUserAuth(null);
  navigate("/sign-in");
};
