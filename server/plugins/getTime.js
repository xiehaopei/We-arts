/**
 * @description: 时间格式转换 
 * @param {*} time
 * @return {*}
 */
const getTime = (time) => {
  const year = time.getFullYear();
  const month = time.getMonth() + 1;
  const day = time.getDate();
  /* const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds(); */
  return `${year}-${month}-${day}`;
}

module.exports = getTime;