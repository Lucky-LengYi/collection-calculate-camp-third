'use strict';
var is_exist_element = function(collection,element){
    var result;
    for (var i = 0; i < collection.length; i++) {
        if ( i % 2 === 0 && collection[i] === element) {
            return true;
        }
    }
    return false;
};
module.exports = is_exist_element;
