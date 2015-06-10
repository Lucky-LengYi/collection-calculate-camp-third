'use strict';
var _ = require('../my_lodash/my_lodash.js');

function choose_divisible_integer(collection_a, collection_b) {
    var result = [];
    _.each(collection_a,function (num_a) {
        _.each(collection_b,function (num_b) {
            if (num_a % num_b === 0) {
                result[result.length] = num_a;
            }
        });
    });
    return result;
}

module.exports = choose_divisible_integer;
