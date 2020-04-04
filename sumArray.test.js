const sumArray = require('./sumArray');

describe("Sum of Array", () => {
    test("It should return sum of the arrary", () => {
        const input = [1,2,3,4,5,6,7];

        expect(sumArray(input)).toEqual(28);
    })

    test("it should say array is empty", () => {
        const input = [];
        const output = "array is empty";

        expect(sumArray(input)).toEqual(output)
    })

    test("it should say array should contain integers only", () => {
        const input = [1, 'a', 4, 'b']
        const output = "array should contain integers only"

        expect(sumArray(input)).toEqual(output)
    })
})