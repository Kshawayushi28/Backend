// FUNDAMENTALS OF JAVASCRIPT:

// *ARRAYS*

// FOREACH
var arr = [1,2,3,4];
arr.forEach(function(val) {       // for each member of arr
    console.log(val + " hello");
})
arr.length  // to find length of array

// MAP - It is used to create one more array from the given array
var newarr = arr.map(function(val){
    return val*3;
})
console.log(newarr);

// FILTER
var ans = arr.filter(function(val){
    if(val >= 12) { return true;}
    else return false;
})
console.log(ans)

// FIND 
var bud = [1,2,2,3,4]
var res = bud.find(function(val){
    if(val==2) return val;
})
console.log (res);

// INDEXOF
arr.indexOf(12)    // -1 - as it is not present in the array
arr.indexOf(2)     // 1 - as it it present in the array at that index


// *OBJECTS*

// Key value pairs
var obj = {
    // Key: value
    name: "ayushi",
    age: 25,
    kuchhbhi: "kuchhbhi"
}

// obj.age = 25;

Object.freeze(obj); // It is done so that that value does not change
obj.name // or obj['name']  ---> to access names
obj.age  // to access age



// *FUNCTIONS* 
function abcd(a,b,c){

}
abcd.length  // 3  ---> no. of parameters is the length of the function
typeof function(){}
console.dir(abcd)



// *RETURN*
function efgh(){
    // return 12;
    return "hello world";
}
var ret = efgh();



// *ASYNCHRONOUS JS CODING*

async function wxyz(){
    var blob = await fetch(`https://randomuser.me/api/`);
    var result = await blob.json();

    console.log(result.results[0].name);
}

wxyz();