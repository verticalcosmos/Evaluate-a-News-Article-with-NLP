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

describe('Test, the function "validURL()" for valid url' , () => {
    var url = "https://www.bbc.com/news/world-asia-china-63785351";
    test('It should return true', async () => {
        const response = validURL(url);
        expect(response).toBeDefined();
        expect(response).toBe(true);
    });
});
describe('Test "validURL()" for invalid url' , () => {
    var url = "hps://www.bbc.com/news/world-asia-china-63785351";
    test('It should return false', async () => {
        const response = validURL(url);
        expect(response).toBeDefined();
        expect(response).toBe(false);
    });
});


