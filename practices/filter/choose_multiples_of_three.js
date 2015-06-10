'use strict';
var _ = require('../my_lodash/my_lodash.js');

function choose_multiples_of_three(collection) {
    return _.filter_in(collection,function (num) {
        return num % 3 === 0;
    });

}

module.exports = choose_multiples_of_three;
