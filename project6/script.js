//generate random color
let interval;
const randcolor=function(){
    const hex="0123456789ABCDEF"
    let color="#"
    for(let i=0;i<6;i++){
       color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
};


const startchangingcolor=function(){
    if(!interval){
    interval= setInterval(changecolor,1000)
    }
function changecolor(){
document.body.style.backgroundColor=randcolor();
};
}

document.querySelector('#start').addEventListener('click',startchangingcolor)
//
const stopchangingcolor=function(){ 
    clearInterval(interval)
    interval=null;  
}

document.querySelector('#stop').addEventListener('click',stopchangingcolor)