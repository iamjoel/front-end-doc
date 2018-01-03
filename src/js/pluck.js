/*
var obj = {a:{b:3}}
pluck(obj, 'a') // {b:3}
pluck(obj, 'a.b') // 3
pluck(obj, 'a.b.c') // null
*/
function pluck(obj, keyPath) {
  var res = null
  var keyPathArr = keyPath.split('.')
  if(keyPath.length === 0 || typeof obj !== 'object' || !Array.isArray(obj)) {
    return null
  }

  res = obj
  var isEmpty = false
  keyPathArr.forEach((key, i) => {
    if(!isEmpty) {
      res = res[key]
      if(res === null || res === undefined) {
        isEmpty = true
        res = null
      } else if(i !== keyPathArr.length - 1) {
        if(typeof res !== 'object' || !Array.isArray(res)) {
          isEmpty = true
          res = null
        }
      }
    }
    
  })
  
  return res
}

