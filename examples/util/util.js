/**
 * 深度clone
 *
 * @param {(Object|Array)} origin 需要clone的数据源
 * @return {(Object|Array)} clone的数据
 */
export function deepClone(origin) {
  if (getType(origin) === 'Array') {
    return origin.map(item => deepClone(item));
  }

  if (getType(origin) === 'Object') {
    const obj = {};
    Object.keys(origin).forEach(key => (obj[key] = deepClone(origin[key])));
    return obj;
  }

  return origin;
}

/**
 * 检测数据类型
 *
 * @param {*} param 检验的数据
 * @return {string} 数据类型 Object => Object Array => Array string => String
 *                           number => Number null => Null undefined => Undefined...
 */
export function getType(param) {
  return Object.prototype.toString.call(param).slice(8, -1);
}

/**
 * 获取router的hash
 *
 * @return {string} router的hash
 */
export function getPathName() {
  const hashStr = window.location.hash.split('?')[0];
  return hashStr.replace(/^(#\/)/, '');
}
