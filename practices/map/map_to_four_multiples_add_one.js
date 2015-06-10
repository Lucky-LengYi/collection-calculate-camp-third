'use strict';
var _ = require('../my_lodash/my_lodash.js');

var map_to_four_multiples_add_one = function(collection){
    var result = _.map(collection,function (num) {
        return num * 4 + 1;
    });
    return result;
};

module.exports = map_to_four_multiples_add_one;
