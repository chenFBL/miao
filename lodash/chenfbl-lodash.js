var chenfbl = {
  chunk: function(ary, n) {
    var temp = []
    for (var i = 0; i < ary.length; i += n) {
      temp.push(ary.slice(i, i + n))
    }
    return temp
  }

}
