import { describe, test, expect } from "vitest";
import { getTotalWordsFromString } from "./getTotalWordsFromString";

describe("Given", () =>{

    test("When", () => {
        //arrange
        const input = "test";
        
        //act
        if(typeof input !== 'string')
            
            //assert
            expect(() => {getTotalWordsFromString(input)}).toThrowError(`expected string but received ${typeof input}`)
    })
})