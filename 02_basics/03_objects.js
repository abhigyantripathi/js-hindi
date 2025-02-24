//singelton:
//object.create
// const tinderUser= new Object()    //thid is a singelton object

//object literals:
const mySym= Symbol("key1")

const juser={
    name: "abhigyan",
    "full name" : "abhigyan tripathi",
    age:21,
    location: "vns",
    email: "abhigyan@m.com",
    isLoggedIn: false,
    lastLoggInDays: ["monday","tuesday"]
}

// console.log(juser.email)
// console.log(juser["email"])
// console.log(juser["full name"])
// console.log(juser[mySym])


// juser.email= "abhigyantrip@gmail.com"
// console.log(juser["email"])

// Object.freeze(juser)
// juser.email= "abhigyantrip@redhat.com"
// console.log(juser["email"])

// juser.greeting=function(){
//     console.log("hello js user")
// }

// console.log(juser.greeting())

juser.greetingtwo= function(){
    console.log(`hello js user, ${this.name}`)
}
console.log(juser.greetingtwo())
