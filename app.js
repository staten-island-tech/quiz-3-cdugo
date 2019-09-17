

function tipCalculator(bills) {
    if (bills < 50 ) {
        percentage = .2;
    }
    else if (bills >= 50 && bills <= 200){
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * bills;

}

const bills = [140, 45, 270];

const tips = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2])];

const finalCost = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]

function isGreater(num){
    return(num > 100);
}

let copy = finalCost.filter(isGreater);
console.log(copy);