'use strict';
var _ = require('../../my_lodash/my_lodash.js');
function amount_even(collection) {
    return _(collection).filter(function (item,i) {
        return item % 2 === 0;
    }).sum().value();
}

module.exports = amount_even;
