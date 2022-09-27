var chenfbl = {
  chunk: function (ary, n) {
    var temp = []
    for (var i = 0; i < ary.length; i += n) {
      temp.push(ary.slice(i, i + n))
    }
    return temp
  },

  compact: function (ary){
    var result = []
    for (var i = 0; i < ary.length; i++) {
      if (ary[i]) {
        result.push(ary[i])
      }
    }
    return result
  },

  fill: function (array, value, start=0, end=array.length) {
    for (var i = start; i < end; i++) {
      array[i] = value
    }
    return array
  },

  drop: function (array, n = 1) {
    var result = []
    for (var i = n; i < array.length; i++) {
      result.push(array[i])
    }
    return result
  },

  findIndex: function (array, predicate, fromIndex=0) {

  },

  identity: function (value) {
    return value
  },

  dropRight: function (array, n = 1) {
    var result = []
    for (var i = 0; i < array.length - n; i++) {
      result.push(array[i])
    }
    return result
  },

  last: function (array) {
    return array[array.length - 1]
  },

  indexOf: function (array, value, fromIndex = 0) {
    for (var i = fromIndex; i < array.length; i++) {
      if (array[i] === value) {
        return i
      }
    }
    return -1
  },

  head: function (array) {
    return array[0] ? array[0] : undefined;
  },

  lastIndexOf: function (array, value, fromIndex = array.length - 1) {
    for (var i = fromIndex; i > 0; i--) {
      if (array[i] === value) {
        return i
      }
    }
    return -1
  },

  nth: function (array, n = 0) {
    return array.at(n)
  },

  initial: function (array) {
    array.pop()
    return array
  },

  reverse: function (array) {
    var left = 0
    var right = array.length - 1

    while (left < right) {
      var tmp = array[left]
      array[left] = array[right]
      array[right] = tmp

      left++
      right--
    }
    return array
  },

  join: function (array, separator = ',') {
    var result = ''

    for (var i = 0; i < array.length; i++) {
      if (i != array.length - 1) {
        result += array[i] + (separator + '')
      } else {
        result += array[i]
      }
    }
    return result
  },

  flatten: function (array) {
    var result = []
    for (var i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        for (var j = 0; j < array[i].length; j++) {
          result.push(array[i][j])
        }
      } else {
          result.push(array[i])
        }
    }
    return result
  },

  flattenDeep: function (array) {
    var result = []
    function flattenDeep(array) {
      for (var i = 0; i < array.length; i++) {
        let tmp = array[i]
        if (Array.isArray(array[i])) {
          flattenDeep(tmp)
        } else {
          result.push(tmp)
        }
      }
    }
    flattenDeep(array)
    return result
  },

  fromPairs: function (pairs) {
    let tmp = {}
    for (var i = 0; i < pairs.length; i++) {
      tmp[pairs[i][0]] = pairs[i][1]
    }
    return tmp
  },
  isBoolean: function (value) {
    if (value == true || value == false) {
      return true
    }
    return false
  },

  isDate: function (value) {
    return value instanceof Date
  },

  isNil: function (value) {
    return value == null
  },

  isNull: function (value) {
    return value === null
  },

  isNumber: function (value) {
    return typeof value === `number`
  },

  isObject: function (value) {
    return value instanceof Object;
  },

  isRegExp: function (value) {
    return value instanceof RegExp;
  },
}
