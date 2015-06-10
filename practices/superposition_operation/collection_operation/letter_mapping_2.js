'use strict';
var _ = require('../../my_lodash/my_lodash.js');

function average_to_letter(collection) {
    var sum = _.sum(collection);
    var average = Math.ceil(sum/collection.length);
    var letter = _.num_to_letter(average);
    return letter;
}

module.exports = average_to_letter;
