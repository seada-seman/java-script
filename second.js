
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
