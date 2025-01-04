let name1 = "mariami";
let age1= 20;

//ეს არის კომენტარი

let name2 ="giga";
let age2 = 12;

let color ="blue";
 

let x1 = 10;
let y1 =20;

let z1 =20+30 ;
let z2 = 20*30;
let z3 = 60-30
let z4 = 60/5 ;
let z5= x1+y1;

let num1=40
let num2=50
let num3=num1+num2
let num4=num1*num2
let num5=num1-num2
let num6=num1/num2
let num7=300
let age3=10
age3=12

let p1=document.querySelector(".p1")
p1.textContent= "Giga Lataria"
p1.style.background="black"
p1.style.color="blue"
p1.style.padding="20px"
p1.style.borderRadius="20px"
p1.style.width="100px"
p1.style.height="50px"

let p2=document.querySelector(".p2")
p2.textContent="hello"
p2.style.color="green"
p2.style.background="blue"
p2.style.padding="30px"
p2.style.margin="40px"
p2.style.borderRadius="20px"
p2.style.border="black solid 10px"
p2.style.textAlign="center"


console.log("hello");

console.log("Giga Lataria")
console.log("12")
console.log("blue")

console.log(z5)

console.log(num1)
console.log(num2)
console.log(num3)
console.log(num4)
console.log(num5)
console.log(num6)
console.log(num7)
console.log(age3)
console.log(p1)

let btn1=document.querySelector(".btn1")

console.log(btn1)


btn1.addEventListener("click",() => {
    console.log("buttonwas clicked")

   btn1.style.padding = "40px"
   btn1.style.background= "red"

}) 

let btn2=document.querySelector(".btn2")
console.log(btn2)
btn2.addEventListener("click", () => {
    btn2.style.border="blue solid 10px"
})