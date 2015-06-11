function _(collection) {
    if(!(this instanceof _)) {
        return new _(collection);
    }
    this.collection = collection;
}

_.prototype = {
    contructor: _,
    each: function(func){
        for (var i = 0; i < this.collection.length; i++) {
            func(this.collection[i],i);
        }
    },
    reduce : function (func) {
        var temp;
        this.each(function (item,i) {
            if (i === 0) {
                temp = item;
            }else{
                temp = func(temp,item);
            }
        });
    },
    sum: function () {
        var result;
        this.reduce(function (num_a,num_b) {
            result = num_a + num_b;
            return result;
        });
        this.collection = result;
        return this;
    },
    map: function(func) {
        var result = [];
        this.each(function(item,i){
            result.push(func(item, i));
        });
        this.collection = result;
        return this;
    },
    max: function () {
        var result;
        this.reduce(function (num_a,num_b) {
            result = num_a > num_b ? num_a : num_b;
            return result;
        });
        this.collection = result;
        return this;
    },
    min: function () {
        var result;
        this.reduce(function (num_a,num_b) {
            result = num_a < num_b ? num_a : num_b;
            return result;
        });
        this.collection = result;
        return this;
    },
    filter: function(func) {
        var result = [];
        this.each(function (item,i) {
            if (func(item,i)) {
                result.push(item);
            }
        });
        this.collection = result;
        return this;
    },
    filter_out: function (func) {
        var result = [];
        this.each(function (item,i) {
            if (!func(item,i)) {
                result.push(item);
            }
        });
        this.collection = result;
        return this;
    },
    first: function (func) {
        if (func !== undefined) {
            result = this.filter(func).value();
        }
        var first_item;
        this.collection = result;
        this.reduce(function (num_a,num_b) {
            first_item = num_a;
            return num_a;
        });
        this.collection = first_item;
        return this;
    },
    last: function (func) {
        var result = [];
        if (func !== undefined) {
            result = this.filter(func).value();
            this.collection = result;
        }
        var last_item;
        this.reduce(function (item_a,item_b) {
            last_item = item_b;
        });
        if (last_item === undefined) {
            last_item = this.collection[0];
        }
        this.collection = last_item;
        return this;
    },
    exist: function (num) {
        var result = false;
        this.each(function (item) {
            if (item === num) {
                result = true;
            }
        });
        this.collection = result;
        return this;
    },
    bubble_sort: function (func) {
        var item;
        var i,x;
        var result = this.filter(function (item) {
            return true;
        }).value();
        for (i = 0; i < result.length; i++) {
            for (x = i + 1; x < result.length; x++) {
                if (func(result[i],result[x])) {
                    item = result[i];
                    result[i] = result[x];
                    result[x] = item;
                }
            }
        }
        this.collection = result;
        return this;
    },
    flatten: function () {
        var result = [];
        this.each(function (item,i) {
            if (item.length === undefined) {
                result.push(item);
            }
            for (var x = 0;item.length !== undefined && x < item.length; x++) {
                if (item[x].length === undefined) {
                    result.push(item[x]);
                }
            }
        });
        this.collection = result;
        return this;
    },
    get_median: function () {
        var len = this.collection.length;
        this.collection = len % 2 === 0 ? (this.collection[len / 2] + this.collection[len / 2 -1]) / 2 : this.collection[(len - 1) / 2] ;
        return this;
    },
    num_to_letter: function (num) {
        var letters = 'zabcdefghijklmnopqrstuvwxyz';
        var NUMBER_OF_LETTERS = 26;
        var result;
        if (num / NUMBER_OF_LETTERS > 1) {
            var first_letter = letters.charAt((Math.ceil(num / NUMBER_OF_LETTERS))-1);
            var second_letter = letters.charAt(num % NUMBER_OF_LETTERS);
            result = first_letter + second_letter;
        }else {
            result = letters.charAt(num);
        }
        this.collection = result;
        return this;
    },
    range: function (num_a,num_b) {
        var step = Math.abs(num_b - num_a)/(num_b - num_a);
        var count = (num_b - num_a) / step;
        var result = [];
        for (var i = 0; i <= count; i ++) {
            result[result.length] = (num_a + i * step);
        }
        if (num_a === num_b) {
            result = [num_a];
        }
        this.collection = result;
        return this;
    },
    value: function() {
        return this.collection;
    }
};

// var temp = _().range(1,9).bubble_sort(function (item_a,item_b) {
//     return item_a < item_b;
// }).value();

module.exports = _;
