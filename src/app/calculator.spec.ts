import {Calculator} from './calculator';

describe('Test for calculator', () => {

  describe('Test for multiply',()=>{

    it('should return a nine', () => {
      //Arrange
      const calculator = new Calculator();
      //Act
      const rta =  calculator.multiply(3,3);
      //Assert
      expect(rta).toEqual(9);
    });
   
    it('should return a four', () => {
      //Arrange
      const calculator = new Calculator();
      //Act
      const rta =  calculator.multiply(1,4);
      //Assert
      expect(rta).toEqual(4);
    });

  })
  
  describe('Test for divide',()=>{

    it('should return some numbers', () => { 
      //Arrange
      const calculator = new Calculator();
      //Act
      const rta =  calculator.divide(6,3); 
      //Assert
      expect(rta).toEqual(2);
      expect(calculator.divide(6,2)).toEqual(3);
      expect(calculator.divide(5,2)).toEqual(2.5);
    });
  
    it('for a zero',()=>{
      const calculator = new Calculator();
      expect(calculator.divide(6,0)).toBeNull();
      expect(calculator.divide(5,0)).toBeNull();
    })
  
  
    it('test matchers',()=>{
      let name ='myName';
      let name2;
      expect(name).toBeDefined();
      expect(name2).toBeUndefined();
      expect(1+3===4).toBeTruthy();
      expect(1+1===3).toBeFalsy();
      });
  })
  
});