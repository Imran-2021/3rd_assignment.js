

//__________problem-01(kilometerToMeter)___________

function kilometerToMeter(kilometer){
    if(kilometer>=0){
//we know that ,1 kilometer = 1000 meter.
        var meter =kilometer*1000;
        meter = (meter.toFixed(2));
    }
    else{
        var meter = "how its be negative, sir!";   
    }
    return meter;
}


//__________problem-02(budgetCalculator)___________

function budgetCalculator (watch,phone,laptop){
    if(watch>=0 && phone>=0 && laptop>=0){
// we know that each watch price is $50,each phone price is $100 and each laptop price is $500
        var totalCost = ((watch*50)+(phone*100)+(laptop*500));
    }
    else{
        var totalCost =("how its be negative, sir!!")
    }
    return totalCost;
    }



//_________________________________problem-3(hotelCost)______________________
function hotelCost (totalDays){
    var totalCost = 0;
if((totalDays>=0 && totalDays<=10)){
//for 1-10 day - par day cost 100tk
totalCost = totalDays*100;
}
else if(totalDays>10 && totalDays<=20){
    var firstpart = 10*100;
    var remaining = totalDays-10;
//for 11-20 day - par day cost 80tk
    var secondpart = remaining*80;
    totalCost = firstpart + secondpart;
    }
else if(totalDays>20 && totalDays>=21){
     var firstpart = 10*100;
    var secondpart = 10*80;
    var remaining = totalDays - 20;
//for 21-nxt all day - par day cost 50tk
    var thirdpart = remaining*50;
    totalCost = firstpart + secondpart + thirdpart;
    }
else{
    totalCost ="how its be negative, sir!!!"
    }
return totalCost;
}



//_________________________problem-4(megaFriend)_______
function megaFriend(frinds){
var longestWord ="";
for(var i =0; i<frinds.length;i++){
    if(longestWord.length < frinds[i].length){
        longestWord = frinds[i];
    }
}
return longestWord;
}

//________________________________________________

//code test by -
console.log(kilometerToMeter(99));
console.log(budgetCalculator (10,1,2));
console.log(hotelCost (105))
console.log(megaFriend(["imran","rakibul","rahman","arif"]));


//___________________end___________________________________