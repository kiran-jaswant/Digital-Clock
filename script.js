const clock = document.querySelector("#clock");
 let date= new Date();

 clock.innerHTML=`<h3>${date.toLocaleTimeString()}</h3>`