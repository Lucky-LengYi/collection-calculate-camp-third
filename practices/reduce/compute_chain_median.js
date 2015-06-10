'use strict';
var _ = require('../my_lodash/my_lodash.js');
function compute_chain_median(collection) {

    var result = collection.split("->");
    _.each(result,function (item,i) {
        result[i] = parseInt(item);
    });
    var median;
    result = _.bubble_sort(result);
    return _.get_median(result);
}

module.exports = compute_chain_median;
