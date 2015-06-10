'use strict';
var _ = require('../my_lodash/my_lodash.js');

function calculate_elements_sum(collection, element) {
    var subscript;
    _.each(collection,function (num,i) {
        if (num === element) {
            subscript = i;
        }
    });
    return subscript;
}

module.exports = calculate_elements_sum;
