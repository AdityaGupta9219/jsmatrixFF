let a = document.querySelector('button')
let flag =0;
a.addEventListener("click",function(){
    if(flag==0){
    document.querySelector('.gola').style.backgroundColor="yellow";
    flag =1
    }

    else{
    document.querySelector('.gola').style.backgroundColor="transparent";
    flag =0
    }
})