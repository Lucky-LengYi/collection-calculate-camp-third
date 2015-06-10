'use strict';
var _ = require('../../my_lodash/my_lodash.js');

function even_to_letter(collection) {
    var result = _.filter_in(collection,function (num) {
        return num % 2 === 0;
    });
    _.each(result,function (num,i) {
        result[i] = _.num_to_letter(num);
    });

    return result;
}

module.exports = even_to_letter;
