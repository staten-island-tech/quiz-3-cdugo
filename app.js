

/* function tipCalculator(bills) {
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
console.log(copy); */

const Rob = {
    fullName: 'Rob Grande',
    mass: 78,
    height: 1.69,
    bmi: function(){
        return (this.mass / this.height*2)
    }
        
        
};
const Dejon = {
    fullName: 'Dejon Kurti',
    mass: 110,
    height: 1.95,
    bmi: function(){
        return (this.mass / this.height*2)
    }
};

if (Dejon.bmi() > Rob.bmi()) {
    console.log(Dejon.bmi)
};
else if {

}