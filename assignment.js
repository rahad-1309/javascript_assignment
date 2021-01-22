// problem_01
function kilometerToMeter(kiloMeter) {
    var meter = kiloMeter * 1000;
    //  if any user input any negetive value they will get an error messege
    if (meter < 0) {
        console.log("ERROR!you have put negative value");
    }
    else {
        return meter;
    }

}
var output = kilometerToMeter(17);
console.log(output);
// if we put negative value it will give uou an error messege
console.log(kilometerToMeter(-13));


// problem_02
function budgetCalculator(watch, phone, laptop) {
    var watchPrice = 50 * watch;
    var phonePrice = 100 * phone;
    var laptopPrice = 500 * laptop;
    var totalBudget = watchPrice + phonePrice + laptopPrice;
    if (watchPrice < 0 || phonePrice < 0 || laptopPrice < 0) {
        console.log("ERROR!you have put negative value");
    }
    else {
        return totalBudget;
    }

}
console.log(budgetCalculator(7, 10, 3));
console.log(budgetCalculator(-13, 3, 1));


// problem_03
function hotelCost(timePeriod) {
    var firstTendayz = 10 * 100;
    var fistTwentyDayz = (10 * 100) + (10 * 80);

    if (timePeriod <= 10) {
        var cost = timePeriod * 100;
    }
    else if (timePeriod >= 10 && timePeriod <= 20) {
        var afterTenDay = timePeriod - 10;
        var offerCost = firstTendayz + (afterTenDay * 80);
    }
    else if (timePeriod > 20) {
        var aftertwentyDay = timePeriod - 20;
        var luxeryOffer = fistTwentyDayz + (aftertwentyDay * 50);
    }
    if (timePeriod > 0 && timePeriod <= 10) {
        return cost;

    }
    else if (timePeriod >= 10 && timePeriod <= 20) {
        return offerCost;
    }
    else if (timePeriod > 20) {
        return luxeryOffer;
    }
    else {
        console.log("ERROR!you have put negative value");
    }
}
// if we put negative value it will autometcally give you an error message
console.log(hotelCost(54));
console.log(hotelCost(-54));


// problem_04
function megaFriend(array) {

    var longestWord = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i].length > longestWord) {
            longestWord = array[i].length;
            var name = array[i];
            if(name.length<=0){
                console.log("error! you have put no name");
            }
         
        }

    }
    return name;
}
console.log(megaFriend(["jalal", "kamal", "rashid", "Taousifur", "sadik"]));
 