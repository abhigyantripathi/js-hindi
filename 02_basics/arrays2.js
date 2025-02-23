const arr1= ["abhigyan", "java", "21"]
const arr2=["dsa","system"]

// arr1.push(arr2)
// console.log(arr1)
// const new_arr=arr1.concat(arr2)
// console.log(new_arr)

//spread operator to concat arrays:
const newArr2= [...arr1, ...arr2]
console.log(newArr2)
