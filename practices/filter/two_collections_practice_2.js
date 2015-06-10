'use strict';
var _ = require('../my_lodash/my_lodash.js');

function choose_no_common_elements(collection_a, collection_b) {
    var result = [];
    _.each(collection_a,function (letter) {
        if (!_.exist(collection_b,letter)) {
            result[result.length] = letter;
        }
    });

    return result;
}

module.exports = choose_no_common_elements;
