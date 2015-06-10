'use strict';
var _ = require('../my_lodash/my_lodash.js');

var number_map_to_word_over_26 = function(collection){
    var result = _.map(collection,function (number) {
        return _.num_to_letter(number);
    });
    return result;
};

module.exports = number_map_to_word_over_26;
