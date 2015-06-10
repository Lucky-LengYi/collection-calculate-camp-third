'use strict';
var _ = require('../my_lodash/my_lodash.js');

var rank_desc = function(collection){
    var result = _.bubble_sort(collection);
    return result;
};

module.exports = rank_desc;
