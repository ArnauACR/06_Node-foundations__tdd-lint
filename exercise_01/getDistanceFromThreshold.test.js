import { describe, test, expect} from 'vitest';
import { getDistanceFromThreshold } from "./getDistanceFromThreshold";

describe('Given: A valid value and threshold', () => {

    test('When: The distance between the value and threshold is calculated', () => {
        //arrange
        const input = 20;

        if (typeof input !== 'number') {
            
            //act and assert
            expect(() => {getDistanceFromThreshold(input, 10)}).toThrow(`expected number but received ${typeof input}`)
        }
    })

    test('Then: The result should be the absolute difference between both', () => {
        //arrange
        const input = 20;

        if (typeof input !== 'number') {
            
            //act and assert
            expect(() => {getDistanceFromThreshold(10, input)}).toThrow(`expected number but received ${typeof input}`)
        }
    })
})