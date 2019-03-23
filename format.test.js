var format = require('./format');

describe('Format',()=>{
    it('check format YYYY-MM-DD', ()=>{
      const date = new Date('1990/01/17');
      expect(format(date, 'YYYY-MM-DD')).toBe('1990-01-17');
    });
    it('check format DD', ()=>{
      const date = new Date('1990/01/17');
      expect(format(date, 'DD')).toBe('17');
    });
    it('check format YYYY', ()=>{
      const date = new Date('1990');
      expect(format(date, 'YYYY')).toBe('1990');
    });
    it('check format MM', ()=>{
      const date = new Date('1990/01/17');
      expect(format(date, 'MM')).toBe('01');
    });
    it('check format YY', ()=>{
      const date = new Date('1990/01/17');
      expect(format(date, 'YY')).toBe('90');
    });
    it('invalid date', ()=>{
      const date = new Date('17-01-1990');
      expect(format(date)).toBeFalsy();
    });
  });