import {validURL} from '../client/js/urlChecker'


describe('Test, the function "validURL()" should exist' , () => {
    test('It should return true', async () => {
        expect(validURL).toBeDefined();
    });
});
describe('Test, the function "validURL()" should be a function' , () => {
    test('It should be a function', async () => {
        expect(typeof validURL).toBe("function");
    });
});

