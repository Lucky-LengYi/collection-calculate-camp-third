function each(collection,func) {
    for (var i = 0; i < collection.length; i++) {
        func(collection[i],i);
    }
}
function exist(collection,num) {
    var result = false;
    if (collection.length === 0) {
        return false;
    }
    reduce(collection,function (num_a,num_b) {
        if (num_a === num || num_b === num) {
            result = true;
        }
    });
    return result;
}

function reduce(collection,func) {
    var temp;
    each(collection,function (item,i) {
        if (i === 0) {
            temp = item;
        }else{
            temp = func(temp,item);
        }
    });
}

function choose_no_repeat_number(collection) {
    var array = [];

    each(collection,function (num) {
        if (!exist(array,num)) {
            array[array.length] = num;
        }
    });

    return array;
}
