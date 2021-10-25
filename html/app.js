// // console.log("pavithran")
// // var a=10
// // var b=20
// // console.log('a+b=',a+b)
// // console.warn(a++)
// // console.log('a')
// var name=""
// var age=0
// function greet(name='pavithran',age=20)
// {
//     console.log(name,age)
// }
// greet()
// function add(a,b)
// {
//     var sum=a+b
//     return sum
// }
// console.log(add(10,20))
// function greets(name,age)
// {
//     var data=name
//     var ages=age
//     return data
// }
// console.log(greets('pavi',20))
// var ads=(a,b)=>{
//     var sum=a+b
//     return sum
// }
// console.log(add(10,20))
// var names= (a) =>
// {
//     var data=a
//     return data
// }
// console.log(names('pavithran.v'))


// var arr= ['morning','breakfast','jogging']
// arr.forEach()
var input=document.querySelector('input')
var button=document.querySelector('button')
var list=document.querySelector('ul')
var body=document.querySelector('body')
console.log(input,button,list)
var callbackfunc =(event) =>
{
    // console.log(event.target)
    // console.log(input.value)


    // var inputtype=input.value
    // var element=document.createElement('li')
    // var textnode=document.createTextNode(inputtype)
    // element.appendChild(textnode)
    // list.appendChild(element)
    body.classList.toggle('dark')
}
button.addEventListener("click",callbackfunc)