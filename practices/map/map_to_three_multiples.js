'use strict';
var _ = require('../my_lodash/my_lodash.js');

var map_to_three_multiples = function(collections){
    var result = _.map(collections,function (num) {
        return num * 3;
    });
    return result;
};

module.exports = map_to_three_multiples;
