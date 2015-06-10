'use strict';
var _ = require('../my_lodash/my_lodash.js');

function calculate_elements_sum(collection) {
    return _.sum(collection);
}

module.exports = calculate_elements_sum;
