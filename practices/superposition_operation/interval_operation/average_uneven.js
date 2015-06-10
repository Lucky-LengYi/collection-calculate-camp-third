'use strict';
var _ = require('../../my_lodash/my_lodash.js');
function average_uneven(collection) {
    var result_array = _.filter_in(collection,function (num) {
        return num % 2 === 1;
    });
    var sum = _.sum(result_array);
    return sum / result_array.length;
}

module.exports = average_uneven;
