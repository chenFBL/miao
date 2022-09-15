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

  fill: function () {

  },

  drop: function(array, n = 1) {
    var result = []
    for (var i = n; i < array.length; i++) {
      result.push(array[i])
    }
    return result
  },

  findIndex: function () {

  }
}
