let yoursccor=0;
let compscore=0;
const choice  = ["rock","paper","scesior"]
console.log(choice[0])
let c=document.getElementById("show")
function rock()
{
    let a=0;    
    let s=Math.floor(Math.random()*3)
    console.log(s)
    if(a===s)
    {
       c.innerHTML=`both chooses ${choice[a]}`
        console.log("you won")
       
     const x=document.querySelector("#res");
     x.innerHTML="you won"
x.style.backgroundColor="yellow"
yoursccor ++;
console.log("you won" ,yoursccor)
const y=document.querySelector(".score #your").innerHTML=yoursccor;
    }
    else{
        c.innerHTML=`computer chooses ${choice[s]}`
        
        const x=document.querySelector("#res");
        x.innerHTML="you lose"
        x.style.backgroundColor="red"
        compscore++;
        console.log("you loss",compscore);
        const y=document.querySelector(".score #comp").innerHTML=compscore;
    }

}
function paper()
{
    let b=1;
 
    const v=Math.floor(Math.random()*3)
    console.log(v)
    if(b===v)
    {
        console.log("you won")
       
     const x=document.querySelector("#res");
     x.innerHTML="you won"
     x.style.backgroundColor="yellow"
     yoursccor ++;
     const y=document.querySelector(".score #your").innerHTML=yoursccor;
    }
    else{
        const x=document.querySelector("#res");
        x.innerHTML="you lose"
        x.style.backgroundColor="red"
        compscore ++;
        const y=document.querySelector(".score #comp").innerHTML=compscore;
    }


}
function scr()
{ let c=2;
       
    let s=Math.floor(Math.random()*3)
    console.log(s)
    if(c===s)
    {
        console.log("you won")
       
     const x=document.querySelector("#res");
     x.innerHTML="you won"
     x.style.backgroundColor="yellow"
     yoursccor++;
     const y=document.querySelector(".score #your").innerHTML=yoursccor;

    }
    else{
        const x=document.querySelector("#res");
        x.innerHTML="you lose"
        x.style.backgroundColor="red"
        compscore;
        const y=document.querySelector(".score #comp").innerHTML=compscore;
    }


}
