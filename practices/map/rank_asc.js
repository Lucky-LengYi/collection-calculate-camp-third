'use strict';
var _ = require('../my_lodash/my_lodash.js');

var rank_asc = function(collection){
    var result_sort = _.bubble_sort(collection);
    var len = result_sort.length;
    var result = [];
    for (;len--;) {
        result[result.length] = result_sort[len];
    }
    return result;
};

module.exports = rank_asc;
