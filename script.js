const clock = document.querySelector("#clock");
 

 
 setInterval(()=>{
    let date= new Date();
    let time = date.toLocaleTimeString();
    clock.innerHTML=`<h3>${time}</h3>`


 },1000);

 