//your code here
let inputData=document.getElementById('evaluatedText');
let count=document.getElementById('letterCount');
inputData.addEventListener('input',()=>{
let element = inputData.value;
let n=element.length;
count.innerText=n;
})
count.innerText=n;
