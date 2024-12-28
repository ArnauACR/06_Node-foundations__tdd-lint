import { describe, test, expect } from "vitest";
import { isGreaterThan } from "./isGreaterThan";

describe('Given: A valid value and threshold', () => {

    test('When', () => {
        //arrange
        const input = 20;

        if (typeof input !== 'number') {
            
            //act and assert
            expect(() => {isGreaterThan(input, 10)}).toThrow(`expected number but received ${typeof input}`)
        }
    })

    test('Then', () => {
        //arrange
        const input = 20;
        if (typeof input !== 'number') {
            
            //act and assert
            expect(() => {isGreaterThan(10, input)}).toThrow(`expected number but received ${typeof input}`)
        }
    })
})