'use strict';

function compare_collections(collection_a, collection_b) {
    if (collection_a.length !== collection_b.length || collection_a.length === 0) {
        return false;
    }
    for (var i = 0; i < collection_a.length; i++) {
        if (collection_a[i] !== collection_b[i]) {
            return false;
        }
    }
    return true;
}

module.exports = compare_collections;
