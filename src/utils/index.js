export const utils = {
  convertObjToArr(obj) {
    const arr = Object.keys(obj).map((key) => obj[key]);
    return arr;
  },
};
