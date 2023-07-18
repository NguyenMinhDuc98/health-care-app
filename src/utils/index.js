export const utils = {
  convertObjToArr(obj) {
    const arr = Object.keys(obj).map((key) => obj[key]);
    return arr;
  },
  setStorage(key, value) {
    localStorage.setItem(key, value);
  },
  getStorage(key) {
    return localStorage.getItem(key);
  },
  deleteStorage() {
    localStorage.clear();
  },
};
