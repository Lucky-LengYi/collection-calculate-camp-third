'use strict';
var _ = require('../my_lodash/my_lodash.js');

function choose_even(collection) {
    return _.filter_in(collection,function (num) {
        return num % 2 === 0;
    });
}

module.exports = choose_even;
