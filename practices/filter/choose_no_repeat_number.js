'use strict';
var _ = require('../my_lodash/my_lodash.js');

function choose_no_repeat_number(collection) {
    var array = [];
    _.each(collection,function (num) {
        if (!_.exist(array,num)) {
            array[array.length] = num;
        }
    });
    return array;
}

module.exports = choose_no_repeat_number;
