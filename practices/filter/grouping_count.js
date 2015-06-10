'use strict';
var _ = require('../my_lodash/my_lodash.js');

function grouping_count(collection) {
    var array = {};
    _.each(collection, function (num) {
        array[num] = array[num]||0;
        array[num] ++ ;
    });
    return array;
}

module.exports = grouping_count;
