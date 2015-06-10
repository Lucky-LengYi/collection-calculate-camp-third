'use strict';
var _ = require('../my_lodash/my_lodash.js');

function get_integer_interval_2(number_a, number_b) {
    var result = _.range(number_a,number_b);
    result = _.filter_in(result,function (num) {
        return num % 2 === 0;
    });
    return result;

}

module.exports = get_integer_interval_2;
