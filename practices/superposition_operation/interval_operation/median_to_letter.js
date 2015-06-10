'use strict';
var _ = require('../../my_lodash/my_lodash.js');

function median_to_letter(collection) {
    var result = _.bubble_sort(collection);
    var median = _.get_median(result);
    median = Math.ceil(median);
    var median_letter = _.num_to_letter(median);
    return median_letter;
}

module.exports = median_to_letter;
