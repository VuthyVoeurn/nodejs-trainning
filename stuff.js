var counter = function(arr){
    return 'there are ' + arr.length + ' element in this array';
};

var adder = function(a, b){
    return `sum of the two number is ${a+b}`;

};
 var pi =3.142;

module.exports = {
    counter: counter,
    adder: adder,
    pi: pi
};
