const setLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const getLocalStorage = key => {
  return localStorage.getItem(key);
};

const removeLocalStorage = key => {
  localStorage.removeItem(key);
};

export { setLocalStorage, getLocalStorage, removeLocalStorage };
