var counter = 1;
        setInterval(function(){

           document.getElementById('r' + counter).checked = true;
           counter++;
           if(counter > 2){
             counter=1;
           }
        },3000)

var counter = 1;
        setInterval(function(){

           document.getElementById('radio' + counter).checked = true;
           counter++;
           if(counter > 3){
             counter=1;
           }
        },5000)