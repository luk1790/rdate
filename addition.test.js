var addition = require('./addition');

describe('addition', ()=>{
    it('add two days',()=>{
        var date =  new Date('1990/01/11');
        var dateWith2Days =  new Date('1990/01/13');
        expect(addition(date,2)).toBe(dateWith2Days);
    });
})