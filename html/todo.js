const body=document.querySelector('.body')
 const box=document.querySelector('.child')
const input=document.getElementById('input')
const plus=document.querySelector('#plus')
const clear=document.querySelector('#clear')
//input.value='Add a task to the List....'
const newvalue=document.querySelector('#newvalue')
box.addEventListener('click',()=>{
    body.classList.toggle('dark')
    
})
var add=(event,operation)=>
{
    if(operation='plusvalue')
    {
        const div1=document.createElement('div')
        div1.innerHTML=input.value
        localStorage.setItem('val',JSON.stringify(div1.innerHTML))
        newvalue.appendChild(div1)
    }
//     else if(operation='clearvalue')
//     {
       
//     }
 }
plus.addEventListener('click',(event,operation)=>{
    return add('plusvalue')
})
clear.addEventListener('click',()=>{
    // return add('clearvalue')
    newvalue.innerHTML=""
})
