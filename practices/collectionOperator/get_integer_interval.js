'use strict';
var _ = require('../my_lodash/my_lodash.js');

function get_integer_interval(number_a, number_b) {
    var result = _.range(number_a,number_b);
    return result;
  }

module.exports = get_integer_interval;
