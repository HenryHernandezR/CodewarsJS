function take(arr, n){ 
    let result = [];
    for ( let i = 0; i < arr.lenght && i < n; i++)
        result.push(arr[i]);
    return result;
}

// take is  the function with two parameters
// result is the empty array where the new list will be built and returned
// a for loop is set with i = 0 to start the count.
// as long as i is less than arr.lenght  and less than n, it will add 1 to i until the criteria is no longer true.
//result.push(arr[i]) will push the new array to the empty result var 
// return the result