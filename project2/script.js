let form =document.querySelector('form')
form.addEventListener('submit',(e)=>{
e.preventDefault(); 

let height=parseInt(document.querySelector('#height').value)
let weight=parseInt(document.querySelector('#weight').value)
let calculate=document.querySelector("button")
let result=document.querySelector("#results")

if (height===""||height<0||isNaN(height)){
    result.innerHTML='Please give a valid height'

}
else if (weight===""||weight<0||isNaN(weight)){
    result.innerHTML='Please give a valid height'
}
else{
    const bmi=(weight /((height*height)/10000)).toFixed(2)
    result.innerHTML=`<span>${bmi}</span>`

    if (bmi<18.6){
        result.innerHTML+=`<p>Underweight</p>`
    }
}

})


