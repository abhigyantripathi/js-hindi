const arr1= ["abhigyan", "java", "21"]
const arr2=["dsa","system"]

// arr1.push(arr2)
// console.log(arr1)
// const new_arr=arr1.concat(arr2)
// console.log(new_arr)

//spread operator to concat arrays:
const newArr2= [...arr1, ...arr2]
console.log(newArr2)



const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh")) // converting input string to array
console.log(Array.from({name: "hitesh"})) // interesting: batana hoga ki key ka array banana hai ya value ka

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));