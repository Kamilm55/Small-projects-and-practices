let userName=document.querySelector(`.text1 #myName`);
let questName=prompt(`What is your name?`);

userName.innerHTML = `${questName}`;



function timeLive(){
let allTime=document.querySelector(`#myClock`)

const date=new Date;
let hours=date.getHours();
if(hours>=0 && hours<10){
    hours=`0`+hours;
}
let minutes=date.getMinutes();
if(minutes>=0 && minutes<10){
    minutes=`0`+minutes;
}
let seconds=date.getSeconds();
if(seconds>=0 && seconds<10){
    seconds=`0`+seconds;
}
let day=date.getDay();
if(day==1){
   day= allTime.innerHTML=`bazar ertesi`;
}else if(day==2){
  day=  allTime.innerHTML=`Cersenbe axsami`;
}
else if(day==3){
   day= allTime.innerHTML=`Cersenbe `;
}
else if(day==4){
   day= allTime.innerHTML=`Cume axsami`;
}
else if(day==5){
   day= allTime.innerHTML=`Cume`;
}
else if(day==6){
   day= allTime.innerHTML=`Senbe`;
}
else if(day==0){
   day= allTime.innerHTML=`Bazar`;
}
allTime.innerHTML=`${hours}:${minutes}:${seconds}  ${day}`;

}
setInterval(timeLive);

