const number1 = 1
 
 switch (Number(number1)) {
     case 1:
         console.log("Sunday");    
         break;
     case 2:
         console.log("Monday");    
         break;
     case 3:
         console.log("Tuesday");    
         break;
     case 4:
         console.log("Wednesday");    
         break;
     case 5:
         console.log("Thursday");    
         break;
     case 6:
         console.log("Friday");    
         break;
     case 7:
         console.log("Saturday");    
         break;
     default:
         console.log("Invalid input!!! There are only 7 days in a week");
         break;    
 }