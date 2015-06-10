'use strict';
var _ = require('../../../my_lodash/my_lodash.js');
var calculate_median = function(collection){
    var median;
    var result = [];
    _.each(collection,function (num,i) {
        if (i % 2 === 1) {
            result[result.length] = num;
        }
    });
    result = _.bubble_sort(result);
    return _.get_median(result);
};
module.exports = calculate_median;
