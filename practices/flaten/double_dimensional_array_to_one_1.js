'use strict';
var _ = require('../my_lodash/my_lodash.js');
function double_to_one(collection) {
    return _.flatten(collection);
}

module.exports = double_to_one;
