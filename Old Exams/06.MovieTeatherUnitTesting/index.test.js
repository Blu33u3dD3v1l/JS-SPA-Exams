const movieTheater  = require('./index');
const expect = require('chai').expect;
const assert = require('assert').strict;
const { throws } = require('assert');
const exp = require('constants');
const { isRegExp } = require('util/types');

describe('Tests', () => {
   
   
   it('isG', () => {    

            let a = movieTheater.ageRestrictions('G');
            assert.equal(a,`All ages admitted to watch the movie`);
           
    });  
    it('isPG', () => {    

        let a = movieTheater.ageRestrictions('PG');
        assert.equal(a,`Parental guidance suggested! Some material may not be suitable for pre-teenagers`);
       
});  
it('isR', () => {    

    let a = movieTheater.ageRestrictions('R');
    assert.equal(a,`Restricted! Under 17 requires accompanying parent or adult guardian`);
   
});  
it('isNC-17', () => {    

    let a = movieTheater.ageRestrictions('NC-17');
    assert.equal(a,`No one under 17 admitted to watch the movie`);
   
});
it('noAgeRestrict', () => {    

    let a = movieTheater.ageRestrictions('sdffds');
    assert.equal(a,`There are no age restrictions for this movie`);
   
});  
  
it('itsNotNum', () => {    

    expect(() => movieTheater.moneySpent('dsf',['aa','aa'],['aa','aa']).throw('Invalid input'));
   
});  
it('itsNotArray1', () => {    

    expect(() => movieTheater.moneySpent(15,'aaa',["a","aa"]).throw('Invalid input'));
   
});  
it('itsNotArray2', () => {    

    expect(() => movieTheater.moneySpent(15,["a","aa"],'aaa').throw('Invalid input'));
   
});  
 
it('isWorkingCorrect1', () => {    

    let a = movieTheater.moneySpent(10,['Nachos', 'Popcorn'],['Soda','Water']);

    let b = (10 * 15) + (6 + 4.5) + (1.5 + 2.5);
    b -= b * 0.2;
    assert.equal(a,`The total cost for the purchase with applied discount is ${b.toFixed(2)}`);
   
});  
it('isWorkingCorrect2', () => {    

    let a = movieTheater.moneySpent(1,['Nachos'],['Soda']);

let b = 15 + 6 + 2.5;
assert.equal(a,`The total cost for the purchase is ${b.toFixed(2)}`);
   
});

it('reservationIsNotArray', () => {    

   
   expect(() =>  movieTheater.reservation('fggf', 12).throw('Invalid input'));
   
});
it('reservationIsNotNum', () => {    

   
    expect(() =>  movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5}], 'fgdgd').throw('Invalid input'));
    
 });
 it('Works1', () => {    

   
   let a = movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5}], 6);
   
   assert.equal(a,1)
    
 });
  it('Works2', () => {    

    let a = movieTheater.reservation([{ rowNumber: 1, freeSeats: 20 }, { rowNumber: 2, freeSeats: 30}], 10);
    
    assert.equal(a, 2);  
  });


});