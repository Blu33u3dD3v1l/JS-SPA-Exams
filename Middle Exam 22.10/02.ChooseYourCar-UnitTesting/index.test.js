const chooseYourCar  = require('./index');
const expect = require('chai').expect;
const assert = require('assert').strict;
const { throws } = require('assert');
const exp = require('constants');

describe('Tests', () => {
   
   
   it('isInvalidYearlow', () => {    

            
            expect(() => chooseYourCar.choosingType('BMW', 'Red', 1500)).throw("Invalid Year!");
    });  
    it('isInvalidYearHigh', () => {    

            
        expect(() => chooseYourCar.choosingType('BMW', 'Red', 2023)).throw("Invalid Year!");
});  
it('isNotSedan', () => {    

            
    expect(() => chooseYourCar.choosingType('Cabrio', 'Red', 1980)).throw('This type of car is not what you are looking for.');
});  
it('isEqualTo2010', () => {    

      let a = chooseYourCar.choosingType('Sedan', 'Red', 2010);
      assert.equal(a, "This Red Sedan meets the requirements, that you have.");
     
}); 
it('isGreaterThan2010', () => {    

    let a = chooseYourCar.choosingType('Sedan', 'Red', 2012);
    assert.equal(a, "This Red Sedan meets the requirements, that you have.");
   
}); 
it('isGreaterOrEqualTo2010', () => {    

    let a = chooseYourCar.choosingType('Sedan', 'Red', 2005);
    assert.equal(a, "This Sedan is too old for you, especially with that Red color.");
   
});
it('isNotArray', () => {    

    
    expect(() =>  chooseYourCar.brandName('dsfds', 1)).throw("Invalid Information!");
});
it('isNotArray2', () => {    

    
    expect(() =>  chooseYourCar.brandName(1, 1)).throw("Invalid Information!");
});
it('isNegativeIndex', () => {    

    
    expect(() =>  chooseYourCar.brandName(['BMW', 'Toyota'], -1)).throw("Invalid Information!");
});
it('isOutsideTheArray', () => {    

    
    expect(() =>  chooseYourCar.brandName(['BMW', 'Toyota'], 2)).throw("Invalid Information!");
});
it('worksCorrect', () => {    

    let a = chooseYourCar.brandName(['BMW', 'Toyota'], 0);
    assert.equal(a, 'Toyota')

});
it('worksCorrect3', () => {    

    let a = chooseYourCar.brandName(['BMW', 'Toyota', 'Mercedes'], 2);
    assert.equal(a,'BMW, Toyota')

});
it('worksCorrect2', () => {    

    let a = chooseYourCar.brandName(['BMW', 'Toyota'], 1);
    assert.equal(a, 'BMW')

});
it('isNEgativeNumber1', () => {    

    expect(() =>  chooseYourCar.carFuelConsumption(-1,2)).throw("Invalid Information!");

});
it('isNEgativeNumber2', () => {    

    expect(() =>  chooseYourCar.carFuelConsumption(5,-2)).throw("Invalid Information!");


});

it('isNotANum1', () => {    

    expect(() =>  chooseYourCar.carFuelConsumption('dfssf', 5)).throw("Invalid Information!");


});
it('isNotANum2', () => {    

    expect(() =>  chooseYourCar.carFuelConsumption(10,'gfdg')).throw("Invalid Information!");


});
it('burnsTooMuchFuel', () => {    

    let a = chooseYourCar.carFuelConsumption(100, 8);
    let b = ((8 / 100) * 100).toFixed(2);
    assert.equal(a, `The car burns too much fuel - ${b} liters!`)


});
it('enaughForRide', () => {    

    let a = chooseYourCar.carFuelConsumption(100, 5);
    let b = ((5 / 100) * 100).toFixed(2);
    assert.equal(a, `The car is efficient enough, it burns ${b} liters/100 km.`)
});
it('enaughForRide2', () => {    

    let a = chooseYourCar.carFuelConsumption(100, 7);
    let b = ((7 / 100) * 100).toFixed(2);
    assert.equal(a, `The car is efficient enough, it burns ${b} liters/100 km.`)
});

});