const { isPalindrome, hasUpperLower, isEmpty, isNotAlphabetic,isNotAString } = require("../utils");

// Your tests here
describe("palindromes receive double the ponts",()=>{
    it('checks if a word is a palindrome',()=>{
        // arrange
        const text = 'mom'
        // act
        const checker = isPalindrome(text);
        // assert
        expect(checker).toBe(true)
    });
    it("Is a combination of upper and lowercase",()=>{
        const text = 'Mom';
        const checker = hasUpperLower(text);
        expect(checker).toBe(true)
    });
    it("Is empty",()=>{
        const text = '';
        const checker = isEmpty(text);
        expect(checker).toBe(true)
    })
    it("does not have alphabetic letters",()=>{
        const text = '112sawaw';
        expect(()=>isNotAlphabetic(text)).toThrow('Does not have any alphabetic letters')
    })
    it("is not a string",()=>{
        const text = '11212';
        expect(()=>isNotAString(text)).toThrow('Is not a string')
    })

})