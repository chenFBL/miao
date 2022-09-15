var chenfbl = {
  chunk: function(ary, n) {
    var temp = []
    for (var i = 0; i < ary.length; i += n) {
      temp.push(ary.slice(i, i + n))
    }
    return temp
  },

  compact: function(ary){
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

  drop: function(array, n = 1) {
    var result = []
    for (var i = n; i < array.length; i++) {
      result.push(array[i])
    }
    return result
  },

  findIndex: function(array, predicate, fromIndex=0) {

  },

  identity: function (value) {
    return value
  },

  dropRight: function (array, n = 1) {
    var result = []
    for (var i = 0; i < array.length; i++) {
      result.push(array[i])
    }
    return result
  },

  last: function(array) {
    return array[array.length - 1]
  },

  indexOf: function(array, value, fromIndex = 0) {
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
  }
}
