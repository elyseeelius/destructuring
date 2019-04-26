// Destructuring is a new feature in es6 which allow to bring apart unpack a structure to several
// part as variables. in other words, this is a way to extract data from different data
// structure like array and object.
// for an array, I wold say to extract value. For the object, I would say to extract properties.
// There is no significant difference between array and object when it comes to destruturing.
// intead of using dot notation and bracket, we can use destructuring to grab data from an array 
// or object. 




// Use case with array//
// let student = ['elysee', 29, 'Dominican Republic', 'javaScript','Santiago']

//console.log(student
// for (let index = 0; index < student.length; index++) {
//     const element = student[index];
//     console.log(element)
// }
// let [name, ...rest] = student;
// console.log(name)
// console.log(rest)



// Use case with object

let student = {
name: 'elysee',
country:' Haiti',
school:'pirple',
course:{
    frontend:{
        first:'javasript',
        second:'react'
    }
}
}
// console.log(student)
// student.color = 'black'
// console.log(student.school)
let {name,country,course:{frontend:{first}}} = student
 console.log(first)