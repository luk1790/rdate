const timeToString = require('./timeToString');
describe('timeToString', () => {
    it('test', () => {
         expect(timeToString('11:29')).toBe('jedynasta dwadzieścia dziewięć')
         expect(timeToString('20:29')).toBe('dwudziesta dwadzieścia dziewięć')
         expect(timeToString('20:11')).toBe('dwudziesta jedenaście')
    });
});
