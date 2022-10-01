function InchToFt(inch) {
    return inch/12.0;
}
function FtToMeter(feet) {
    return feet*0.3048;
}

function FtToAcre(feet) {
    return feet/43560.0;
}
console.log("42 in is ",InchToFt(42), " Ft");
console.log("60 ft * 40 ft is ",FtToMeter(60), "m *",FtToMeter(40),"m");
console.log("25 plot of 60 ft * 40 ft is ",FtToAcre(60*40*25),"Acre");