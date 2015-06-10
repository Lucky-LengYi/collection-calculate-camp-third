'use strict';
var _ = require('../../../my_lodash/my_lodash.js');
var single_element = function(collection){
    var result = [];
    result = _.filter_in(collection,function (num,i) {
        return ((i + 1) % 2) === 0;
    });
    var temp = {};
    _.each(result,function (num,i) {
        temp[num+'_'] = temp[num+'_'] || 0;
        temp[num+'_'] = temp[num+'_'] + 1;
    });
    var result_sort = [];
    for (var key in temp) {
        if (temp[key] === 1) {
            result_sort.push(parseInt(key));
        }
    }
    return result_sort;
};
module.exports = single_element;
