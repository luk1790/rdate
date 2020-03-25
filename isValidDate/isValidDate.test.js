var isValidDate = require('./isValidDate');
describe('validDate', () => {
    it('is correct', () => {
        const date = '1990/01/17';
        expect(isValidDate(date)).toBeTruthy();
    });

    it('is incorrect', () => {
        const date = '2020/02/30';
        expect(isValidDate(date)).toBeFalsy();
    });

    it('is incorrect format', () => {
        const date = new Date('2020/02/30');
        expect(isValidDate(date)).toBeFalsy();
    });
});
