'use strict';
var _ = require('../my_lodash/my_lodash.js');

function find_last_even(collection) {
    return _.last(collection,function (num) {
        return num % 2 === 0;
    });
}

module.exports = find_last_even;
