'use strict';
var _ = require('../my_lodash/my_lodash.js');
function double_to_one(collection) {
    var array = _.flatten(collection);
    var result = [];
    result = [];
    _.each(array,function (num) {
        if (!_.exist(result,num)) {
            result[result.length] = num;
        }
    });
    return result;
}

module.exports = double_to_one;
