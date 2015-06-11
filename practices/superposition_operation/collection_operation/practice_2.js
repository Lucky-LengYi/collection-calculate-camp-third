'use strict';
var _ = require('../../my_lodash/my_lodash.js');

function hybrid_operation_to_uneven(collection) {
    // var get_odd = _.filter_in(collection,function (num) {
    //     return num % 2 === 1;
    // });
    // var result = _.map(get_odd,function (num) {
    //     return num * 3 + 2;
    // });
    return _(collection).filter(function (item,i) {
        return item % 2 === 1;
    }).map(function (item) {
        return item * 3 + 2;
    }).value();
}

module.exports = hybrid_operation_to_uneven;
