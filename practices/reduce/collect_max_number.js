'use strict';
var _ = require('../my_lodash/my_lodash.js');

function collect_max_number(collection) {
    return _.max(collection);
}

module.exports = collect_max_number;
