'use strict';
var _ = require('../../my_lodash/my_lodash.js');

function hybrid_operation_to_uneven(collection) {
    var get_odd = _.filter_in(collection,function (num) {
        return num % 2 === 1;
    });
    var result = _.map(get_odd,function (num) {
        return num * 3 + 5;
    });
    return _.sum(result);
}

module.exports = hybrid_operation_to_uneven;
