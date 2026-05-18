
document.getElementById('title').innerHTML = "Learning Javascript"
document.getElementById('title').style.color = 'red'

document.getElementById('btn').addEventListener('click', function (){
    document.getElementById('image').src = './image2.jpg'
})

const person1 = {
    firstName: "abebe",
    lastname: "daba",
    age: 28,
    gender: "M",
    fullName: function(){
        return this.firstName + " "+ this.lastName
    }
}
const person2={
    firstName: "Kebede",
    lastName: "dawit",
    age: 40,
    gender: "M",
    fullName: function(){
        return this.firstName + " "+ this.lastName
    },
    eat: function(){
        return "Eating.."
    }
}

console.log(person2.fullName())
console.log(person2.eat())

let fullName="abebe d'awit "

console.log(fullName.toUpperCase())
console.log(fullName.trim())
console.log(fullName.slice(1,5)) 

let x=1.1e3
console.log(x)

const array=["banana", "appel", "mango",12,true]

console.log(array[0])
console.log(array[4])

array[4]="avocado"

console.log(array[4])

array.forEach((f) => {
    console.log(f)
});


const today = new Date()
const someday = new Date("12-2-2023")

console.log(today)
console.log(someday)
console.log(today.getFullYear())
console.log(today.getMonth())

console.log(today>someday)

console.log(Math.PI)
console.log(Math.LN2)
console.log(Math.round(3.4))
console.log(Math.round(3.5))
console.log(Math.ceil(3.1))
console.log(Math.floor(3.9))
console.log(Math.trunc(3.9))

console.log(Math.pow(3,2))
console.log(Math.sqrt(81))

console.log(Math.random())

//from 1 to 10
console.log(Math.floor(Math.random() * 10))

console.log(true && false)
console.log(true || false)
console.log(!false)

let a= 200, b= 30

a>b ?console.log("correct"):console.log("incorrect")

let name = null
console.log(name??"guest")

let day=0;

switch(day){
    case 0:
        console.log("Monday")
        break
    case 1:
        console.log("Tu")
        break
    case 2:
        console.log("Wed")
        break
    case 3:
        console.log("th")
        break
    }