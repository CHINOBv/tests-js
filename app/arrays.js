exports = typeof window === "undefined" ? global : window;

exports.arraysAnswers = {
  indexOf: function (arr, item) {
    return arr.indexOf(item);
  },

  sum: function (arr) {
    let count = 0;
    arr.forEach((i) => {
      count = count + i;
    });
    return count;
  },

  remove: function (arr, item) {
    let results = arr.filter((i) => i !== item);
    return results;
  },

  removeWithoutCopy: function (arr, item) {
    //let index = arr.indexOf(item);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
      }
    }
    //console.log(arr);
    return arr;
  },

  append: function (arr, item) {
    //console.log(item);
    let result = arr.concat(item);
    return result;
  },

  truncate: function (arr) {},

  prepend: function (arr, item) {},

  curtail: function (arr) {},

  concat: function (arr1, arr2) {},

  insert: function (arr, item, index) {},

  count: function (arr, item) {},

  duplicates: function (arr) {},

  square: function (arr) {},

  findAllOccurrences: function (arr, target) {},
};
