let total;
let totalsec;
document.getElementById("start").onclick=function(){

   const h= parseInt(document.getElementById("HH").value);
   const m=parseInt(document.getElementById("MM").value);
   const s=parseInt(document.getElementById("SS").value);
      
       totalsec=(h*3600)+m*60+s;
        total = setInterval(display,1000);

       function display(){
        const hoursLeft = Math.floor(totalsec / 3600);
        const minutesLeft = Math.floor((totalsec % 3600) / 60);
        const secondsLeft = totalsec % 60;
        document.getElementById("time").textContent = `${hoursLeft.toString().padStart(2, '0')}:${minutesLeft.toString().padStart(2, '0')}:${secondsLeft.toString().padStart(2, '0')}`;
        if (totalsec <= 0) {
         clearInterval(total);
         
         document.getElementById("time").textContent = 'Time\'s up!';
         document.getElementById('audio').play();
        
       } else {
         totalsec-=1;
       }
      }
     
   
   };
   var isPause=false;
   let value;
   document.getElementById("pause").onclick=function(){
      isPause=true;
      value=totalsec;
      clearInterval(total);
      resume();

   }
   document.getElementById("reset").onclick=function(){
      clearInterval(total);
      document.getElementById("HH").value="00"
      document.getElementById("MM").value="00"
      document.getElementById("SS").value= "00"
      document.getElementById("time").textContent="";
   }
   
   function resume(){
      if(isPause)
      {
         document.getElementById("pause").innerHTML="Resume";
         document.getElementById("pause").onclick=function(){

            document.getElementById("pause").innerHTML="Pause";
            document.getElementById("time").textContent = 'Working on it';
            
         }
         
      }
   }
  
  