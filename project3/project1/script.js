
 let buttons=document.querySelectorAll('.button')
 let body=document.querySelector('body')

buttons.forEach(function(button){
    button.addEventListener('click',(e)=>{
        //console.log(e)
        //console.log(e.currentTarget)
     if (e.target.id =="grey"){
        body.style.backgroundColor=e.target.id
     }
     if (e.target.id =="white"){
        body.style.backgroundColor=e.target.id
     }
     if (e.target.id =="blue"){
        body.style.backgroundColor=e.target.id
     }
     if (e.target.id =="yellow"){
        body.style.backgroundColor=e.target.id
     }
    })
})


