'use strict';
var _ = require('../../my_lodash/my_lodash.js');

function one_add_next_multiply_three(collection){
    var result = [];
    var len = collection.length;
    _.each(collection,function (num,i) {
        if (i < len - 1) {
            result[result.length] = (collection[i] + collection[i+1]) * 3;
        }
    });
    return result;
}
module.exports = one_add_next_multiply_three;
