
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
    case 4:
        console.log("fri")
        break
    default:
        console.log("Day not found")
}

const numbers = [12,3,5,7,87,4,34]

for(let n of numbers){
    console.log(n)
}

const pc ={brand:"hp", model:"pavilion", ram:"8GB", storage:"500Gb"}

for(let key in pc){
    console.log(key)
    console.log(pc[key])
}

//aray of objects


const students = [
    
    {id: 1, Name:"blen", Gender:"F"},
    {id: 2, Name:"sada", Gender:"F"},
    {id: 3, Name:"kebreab", Gender:"M"},
]

console.log(students[1].Name)

//object with array

const student ={
    id: 1,
    Name: "blen",
    Gender:"F",
    Hobby: ["Sport", "Music","Art"]
}

console.log(student.Hobby)

//Nested objects

const company = {
    name: "Sage",
    Address: {
        country:"Ethiopia",
        city:"A.A",
        place:"piyasa",
        building: "Eliana"
    }
}

console.log(company.Address.country)

students.forEach(function(s){
    console.log(s.Name)
})


document.querySelector(".subtitle").innerText ="this subtitle got changed by javascript"

const newDiv = document.createElement("div")
newDiv.innerText = "i am new div"

console.log(newDiv)

//document.body.appendChild(newDiv)
//newDiv.remove();

document.getElementById("addElementBtn").addEventListener("click", function(){
    document.body.appendChild(newDiv)
})

document.getElementById("removeElementBtn").addEventListener("click", function(){
    newDiv.remove();
})

let toggle = false;

document.getElementById("toggleBtn").addEventListener("click", function(){
    if (toggle == false){
        document.body.appendChild(newDiv)
        toggle = true;
    }else {
        newDiv.remove();
        toggle = false;
    }
})

let Switch = false;

document.getElementById('switchBtn').addEventListener('click',function(){
    if(Switch == false){
        document.getElementById('off').innerText = "On"
        Switch = true;
    }else {
        document.getElementById('off').innerText ="Off"
        Switch = false;
    }
})

let counter = 0;

document.getElementById('addBtn').addEventListener('click', function(){
    counter = counter+1
    document.getElementById('counter').innerHTML = counter
})
document.getElementById('subtractBtn').addEventListener('click',function(){
    counter = counter-1
    document.getElementById('counter').innerHTML = counter
})
document.getElementById('resetBtn').addEventListener('click', function(){
    counter = 0
    document.getElementById('counter').innerHTML = 0
})