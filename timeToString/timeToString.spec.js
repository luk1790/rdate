const timeToString = require('./timeToString');
describe('timeToString', () => {
    it('check some times', () => {
         expect(timeToString('11:29')).toBe('godzina jedynasta minut dwadzieścia dziewięć')
         expect(timeToString('20:29')).toBe('godzina dwudziesta minut dwadzieścia dziewięć')
         expect(timeToString('20:11')).toBe('godzina dwudziesta minut jedenaście')
         expect(timeToString('01:01')).toBe('godzina pierwsza minut jeden')
         expect(timeToString('00:09')).toBe('godzina zero minut dziewięć')
         expect(timeToString('00:45')).toBe('godzina zero minut czterdzieści pięć')
         expect(timeToString('00:00')).toBe('godzina zero minut zero')
    });
    it('check if lang is not support', ()=>{
        expect(timeToString('11:29', 'en')).toBeUndefined()
    })
});
