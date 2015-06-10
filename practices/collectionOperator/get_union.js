'use strict';
var _ = require('../my_lodash/my_lodash.js');

function get_union(collection_a, collection_b) {
    var result = collection_a;
    _.each(collection_b,function (item,i) {
        if (!_.exist(result,item)) {
            result[result.length] = item;
        }
    });

    return result;
}

module.exports = get_union;
