const number3 = 2
           
 const digit = 15
 
 switch (Number(number3)) {
     case 1:
         let feetToInch = Number(digit) * 12;
         console.log("Feet to Inch : " +feetToInch);
         break;
     case 2:
         let feetToMeter = Number(digit) / 3.281;
         console.log("Feet to Meter : " +feetToMeter);
         break;
     case 3:
         let inchToFeet = Number(digit) / 12;
         console.log("Inch to Feet : " +inchToFeet);
         break;    
     case 4:
         let meterToFeet = Number(digit) * 3.281;
         console.log("Inch to Feet : " +meterToFeet);
         break
     default:
         console.log("You have entered the wrong options!!!");
         break;
 }