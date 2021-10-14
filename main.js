const numbers = [14, 7, 80, 10];
numbers.sort( (a,b) => {
    if (a == b){
        return 0;
    }
    if (a < b ){
        return -1;
    }
    return 1;
});
console.log(numbers);