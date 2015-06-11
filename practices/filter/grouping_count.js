'use strict';
var _ = require('../my_lodash/my_lodash.js');

function grouping_count(collection) {
    var result = {};
    _(collection).each(function (item,i) {
        result[item] = result[item] || 0;
        result[item] ++ ;
    });
    return result;
}

module.exports = grouping_count;
