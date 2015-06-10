'use strict';
var _ = require('../my_lodash/my_lodash.js');

function compute_median(collection) {
    var median;
    var result = _.bubble_sort(collection);
    return _.get_median(result);
}

module.exports = compute_median;
