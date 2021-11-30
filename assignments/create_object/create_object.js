function CreateObject(arr) {
    // Write your code here
    let dictarr = {};
    for(var i =0; i<arr.len; i+=2){
        dictarr[arr[i]] = arr[i+1];
    }
    return dictarr
}

module.exports = CreateObject;
