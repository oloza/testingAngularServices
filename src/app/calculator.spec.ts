import {Calculator} from './calculator';

describe('Test for calculator', () => {
  it('should multiply', () => {
    //Arrange
    const calculator = new Calculator();
    //Act
    const rta =  calculator.multiply(3,3);
    //Assert
    expect(rta).toEqual(9);
  });
 
  it('should multiply return four', () => {
    //Arrange
    const calculator = new Calculator();
    //Act
    const rta =  calculator.multiply(1,4);
    //Assert
    expect(rta).toEqual(4);
  });

  it('divide shouldreturn some numbers', () => { 
    //Arrange
    const calculator = new Calculator();
    //Act
    const rta =  calculator.divide(6,3); 
    //Assert
    expect(rta).toEqual(2);
    expect(calculator.divide(6,2)).toEqual(3);
    expect(calculator.divide(5,2)).toEqual(2.5);
  });

  it('test matchers',()=>{
    let name ='myName';
    let name2;
    expect(name).toBeDefined();
    expect(name2).toBeUndefined();
    expect(1+3===4).toBeTruthy();
    expect(1+1===3).toBeFalsy();
    });

});