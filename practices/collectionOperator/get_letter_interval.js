'use strict';
var _ = require('../my_lodash/my_lodash.js');
function get_letter_interval(number_a, number_b) {
    var result = _().range(number_a,number_b).map(function (num) {
        return _().num_to_letter(num).value();
    }).value();
    return result;
}


module.exports = get_letter_interval;
