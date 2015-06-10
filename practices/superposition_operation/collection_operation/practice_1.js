'use strict';
var _ = require('../../my_lodash/my_lodash.js');
function hybrid_operation(collection) {
    var three_times_add_two = _.map(collection,function (num) {
        return num * 3 + 2;
    });
    var sum = _.sum(three_times_add_two);
    return sum;
}

module.exports = hybrid_operation;
