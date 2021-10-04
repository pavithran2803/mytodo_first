var heading=document.getElementById('heading')
var body=document.querySelector('body')
body.classList.add('dark')
heading.innerHTML="hi from js"
heading.style="color:red;font-size:2rem"
var para=document.getElementsByClassName('para')
// console.log(heading)
// console.log(para.length)
// console.log(para[0])
// console.log(para[1])
// para.push('lorem111')
heading.classList.add('five')
heading.classList.remove('one')
console.log(heading.classList)
var tags=document.getElementsByTagName('h1')
var query=document.querySelector('#heading')
var quer=document.querySelectorAll('.para')
console.log(tags)
console.log(query)
console.log(quer)
var list=document.querySelector('ul')
 var arr=['go to the gym','cook oatmeal','eat']
 for( var i=0;i<arr.length;i++)
 {
    var elements=document.createElement('li')
    var textnode=document.createTextNode(arr[i])
    elements.appendChild(textnode)
    list.appendChild(elements)
 }
