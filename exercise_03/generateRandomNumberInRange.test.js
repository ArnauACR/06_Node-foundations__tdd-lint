import { describe, test, expect } from "vitest";
import { generateRandomNumberInRange } from "./generateRandomNumberInRange";

describe("Given", () => {
    //test("When", () => {
        // Arrange
        const input = 23;
        // Act and Assert
        expect(() => {
            generateRandomNumberInRange(input)}).toThrowError(`expected number but received ${typeof input}`);
    });
    //test("When", () => {
        const mockRandomValue = 0.6;
        const mockRandomSpy = vi.spyOn(Math, "random").mockReturnValue(mockRandomValue);
        // Arrange
        const input = 10;
        // Act
        const result = generateRandomNumberInRange(input);
        // Assert
        expect(mockRandomSpy).toHaveBeenCalled();
        expect(result).toBe(Math.floor(mockRandomValue * input));
        
    //});
//});
