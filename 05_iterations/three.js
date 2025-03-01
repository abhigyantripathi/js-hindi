//higher order array loops:
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
      //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


   //console.log(map);

for (const [key, value] of map) {
     //console.log(key, ':-', value);
}
for (const [key, value] of map) {
    //  console.log(key);
}


//"NOTE: MAPS ARE ITERATBLE BY FOR OF LOOP BUT OBJECTS AREN'T":
// const myObject={
//      'game1':"aspalth",
//      'game2':"freefire",
//      'game3':"subwaysurfers"
// }
// for (const [key,value] of myObject) {
//     // console.log(key ,":-", value);
// }



