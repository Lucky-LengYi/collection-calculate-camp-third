'use strict';
var _ = require('../my_lodash/my_lodash.js');

var number_map_to_word = function(collection){
    var result = _.map(collection,function (num) {
        return _.num_to_letter(num);
    });
    return result;
};

module.exports = number_map_to_word;
