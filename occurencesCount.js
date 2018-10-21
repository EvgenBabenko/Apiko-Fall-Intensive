Array.prototype.occurencesCount = function (value) {
  return this.reduce((result, item) => item === value ? result + 1 : result, 0)
}