function getZippedArrays(keys, values) {
    let result = {};
  
    for (let i = 0; i < keys.length; i++) {
      result[keys[i]] = values[i];
    }
  
    return result;
  }
  
  // Пример использования функции
  let keys = ['name', 'age', 'city'];
  let values = ['John', 30, 'New York'];
  
  let obj = getZippedArrays(keys, values);
  console.log(obj); // { name: 'John', age: 30, city: 'New York' }
  