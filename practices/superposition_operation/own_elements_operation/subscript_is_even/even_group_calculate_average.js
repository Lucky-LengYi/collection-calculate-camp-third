'use strict';
var _ = require('../../../my_lodash/my_lodash.js');

var even_group_calculate_average = function(collection){
    var array = _.filter_in(collection,function (item,i) {
        return i % 2 === 1 && item % 2 === 0;
    });
    var result =[];
    var result_even = {};
    _.each(array,function (num,i) {
        result_even[(num+'').length] = result_even[(num+'').length] || [];
        result_even[(num+'').length].push(num);
    });
    for (var key in result_even) {
        var sum = 0;
        for (var x = 0; x < result_even[key].length; x++) {
            sum += result_even[key][x];
        }
        result[result.length] = Math.ceil(sum/result_even[key].length);
    }

    return result.length === 0 ? [0] : result ;
};
module.exports = even_group_calculate_average;
