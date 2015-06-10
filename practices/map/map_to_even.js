'use strict';
var _ = require('../my_lodash/my_lodash.js');

function map_to_even(collection){
    var result = _.map(collection,function (num) {
        return num * 2;
    });
    return result;
}
module.exports = map_to_even;
