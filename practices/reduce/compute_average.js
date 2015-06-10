'use strict';
var _ = require('../my_lodash/my_lodash.js');

function compute_average(collection) {
    var sum = _.sum(collection);
    return sum / collection.length;
}

module.exports = compute_average;
